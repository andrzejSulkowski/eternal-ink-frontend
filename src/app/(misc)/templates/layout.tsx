import "@/app/globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main data-templates-layout className="flex-grow">
      {children}
    </main>
  );
}
