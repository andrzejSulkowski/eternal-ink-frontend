import Hero from "./(sections)/(hero)/section";
import { classNames } from "@/utils/className";
import { Metadata } from "next";
import LoadedTicks from "./(cmp)/LoadedTicks";
import CardSection from "./(sections)/(card)/section";
import HowItWorks from "@/app/(app-pages)/home/(sections)/(howItWorks)/section";
import WhyEngrave from "@/app/(app-pages)/home/(sections)/(whyEngrave)/section";
import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("./(sections)/(contact)/section"), {
  loading: () => <p>Loading...</p>,
});

interface Props {}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({}: Props) {
  return (
    <div className={classNames("max-w-[100sw] overflow-hidden")}>
      <LoadedTicks className="overflow-x-hidden" />
      <Hero className="overflow-x-hidden" />
      <HowItWorks className="overflow-x-hidden" />
      <CardSection className="overflow-visible" />
      <WhyEngrave className="overflow-visible" />
      <ContactSection className="" />
    </div>
  );
}
