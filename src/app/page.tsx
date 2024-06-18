import Hero from "@/app/(app-pages)/(sections)/Hero";
import { classNames } from "@/utils/className";
import { Metadata } from "next";
import LoadedTicks from './(app-pages)/(client)/LoadedTicks';
import HowItWorks from './(app-pages)/(sections)/HowItWorks';

interface Props {}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({ }: Props) {
  return  (
    <div className={classNames("")}>
      <LoadedTicks />
      <Hero />
      <HowItWorks/>
    </div>
  );
}
