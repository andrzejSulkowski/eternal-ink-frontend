import Hero from "./(sections)/(hero)/section";
import { classNames } from "@/utils/className";
import { Metadata } from "next";
import LoadedTicks from "./(cmp)/LoadedTicks";
import CardSection from "./(sections)/(card)/section";
import WhyEngrave from "./(sections)/(whyEngrave)/section";
import ContactSection from "./(sections)/(contact)/section";
import HowItWorks from "@/app/(app-pages)/home/(sections)/(howItWorks)/section";

interface Props {}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({}: Props) {
  return (
    <div className={classNames("max-w-[100sw]")}>
      <LoadedTicks className="overflow-x-hidden" />
      <Hero className="overflow-x-hidden" />
      <HowItWorks className="overflow-x-hidden" />
      <CardSection className="overflow-visible" />
      <WhyEngrave className="overflow-visible" />
      <ContactSection className="" />
    </div>
  );
}
