import "./globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";
import Banner from "@/components/1.atoms/Banner/Banner";
import { BannerProvider } from "@/components/1.atoms/Banner/BannerContext";
import LoadingScreenProvider from "@/context/loadingScreenCtx";
import LayoutProvider from "@/context/layoutCtx";
import Head from "next/head";

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
    <html lang="en" className="overflow-x-hidden">
      <Head>
        <meta
          property="og:title"
          content="Eternal Ink - Immortalize Your Thoughts"
        />
        <meta
          property="og:description"
          content="Engrave your ideas and memories on the Blockchain. Eternal Ink provides a secure and permanent solution for storing your thoughts forever."
        />
        <meta
          property="og:image"
          content="https://eternal-ink.app/images/og-image.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eternal-ink.app" />
      </Head>

      <body
        className={[
          kanit.variable,
          manrope.variable,
          "font-manrope text-white flex flex-col min-h-screen max-h-screen",
          "bg-black",
        ].join(" ")}
      >
        <LayoutProvider>
          <LoadingScreenProvider>
            <BannerProvider>
              <Banner />
              {children}
            </BannerProvider>
          </LoadingScreenProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
