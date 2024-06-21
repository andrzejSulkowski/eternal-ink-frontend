import Hero from "./(sections)/Hero";
import { classNames } from "@/utils/className";
import { Metadata } from "next";
import LoadedTicks from "./(client)/LoadedTicks";
import HowItWorks from "./(sections)/HowItWorks";
import CardSection from "./(sections)/CardSection";
import WhyEngrave from "./(sections)/WhyEngrave";
import ContactSection from "@/app/(app-pages)/home/(sections)/ContactSection";

interface Props {}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({}: Props) {
  return (
    <div className={classNames("")}>
      <LoadedTicks />
      <Hero />
      <HowItWorks />
      <CardSection />
      <WhyEngrave />
      <ContactSection />
    </div>
  );
}
