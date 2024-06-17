"use client";
import Button from "@/components/1.atoms/Button/Button";
import Label from "@/components/1.atoms/Tag/Tag";
import ThreeStars from "@/components/Svgs/ThreeStars";
import Background from "@/components/Svgs/bg/1/Background";
import { classNames } from "@/utils/className";
import RetrievedMessage from "@/components/2.molecules/RetrievedMessage/RetrievedMessage";
import { useState } from "react";
import { TxStatus } from "@/models";
import Input from "@/components/1.atoms/Input/Input";

function RetrievePage() {
  const [status, setStatus] = useState<TxStatus | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [txId, setTxId] = useState<string | undefined>();

  function retrieve() {}

  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Retrieve your Message</h3>
            <Label className="absolute -top-5 -right-24 w-auto h-8 text-sm -z-10">
              Simple Dimple
            </Label>
          </div>
          <span className="text-ei-primary-faded block mb-12 w-1/2">
            Egestas etiam posuere ultrices volutpat in dolor in. Cursus auctor
            tincidunt volutpat sem amet. Penatibus tempus sed.
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-2 gap-8 font-manrope">
          {/* Cols1 */}
          <div data-col1 className="w-full">
            <span className="font-bold text-sm block mb-4">
              Enter Transaction ID
            </span>
            <Input
              className="!bg-[#09090A]"
              placeholder="24 symbols long"
              value={txId}
              onChange={(e) => setTxId(e.target.value)}
            />
            <Button className={`!w-1/3 mt-8 !justify-center`} onClick={retrieve}>
              Retrieve
              <ThreeStars className="max-w-5 ml-2" />
            </Button>
          </div>
          {/* Col2 */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="font-bold text-sm block"> = </div>
          </div>
          {/* Col3 */}
          <div className="w-full max-w-full">
            <span className="font-bold text-sm block mb-4">Your Result</span>
            <RetrievedMessage status={status} message={message} txId={txId} />
          </div>
        </div>
      </div>
    </>
  );
}
export default RetrievePage;
