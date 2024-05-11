import React, { useEffect, useState } from "react";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import PropTypes from "prop-types";
import WaveSvg from "@/components/Svgs/Wave";

interface Props {
  address: string;
}

// const avatarStyle = {
//     ''
// }

const Avatar: React.FC<Props> = ({ address }: Props) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    // This function will be called whenever `address` changes.
    console.log("Generating avatar for address:", address);
    const newUrl = generateAvatarURL(address);
    setUrl(newUrl);
  }, [address]); // Dependency array, useEffect will re-run when `address` changes.

  return (
    <>
      <div className="rounded-full overflow-clip relative max-w-full max-h-full aspect-square">
        <WaveSvg fillSrc={url} />
      </div>
    </>
  );
};

export default Avatar;
