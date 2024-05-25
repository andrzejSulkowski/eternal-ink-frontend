import "./globals.css";
import type { Metadata } from "next";
import { manrope, kanit } from "@/libs/fonts";


export const metadata: Metadata = {
  title: "Ethernal Ink",
  description: "Persistently store your thoughts and ideas on the Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[kanit.variable, manrope.variable, "font-manrope, text-white"].join(" ")}>{children}</body>
    </html>
  );
}
