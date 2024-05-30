import React, { useState } from "react";
import Image from "next/image";
import Card, { Props as CardProps } from "@/components/2.molecules/Card/Card";
import ChevronLeft from "@/components/1.atoms/ChevronLeft/ChevronLeft";
import ChevronRight from "@/components/1.atoms/ChevronRight/ChevronRight";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  cards: CardProps[];
}

function CardsGroup({ cards, className }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx((prevIdx) =>
      prevIdx === 0 ? cards.length - 1 : prevIdx - 1
    );
  };

  const handleNext = () => {
    setSelectedIdx((prevIdx) =>
      prevIdx === cards.length - 1 ? 0 : prevIdx + 1
    );
  };

  const Dots = () => {
    return (
      <div className="flex justify-center items-center mt-5">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`mx-2 rounded-full ${
              selectedIdx === idx ? "bg-gray-100 w-2 h-2" : "bg-gray-400 w-1 h-1"
            }`}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div>
        <div className={classNames("relative flex items-center justify-center w-full", className)}>
            <ChevronLeft onClick={handlePrev} className="absolute -left-4 p-2 rounded-full z-20 w-10 h-10"/>
          <div className="w-full flex justify-center">
            <Card {...cards[selectedIdx]}>
              <div className="absolute bottom-0 z-10">
                <Image
                  src="/storybook_resources/ball.png"
                  className="absolute -right-24 -top-20 -z-10"
                  alt="ball"
                />
                <Image className="w-full" src="./storybook_resources/dwarf2.png" alt="dwarf" />
              </div>
            </Card>
          </div>
            <ChevronRight onClick={handlePrev} className="absolute -right-4 p-2 rounded-full z-20 w-10 h-10"/>
        </div>
        <Dots />
      </div>
    </>
  );
}

export default CardsGroup;
