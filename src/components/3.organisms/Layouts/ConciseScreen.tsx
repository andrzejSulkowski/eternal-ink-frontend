"use client";

import { usePageLayout } from "@/context/layoutCtx";
import { PropsWithChildren } from "react";

export default function ConciseScreen(props: PropsWithChildren) {
  const { set } = usePageLayout();
  set({ mode: "concise" });
  return <>{props.children}</>;
}
