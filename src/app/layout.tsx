import "./globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";
import type { EIRoute } from "@/types";
import Header from "@/components/3.organisms/Header/Header";
import Footer, { ISocial } from "@/components/3.organisms/Footer/Footer";
import LinkedIn from "@/components/Svgs/LinkedIn";
import Github from "@/components/Svgs/Github";
import Web from "@/components/Svgs/Web";

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
    <html
      lang="en"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Header routes={headerRoutes} className="fixed" />
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
      <Footer routes={footerRoutes} socials={footerSocials} />
    </html>
  );
}
