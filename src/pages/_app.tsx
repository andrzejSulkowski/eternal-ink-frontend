import RootLayout from "@/app/layout";
import { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";
import type { AppProps } from 'next/app';



export const metadata: Metadata = {
  title: "Eternal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>


  );
}
