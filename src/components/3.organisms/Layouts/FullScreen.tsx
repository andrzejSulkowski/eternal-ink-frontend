"use client";

import { usePageLayout } from "@/context/layoutCtx";
import { PropsWithChildren, useEffect } from "react";

export default function FullScreen(props: PropsWithChildren) {
  const { set } = usePageLayout();
  useEffect(() => {
    set({ mode: "concise" });
  }, [set]);
  return <>{props.children}</>;
}
