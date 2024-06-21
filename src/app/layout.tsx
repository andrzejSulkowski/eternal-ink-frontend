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

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};
const headerRoutes: EIRoute[] = [
  {
    href: "/",
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
    <html lang="en">
      <body
        className={[
          kanit.variable,
          manrope.variable,
          "font-manrope, text-white overflow-x-clip overflow-y-auto flex flex-col min-h-screen",
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
