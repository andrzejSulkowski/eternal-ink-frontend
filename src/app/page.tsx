import Hero from "@/app/(app-pages)/home/(sections)/Hero";
import RootLayout from "@/app/layout";
import { classNames } from "@/utils/className";
import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
  pathname: string;
}

export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function Page({ children }: Props) {
  return  (
    <div className={classNames("")}>
      <Hero />
    </div>
  );
}
