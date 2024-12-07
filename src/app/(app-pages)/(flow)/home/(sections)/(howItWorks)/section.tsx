import { Props as SelectionCardProps } from "@/components/2.molecules/SelectionCard/SelectionCard";
import Cube from "@/components/Svgs/Cube";
import Fi from "@/components/Svgs/Fi";
import ThreeRoad from "@/components/Svgs/ThreeRoad";
import DollarBanner from "@/components/Svgs/DollarBanner";
import StarCheck from "@/components/Svgs/StarCheck";
import Ball from "@/components/1.atoms/Ball/Ball";
import Header from "@/app/(app-pages)/(flow)/home/(sections)/(howItWorks)/(cmp)/Header";
import SelectionCardsList from "@/app/(app-pages)/(flow)/home/(sections)/(howItWorks)/(cmp)/SelectionCardsList";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

const selectionCards: SelectionCardProps[] = [
  {
    icon: Cube(),
    title: "Select Blockchain",
    description:
      "Make an informed choice between two blockchain giants for your engraving or hashing needs:",
    options: [
      {
        title: "Bitcoin",
        description:
          "The epitome of security and stability. Perfect for those valuing a strong legacy. Higher fees reflect its vast network",
      },
      {
        title: "Ethereum",
        description:
          "Known for its versatility and smart contract capabilities. Ideal for dynamic and programmable applications. Lower fees and faster transactions",
      },
    ],
  },
  {
    icon: Fi(),
    title: "Engrave a Message vs Hash a Document",
    description:
      "Securely hash documents with the SHA256 on the blockchain, creating an immutable record of their existence and integrity without exposing the document's content.",
    options: [
      {
        title: "Message",
        description: "Leave a personal message on the blockchain for eternity",
      },
      {
        title: "Document",
        description:
          "Hash a document to create an immutable record of its existence and integrity without exposing the document's content",
      },
    ],
  },
  {
    icon: ThreeRoad(),
    title: "Decision Points",
    description:
      "Share your message with the world via our live ticker or opt for a secretive touch with password-protected encryption",
  },
  {
    icon: DollarBanner(),
    title: "Calculate Fees",
    description:
      "Fees are tailored based on selected services and blockchain dynamics, ensuring transparency in every transaction",
  },
  {
    icon: StarCheck(),
    title: "Payment and Confirmation",
    description:
      "Upon content and blockchain selection, a unique address for fee payment is generated. Post-payment, your data is engraved or hashed and broadcasted to the blockchain. Upon successful completion, you'll receive a unique transaction ID, marking the permanent engraving of your data on the blockchain. Additionally, you have the option to download a certificate in PDF format, which includes all essential details for easy reference of your engraving in the future.",
  },
];

function HowItWorks({ className }: EIProps) {
  return (
    <div className={classNames("font-manrope py-24 relative", className)}>
      <Header />
      <SelectionCardsList selectionCards={selectionCards} />

      <Ball className="absolute h-1/3 w-64 md:w-[20em] top-[-5%] right-[-5%] blur-sm -z-10 rounded-full" />
    </div>
  );
}
export default HowItWorks;
