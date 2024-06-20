'use client';
import SelectionCard, {
  Props as SelectionCardProps,
} from "@/components/2.molecules/SelectionCard/SelectionCard";
import Cube from "@/components/Svgs/Cube";
import Fi from "@/components/Svgs/Fi";
import ThreeRoad from "@/components/Svgs/ThreeRoad";
import DollarBanner from "@/components/Svgs/DollarBanner";
import { classNames } from "@/utils/className";
import ChevronLeft from "@/components/1.atoms/ChevronLeft/ChevronLeft";
import ChevronRight from "@/components/1.atoms/ChevronRight/ChevronRight";
import StarCheck from "@/components/Svgs/StarCheck";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";

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
        description: "Known for its versatility and smart contract capabilities. Ideal for dynamic and programmable applications. Lower fees and faster transactions",
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



function SelectionCardList({setRef}: {setRef: (ref: RefObject<HTMLDivElement>) => void}) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    setRef(scrollContainerRef);

    const style = {
        
    }
  return (
    <div className="relative">
      <div className="w-[200%] absolute h-[1px] left-[-50%] top-6 -z-20 bg-gradient-to-r from-[#34104B] to-[#4154DC]" style={style}></div>
      <div className="overflow-hidden flex gap-12 px-80" ref={scrollContainerRef}>
        {selectionCards.map((card, index) => (
          <SelectionCard key={index} {...card} className="!w-96" />
        ))}
      </div>
    </div>
  );
}

function Header({ onNext, onPrev }: { onNext: () => void, onPrev: () => void}) {
  return (
    <div className="w-full flex mb-24 px-80">
      <div className="w-1/2">
        <h1 className="font-extrabold text-7xl">How it works</h1>
        <p className="mt-6 text-ei-primary-faded">
          Discover how Eternal Ink lets you leave an indelible mark on the
          blockchain, whether through a personal message or by engraving
          document
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-end">
        <div className="flex gap-4">
          {/* TODO: This can be extracted with CardCarousel Components Chevrons to a own component */}
          <ChevronLeft className="p-2 rounded-full w-10 h-10" onClick={onPrev}/>
          <ChevronRight className="p-2 rounded-full w-10 h-10" onClick={onNext}/>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
    let scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const setRef = (r: RefObject<HTMLDivElement>) => scrollContainerRef = r;
    const scrollAmount = 300;

    function goToNextCard() {
        console.log("scrollContainerRef", scrollContainerRef.current)
        if (scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }        
    }
    function goToPrevCard() {
        if (scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    }
  return (
    <div className="font-manrope py-24">
      <Header onNext={goToNextCard} onPrev={goToPrevCard}/>
      <SelectionCardList setRef={(r) => setRef(r)} />
    </div>
  );
}
export default HowItWorks;
