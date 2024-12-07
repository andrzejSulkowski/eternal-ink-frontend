import Footer, { ISocial } from "@/components/3.organisms/Footer/Footer";
import Header from "@/components/3.organisms/Header/Header";
import Github from "@/components/Svgs/Github";
import LinkedIn from "@/components/Svgs/LinkedIn";
import Web from "@/components/Svgs/Web";
import { EIRoute } from "@/types";
import { PropsWithChildren } from "react";

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
  {
    href: "/messages",
    name: "Messages",
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

export default function FixedLayout({ children }: PropsWithChildren) {
  return (
    // The outer container ensures a full viewport height and vertical flex layout
    <div className="flex flex-col h-screen">
      {/* Header should not grow, only take the space it needs */}
      <Header routes={headerRoutes} className="flex-shrink-0" />

      {/* Main content grows and scrolls internally if needed */}
      <main className="flex-grow overflow-y-auto">{children}</main>

      {/* Footer should not grow either, just remain at the bottom */}
      <Footer
        className="flex-shrink-0 bg-transparent"
        routes={footerRoutes}
        socials={footerSocials}
      />
    </div>
  );
}
