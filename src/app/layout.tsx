import "./globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";
import Banner from "@/components/1.atoms/Banner/Banner";
import { BannerProvider } from "@/components/1.atoms/Banner/BannerContext";

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
    <html lang="en">
      <body
        className={[
          kanit.variable,
          manrope.variable,
          "font-manrope, text-white overflow-x-clip overflow-y-auto flex flex-col min-h-screen",
          "bg-black",
        ].join(" ")}
      >
        <BannerProvider>
          <Banner />
          <main className="flex-grow flex flex-col">{children}</main>
        </BannerProvider>
      </body>
    </html>
  );
}
