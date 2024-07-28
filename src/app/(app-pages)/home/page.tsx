import Hero from "./(sections)/(hero)/section";
import { classNames } from "@/utils/className";
import { Metadata } from "next";
import LoadedTicks from "./(cmp)/LoadedTicks";
import CardSection from "./(sections)/(card)/section";
import WhyEngrave from "./(sections)/(whyEngrave)/section";
import ContactSection from "@/app/(app-pages)/home/(sections)/(contact)/section";
import HowItWorks from "./(sections)/(HowItWorks)/section";

interface Props {}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({}: Props) {
  return (
    <div className={classNames("")}>
      <LoadedTicks className="" />
      <Hero />
      <HowItWorks />
      <CardSection />
      <WhyEngrave />
      <ContactSection />
    </div>
  );
}
