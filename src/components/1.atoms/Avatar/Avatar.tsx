import React, { useEffect, useState } from "react";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import PropTypes from "prop-types";
import WaveSvg from "@/components/Svgs/Wave";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  address: string;
}

const Avatar: React.FC<Props> = ({ address, className= '' }: Props) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const newUrl = generateAvatarURL(address);
    setUrl(newUrl);
  }, [address]);

  return (
    <>
      <div className={classNames("rounded-full overflow-clip relative max-w-full max-h-full aspect-square", className)}>
        <WaveSvg fillSrc={url} />
      </div>
    </>
  );
};

export default Avatar;
