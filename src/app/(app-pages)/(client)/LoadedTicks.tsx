"use client";
import TickHor, { TickProps } from "@/components/2.molecules/TickHor/TickHor";
import { useEffect, useState } from "react";
import api from "@/libs/api/transaction";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";

function LoadedTicks() {
  const { showBanner } = useBanner();
  const [ticks, setTicks] = useState<TickProps[]>([]);

  const tickClick = (id: string) => {
    console.log("tick click id: ", id);
  }

  useEffect(() => {
    init();
  }, []);
  async function init() {
    const resp = await api.getMessages({ items: 10, after_uuid: null });
    if (resp.ok) {
      const ticks: TickProps[] = [];
      resp.data!.messages.forEach((m) => {
        ticks.push({
          address: m.id,
          txHash: m.tx_id,
          onClick: tickClick,
        })
      })
      setTicks(ticks);
    } else {
      showBanner("error: Failed to load ticks");
    }
  }

  return (
    <div>
      <TickHor ticks={ticks} tpm={1} />
    </div>
  );
}
export default LoadedTicks;
