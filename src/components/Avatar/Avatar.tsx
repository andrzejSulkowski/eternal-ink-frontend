import React, { useEffect, useState } from "react";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import PropTypes from "prop-types";
import WaveSvg from "@/components/Svgs/Wave";

interface Props {
  address: string;
  className?: string;
}

const Avatar: React.FC<Props> = ({ address, className= '' }: Props) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const newUrl = generateAvatarURL(address);
    setUrl(newUrl);
  }, [address]);

  return (
    <>
      <div className={["rounded-full overflow-clip relative max-w-full max-h-full aspect-square", className].join(" ")}>
        <WaveSvg fillSrc={url} />
      </div>
    </>
  );
};

export default Avatar;
