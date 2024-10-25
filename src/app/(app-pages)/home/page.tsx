import Hero from "./(sections)/(hero)/section";
import { classNames } from "@/utils/className";
import { Metadata } from "next";
import LoadedTicks from "./(cmp)/LoadedTicks";
import CardSection from "./(sections)/(card)/section";
import HowItWorks from "@/app/(app-pages)/home/(sections)/(howItWorks)/section";
import Head from "next/head";
import dynamic from "next/dynamic";
const ContactSection = dynamic(() => import("./(sections)/(contact)/section"), {
  loading: () => <p>Loading...</p>,
});
const WhyEngrave = dynamic(() => import("./(sections)/(whyEngrave)/section"), {
  loading: () => <p>Loading...</p>,
});

interface Props {}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({}: Props) {
  return (
    <>
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
          content="https://eternal-ink.app/images/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eternal-ink.app" />
      </Head>
      <div className={classNames("max-w-[100sw] overflow-hidden")}>
        <LoadedTicks className="overflow-x-hidden" />
        <Hero className="overflow-x-hidden" />
        <HowItWorks className="overflow-x-hidden" />
        <CardSection className="overflow-visible" />
        <WhyEngrave className="overflow-visible" />
        <ContactSection className="" />
      </div>
    </>
  );
}
