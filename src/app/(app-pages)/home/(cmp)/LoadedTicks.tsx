"use client";
import TickHor, { TickProps } from "@/components/2.molecules/TickHor/TickHor";
import { useCallback, useEffect, useState } from "react";
import api from "@/libs/api/transaction";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import { useRouter } from "next/navigation";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const tickClick = (id: string, router: AppRouterInstance) =>
  router.push(`/retrieve/${id}`);

function LoadedTicks({ className }: EIProps) {
  const { showBanner } = useBanner();
  const [ticks, setTicks] = useState<TickProps[]>([]);
  const router = useRouter();

  const init = useCallback(async () => {
    try {
      const resp = await api.getMessages({ items: 10, after_uuid: null });
      if (resp.ok) {
        const ticks: TickProps[] = resp.data!.messages.map((m) => ({
          address: m.id,
          txHash: m.tx_id,
          onClick: () => tickClick(m.id, router),
        }));
        setTicks(ticks);
      } else {
        showBanner("error: Failed to load ticks");
      }
    } catch (error) {
      showBanner(`error failed to load tickets`);
    }
  }, [showBanner]);

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={classNames(className)}>
      <TickHor ticks={ticks} tpm={1} />
    </div>
  );
}

export default LoadedTicks;
