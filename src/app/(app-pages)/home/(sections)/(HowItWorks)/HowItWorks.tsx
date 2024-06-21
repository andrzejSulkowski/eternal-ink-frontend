"use client";
import { Props as SelectionCardProps } from "@/components/2.molecules/SelectionCard/SelectionCard";
import Cube from "@/components/Svgs/Cube";
import Fi from "@/components/Svgs/Fi";
import ThreeRoad from "@/components/Svgs/ThreeRoad";
import DollarBanner from "@/components/Svgs/DollarBanner";
import StarCheck from "@/components/Svgs/StarCheck";
import { RefObject, useEffect, useRef } from "react";
import Ball from "@/components/1.atoms/Ball/Ball";
import SelectionCardsList from "@/app/(app-pages)/home/(sections)/(HowItWorks)/(cmp)/SelectionCardsList";
import Header from "./(cmp)/Header";
import { useSpring, animated } from "@react-spring/web";

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
  const scrollAmount = 300;

  const [springProps, springApi] = useSpring(() => {
    scroll: 0;
  });

  function goToNextCard() {
    const currentScroll = scrollRef.current?.scrollLeft;
    const child = scrollRef.current?.firstChild;
    if (!child) return;

    const cardWidth = (child as HTMLDivElement).clientWidth;
    springApi.start({
      scroll: currentScroll! + cardWidth,
      onChange: (props: any) => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = props.value.scroll;
        }
      },
    });
  }

  function goToPrevCard() {
    const currentScroll = scrollRef.current?.scrollLeft;
    const child = scrollRef.current?.firstChild;
    if (!child) return;

    const cardWidth = (child as HTMLDivElement).clientWidth;
    springApi.start({
      scroll: currentScroll! - cardWidth,
      onChange: (props: any) => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = props.value.scroll;
        }
      },
    });
  }

  useEffect(() => {
    if(scrollRef.current && springApi !== undefined) {
      console.log("springApi: ", springApi);
      springApi.set({ scroll: scrollRef.current.scrollLeft });
    }
  }, [springApi, scrollRef.current])

  return (
    <div className="font-manrope py-24 relative">
      <Header onNext={goToNextCard} onPrev={goToPrevCard} />
      <SelectionCardsList
        setRef={(r) => setRef(r)}
        selectionCards={selectionCards}
      />

      <Ball className="absolute h-1/3 top-[-5%] right-[-5%] blur-sm -z-10" />
    </div>
  );
}
export default HowItWorks;
