"use client";
import { Props as SelectionCardProps } from "@/components/2.molecules/SelectionCard/SelectionCard";
import Cube from "@/components/Svgs/Cube";
import Fi from "@/components/Svgs/Fi";
import ThreeRoad from "@/components/Svgs/ThreeRoad";
import DollarBanner from "@/components/Svgs/DollarBanner";
import StarCheck from "@/components/Svgs/StarCheck";
import { RefObject, useRef } from "react";
import Ball from "@/components/1.atoms/Ball/Ball";
import { useSpring, config } from "@react-spring/web";
import Header from "@/app/(app-pages)/home/(sections)/(HowItWorks)/(cmp)/Header";
import SelectionCardsList from "@/app/(app-pages)/home/(sections)/(HowItWorks)/(cmp)/SelectionCardsList";

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
    icon: StarCheck({}),
    title: "Payment and Confirmation",
    description:
      "Upon content and blockchain selection, a unique address for fee payment is generated. Post-payment, your data is engraved or hashed and broadcasted to the blockchain. Upon successful completion, you'll receive a unique transaction ID, marking the permanent engraving of your data on the blockchain. Additionally, you have the option to download a certificate in PDF format, which includes all essential details for easy reference of your engraving in the future.",
  },
];

function HowItWorks() {
  let scrollRef = useRef<HTMLDivElement | null>(null);
  const setRef = (r: RefObject<HTMLDivElement>) => (scrollRef = r);

  const [springProps, springApi] = useSpring(() => ({
    immediate: false,
    scrollLeft: 0,
    onChange: (props: any) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = props.scrollLeft;
      }
    },
    config: config.slow,
  }));

  function goToNextCard() {
    const currentScroll = springProps.scrollLeft.get();
    const containerWidth = scrollRef.current?.clientWidth || 0;
    const contentWidth = scrollRef.current?.scrollWidth || 0;
    const cardWidth =
      (scrollRef.current?.firstChild as undefined | HTMLDivElement)
        ?.clientWidth || 0;

    const container = scrollRef.current;
    const containerPadding =
      parseFloat(getComputedStyle(container!).paddingLeft) +
      parseFloat(getComputedStyle(container!).paddingRight);

    const maxScroll = contentWidth - containerWidth + containerPadding;
    const nextScroll = Math.min(currentScroll + cardWidth, maxScroll);

    springApi.start({ scrollLeft: nextScroll });
  }

  function goToPrevCard() {
    const currentScroll = springProps.scrollLeft.get();
    const cardWidth =
      (scrollRef.current?.firstChild as undefined | HTMLDivElement)
        ?.clientWidth || 0;

    const prevScroll = Math.max(currentScroll - cardWidth, 0);
    springApi.start({ scrollLeft: prevScroll });
  }

  return (
    <div className="font-manrope py-24 relative">
      <Header onNext={goToNextCard} onPrev={goToPrevCard} />
      <SelectionCardsList
        setRef={(r) => setRef(r)}
        selectionCards={selectionCards}
        scrollLeft={springProps.scrollLeft}
      />

      <Ball className="absolute h-1/3 top-[-5%] right-[-5%] blur-sm -z-10" />
    </div>
  );
}
export default HowItWorks;
