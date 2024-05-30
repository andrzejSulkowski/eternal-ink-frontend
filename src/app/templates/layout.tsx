import "@/app/globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <body
        className={[
          kanit.variable,
          manrope.variable,
          "font-manrope, text-white overflow-x-clip overflow-y-auto flex flex-col min-h-screen",
          "bg-black",
        ].join(" ")}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
