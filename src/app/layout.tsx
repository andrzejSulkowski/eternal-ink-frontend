import "./globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";
import type { EIRoute } from "@/types";
import Header from "@/components/3.organisms/Header/Header";
import Footer, { ISocial } from "@/components/3.organisms/Footer/Footer";
import LinkedIn from "@/components/Svgs/LinkedIn";
import Github from "@/components/Svgs/Github";
import Web from "@/components/Svgs/Web";

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
