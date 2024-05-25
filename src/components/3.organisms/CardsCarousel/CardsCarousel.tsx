import React, { useState } from "react";
import Card, { Props as CardProps } from "@/components/2.molecules/Card/Card";
import ChevronLeft from "./parts/ChevronLeft";
import ChevronRight from "./parts/ChevronRight";

interface Props {
  cards: CardProps[];
}

function CardsGroup({ cards }: Props) {
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
        <div className="relative flex items-center justify-center w-full">
            <ChevronLeft onClick={handlePrev} className="absolute -left-4 p-2 rounded-full z-20 w-10 h-10"/>
          <div className="w-full flex justify-center">
            <Card {...cards[selectedIdx]}>
              <div className="absolute bottom-0 z-10">
                <img
                  src="/storybook_resources/ball.png"
                  className="absolute -right-24 -top-20 -z-10"
                />
                <img className="w-full" src="./storybook_resources/dwarf2.png" />
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
