import React, { useState } from "react";
import Card, { Props as CardProps } from "@/components/2.molecules/Card/Card";

interface Props {
  cards: CardProps[];
}

function CardsGroup({ cards }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx((prevIdx) => (prevIdx === 0 ? cards.length - 1 : prevIdx - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prevIdx) => (prevIdx === cards.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      <button onClick={handlePrev} className="absolute left-0 bg-gray-300 p-2 rounded-full">
        &#9664; {/* Left arrow */}
      </button>
      <div className="w-full flex justify-center">
        <Card {...cards[selectedIdx]}>
          <img className="" src="./storybook_resources/dwarf2.png" />
        </Card>
      </div>
      <button onClick={handleNext} className="absolute right-0 bg-gray-300 p-2 rounded-full">
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
}

export default CardsGroup;