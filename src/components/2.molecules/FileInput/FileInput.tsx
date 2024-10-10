import React, { use, useMemo, useRef } from "react";
import { MimeType } from "@/libs/mime-types/types";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

// Custom Hooks
import { useFileInputState, STATE } from "./hooks/useFileInputState";
import { useDropzone } from "./hooks/useDropzone";
//Common Hooks
import { useHiddenFileInput } from "@/hooks/useHiddenFileInput";

// States
import Default from "./states/Default";
import Enter from "./states/Enter";
import Loading from "./states/Loading";
import Full from "./states/Full";

// Banner
import InfoBanner from "./parts/InfoBanner/InfoBanner";
import FileBanner from "./parts/FileBanner/FileBanner";
import LoadingFileBanner from "./parts/LoadingFileBanner/LoadingFileBanner";

export interface Props extends EIProps {
  file: File | null;
  allowedMimeTypes: MimeType[];
  onInput: (f: File | null) => void;
}

///TODO: The first div has a fixed padding. I'd like to make it to try to have py-14 and px-44 but it is more important that the text does not break into another line.
function FileInput(props: Props) {
  const { openHiddenFileInput, HiddenFileInput } = useHiddenFileInput(
    props.onInput
  );
  let uploadTimeStamp: React.MutableRefObject<number | null> = useRef(null);

  const { isDragActive, dragEnter, dragLeave, drop } = useDropzone(
    props,
    uploadTimeStamp
  );

  const maybeDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.file === null) {
      drop(e);
    }
  };
  const { state } = useFileInputState(props, uploadTimeStamp, isDragActive);
  const progress = useMemo(() => (props.file ? 100 : 0), [props.file]);
  const componentMap = {
    default: () => Default({ className: "h-11 leading-10" }), //h-11 <=> 44px which is exactly what the content of full is with 20px each line plus 4px of gap
    enter: () => (
      <Default className="h-11 leading-10">
        <Enter onDragLeave={dragLeave} onDrop={maybeDrop} />
      </Default>
    ),
    loading: () => <Loading progress={progress} />,
    full: Full,
  };

  const bannerMap = {
    default: () => <InfoBanner allowedMimeTypes={props.allowedMimeTypes} />,
    enter: () => <InfoBanner allowedMimeTypes={props.allowedMimeTypes} />,
    loading: () => (
      <LoadingFileBanner
        src="/storybook_resources/dwarf.png"
        namePlaceholder="Loading your file"
        sizePlaceholder=">100 MB"
      />
    ),
    full: () => {
      const src = useMemo(
        () => (props.file ? URL.createObjectURL(props.file) : null),
        [props.file]
      );
      const mbSize = useMemo(
        () =>
          props.file
            ? Math.round((props.file.size / 1024 / 1024) * 100) / 100
            : null,
        [props.file]
      );

      return (
        <>
          {src && mbSize && (
            <FileBanner
              src={src}
              name={props.file?.name ?? ""}
              size={{ value: mbSize, unit: "MB" }}
              onRemove={() => props.onInput(null)}
            />
          )}
        </>
      );
    },
  };

  const StateComponent = componentMap[state] || Default;
  const BannerComponent = bannerMap[state] || InfoBanner;
  const getCursor = useMemo(() => {
    switch (state) {
      case STATE.DEFAULT:
        return "cursor-pointer";
      case STATE.ENTER:
        return "cursor-grabbing";
      default:
        return "cursor-not-allowed";
    }
  }, [state]);

  const maybeOpenFileInput = () => {
    if (props.file === null) {
      openHiddenFileInput();
    }
  };

  return (
    <div className={classNames(props.className, "relative")}>
      <HiddenFileInput accept={props.allowedMimeTypes} />
      <span className="text-white font-manrope font-bold text-sm mb-4 block">
        Add your File
      </span>
      <div
        onDragEnter={dragEnter}
        onClick={maybeOpenFileInput}
        className={classNames(
          "py-14 px-20 border border-dashed rounded-2xl flex justify-center items-center text-white font-manrope text-sm font-bold bg-ei-primary-light bg-opacity-10 mb-4 relative",
          "w-full",
          getCursor
        )}
      >
        <StateComponent />
      </div>

      <div className="absolute -bottom-8 left-0 w-full translate-y-full">
        <BannerComponent />
      </div>
    </div>
  );
}

export default FileInput;
