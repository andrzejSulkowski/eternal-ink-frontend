import "./globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";
import Banner from "@/components/1.atoms/Banner/Banner";
import { BannerProvider } from "@/components/1.atoms/Banner/BannerContext";
import { EIRoute } from "@/types";
import Footer, { ISocial } from "@/components/3.organisms/Footer/Footer";
import LinkedIn from "@/components/Svgs/LinkedIn";
import Github from "@/components/Svgs/Github";
import Web from "@/components/Svgs/Web";
import LoadingScreenProvider from "@/context/loadingScreenCtx";
import Header from "@/components/3.organisms/Header/Header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

const headerRoutes: EIRoute[] = [
  {
    href: "/home",
    name: "Home",
  },
  {
    href: "/engrave",
    name: "Engrave",
  },
  {
    href: "/retrieve",
    name: "Retrieve",
  },
];
const footerRoutes: EIRoute[] = [
  {
    href: "/cookies",
    name: "Cookie Preferences",
  },
  {
    href: "/privacy",
    name: "Privacy Policy",
  },
];
const footerSocials: ISocial[] = [
  { href: "https://github.com/andrzejSulkowski", cmp: Github },
  {
    href: "https://www.linkedin.com/in/andrzej-sulkowski-600b89208/",
    cmp: LinkedIn,
  },
  { href: "https://www.andrzej-sulkowski.com/", cmp: Web },
];

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
          "font-manrope, text-white flex flex-col min-h-screen",
          "bg-black",
        ].join(" ")}
      >
        <LoadingScreenProvider>
          <BannerProvider>
            <Banner />
            <Header routes={headerRoutes} className="" />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer routes={footerRoutes} socials={footerSocials} />
          </BannerProvider>
        </LoadingScreenProvider>
      </body>
    </html>
  );
}
