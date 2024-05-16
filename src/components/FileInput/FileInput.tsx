import React, { useMemo, useRef } from "react";
import { MimeType } from "@/libs/mime-types/types";

// Custom Hooks
import { useFileInputState, STATE } from "./hooks/useFileInputState";
import { useDropzone } from "./hooks/useDropzone";

// States
import Default from "./states/Default";
import Enter from "./states/Enter";
import Loading from "./states/Loading";
import Full from "./states/Full";

// Banner
import InfoBanner from "./parts/InfoBanner/InfoBanner";
import FileBanner from "./parts/FileBanner/FileBanner";
import LoadingFileBanner from "./parts/LoadingFileBanner/LoadingFileBanner";

export interface Props {
  file?: File;
  allowedMimeTypes: MimeType[];
  onInput: (f: File | null) => void;
}

///TODO: The first div has a fixed padding. I'd like to make it to try to have py-14 and px-44 but it is more important that the text does not break into another line.
function FileInput(props: Props) {
  let fileInputRef = useRef<HTMLInputElement | null>(null);
  let uploadTimeStamp: React.MutableRefObject<number | null> = useRef(null);

  const { isDragActive, dragEnter, dragLeave, drop } = useDropzone(
    props,
    uploadTimeStamp
  );

  const { state } = useFileInputState(props, uploadTimeStamp, isDragActive);
  const progress = useMemo(() => (props.file ? 100 : 0), [props.file]);
  const componentMap = {
    default: Default,
    enter: () => (
      <Default>
        <Enter onDragLeave={dragLeave} onDrop={drop} />
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
    full: () => (
      <FileBanner
        src="/storybook_resources/axe.png"
        name="filename.png"
        size={{ value: 21, unit: "MB" }}
        onRemove={() => props.onInput(null)}
      />
    ),
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

  return (
    <>
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            props.onInput(files[0]);
          }
        }}
      />
      <span className="text-white font-manrope font-bold text-sm mb-4 block">
        Add your File
      </span>
      <div
        onDragEnter={dragEnter}
        onClick={() => fileInputRef.current?.click()}
        className={[
          "py-14 px-44 border border-dashed rounded-2xl flex justify-center items-center text-white font-manrope text-sm font-bold bg-ei-light-purple mb-4 relative",
          "w-full",
          getCursor,
        ].join(" ")}
      >
        <StateComponent />
      </div>
      <BannerComponent />
    </>
  );
}

export default FileInput;
