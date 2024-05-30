import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function FooterData({ className }: Props) {
  const nameStyle = "text-ei-primary-faded inline-block w-[85px]";

  return (
    <div className={classNames("text-[10px]", className)}>
      <div>
        <span className={nameStyle}>Certificate ID:</span>
        <span data-certificate-id>
          33892f1955f4a6e909e9f271beacdf69e9434493450bdd663c69a42baf15305a
        </span>
      </div>
      <div>
        <span className={nameStyle}>Transaction ID:</span>
        <span data-transaction-id>
          5f68fc40ee347621b1ea7521a7d90942c8b9d7481c0dc0909a2f30e91cfe90bb
        </span>
      </div>
      <div>
        <span className={nameStyle}>Timestamp:</span>
        <span data-timestamp>02 Apr 2024 06:52:44</span>
      </div>
      <div>
        <span data-block-height className={nameStyle}>Block Height:</span>
        <span>837.348</span>
      </div>
    </div>
  );
}

export default FooterData;
