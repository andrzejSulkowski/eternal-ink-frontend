"use client";
import Label from "@/components/1.atoms/Tag/Tag";
import Background from "@/components/Svgs/bg/1/Background";
import { IMessage } from "@/libs/api/models";
import api from "@/libs/api/transaction";
import { classNames } from "@/utils/className";
import { useEffect, useState } from "react";
import Tick from "@/components/1.atoms/Tick/Tick";
import { useRouter } from "next/navigation";

function MessagesPage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const router = useRouter();

  const tickClick = (id: string) => router.push(`/retrieve/${id}`);

  useEffect(() => {
    api.getMessages({ items: 10, after_uuid: null }).then((res) => {
      if (res.ok && res.data) {
        setMessages(res.data.messages);
      } else {
        console.error("Failed to load messages");
        console.error(res);
      }
    });
  }, []);

  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div
        className={classNames(
          "xl:px-80 lg:px-56 px-10 pt-28 font-manrope flex flex-col flex-1 max-h-full"
        )}
      >
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Messages</h3>
            <Label className="absolute -top-5 -right-2 md:-right-24 w-auto md:h-8 h-12 text-xl lg:text-sm -z-10">
              Global
            </Label>
          </div>
          <span className="text-ei-primary-faded block mb-12 md:w-1/2 text-xl md:text-base">
            View all messages and files that have been stored on the bitcoin
            blockchain with the help of this service.
          </span>
        </div>
        {messages.length === 0 ? (
          <>loading messages...</>
        ) : (
          <div className="flex flex-col gap-8 font-manrope bg-ei-primary/10 px-12 py-8 rounded-3xl overflow-y-auto my-2 flex-1 max-h-full h-full">
            {/* We need to make the date look better and configure all the layouts to have a provider which will set the layouts to be either "squashed" or "loose" */}
            {messages.map((m) => (
              <div className="flex items-start justify-between gap-1 flex-col">
                <span className="flex-shrink-0 text-ei-primary-faded text-base md:text-xs ml-1">
                  {new Date(m.time).toLocaleString()}.
                </span>
                <Tick
                  key={m.id}
                  txHash={m.tx_id}
                  address={m.id}
                  data={m.content}
                  onClick={tickClick}
                  className="bg-ei-primary/20 rounded-xl px-4 !h-12 flex-grow w-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default MessagesPage;
