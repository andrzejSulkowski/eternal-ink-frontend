"use client";
import TickHor, { TickProps } from "@/components/2.molecules/TickHor/TickHor";
import { useCallback, useEffect, useState } from "react";
import api from "@/libs/api/transaction";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import { useRouter } from "next/navigation";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

function LoadedTicks({ className }: EIProps) {
  const { showBanner } = useBanner();
  const [ticks, setTicks] = useState<TickProps[]>([]);

  const router = useRouter();
  const tickClick = useCallback(
    () => (id: string) => router.push(`/retrieve/${id}`),
    [router]
  );
  const init = useCallback(async () => {
    const resp = await api.getMessages({ items: 10, after_uuid: null });
    if (resp.ok) {
      const ticks: TickProps[] = [];
      resp.data!.messages.forEach((m) => {
        ticks.push({
          address: m.id,
          txHash: m.tx_id,
          onClick: tickClick,
        });
      });
      setTicks(ticks);
    } else {
      showBanner("error: Failed to load ticks");
    }
  }, [showBanner, tickClick]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className={classNames(className)}>
      <TickHor ticks={ticks} tpm={1} />
    </div>
  );
}
export default LoadedTicks;
