import React, { useMemo, useState } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { TxId, getStatusColor, trim, displayStatus } from "@/libs/transaction";
import { TxStatus } from "@/models";

interface Props extends EIProps {
  status?: TxStatus;
  message?: string;
  txId?: TxId;
}

function RetrievedMessage({ className, status, message, txId }: Props) {
  const isCmpRdy = useMemo<boolean>(() => {
    return status !== undefined && txId !== undefined;
  }, [status, txId]);

  const dStatus = useMemo<ReturnType<typeof displayStatus>>(() => {
    if (status !== undefined) {
      return displayStatus(status);
    } else {
      return "Unknown";
    }
  }, [status]);

  const bodyMessage = useMemo(() => {
    if (dStatus === "Finalized") {
      return "Engraved Message: ";
    } else {
      return "Engraving Message: ";
    }
  }, [dStatus]);

  return (
    <div
      className={classNames(
        "bg-ei-primary-light/10 px-4 pt-5 pb-10 rounded-2xl border-solid border border-ei-primary-dark font-manrope flex flex-col gap-4 text-sm min-h-40 max-w-full",
        className
      )}
    >
      {isCmpRdy ? (
        <>
          {/* Header */}
          <div className="flex justify-between gap-4 md:gap-0 flex-col md:flex-row">
            <div>
              <span className="text-ei-primary-faded mr-4 text-xl lg:text-sm">
                Status:
              </span>
              <span
                className={classNames(
                  getStatusColor(status!),
                  "font-bold text-xl lg:text-sm"
                )}
              >
                {dStatus}
              </span>
            </div>
            <div>
              <span className="text-ei-primary-faded mr-4 text-xl lg:text-sm">
                Transaction:
              </span>
              <span className="text-white font-bold lg:text-sm text-xl">
                {trim(txId!)}
              </span>
            </div>
          </div>
          {/* Body */}
          <div className="flex flex-col pt-8 border-t-ei-primary-dark border border-transparent gap-3">
            <span className="text-ei-primary-faded text-xl lg:text-sm">
              {bodyMessage}
            </span>
            <span className="text-white font-extrabold text-3xl md:text-xl break-words whitespace-pre-wrap">
              {message}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default RetrievedMessage;
