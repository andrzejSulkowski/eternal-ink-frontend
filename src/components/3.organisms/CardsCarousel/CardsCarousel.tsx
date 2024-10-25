"use client";
import React, { useState } from "react";
import Card, { Props as CardProps } from "@/components/2.molecules/Card/Card";
export type { CardProps };
import ChevronLeft from "@/components/1.atoms/ChevronLeft/ChevronLeft";
import ChevronRight from "@/components/1.atoms/ChevronRight/ChevronRight";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import Ball from "@/components/1.atoms/Ball/Ball";
import BallBlur from "@/components/1.atoms/Ball/BallBlur";

interface Props extends EIProps {
  cards: CardProps[];
}

function CardsCarousel({ cards, className }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const isMobile = useIsMobile();

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
              selectedIdx === idx
                ? "bg-gray-100 w-2 h-2"
                : "bg-gray-400 w-1 h-1"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div
        className={classNames(
          "relative flex flex-col md:flex-row items-center justify-center w-full",
          className
        )}
      >
        {!isMobile && (
          <ChevronLeft onClick={handlePrev} className="absolute -left-4 z-30" />
        )}
        <div className="w-full flex justify-center">
          <Card {...cards[selectedIdx]}>
            <div className="absolute bottom-0 top-0 left-0 right-0">
              {/* Change to Image */}
              <BallBlur className="absolute -right-[50%] -top-44 -z-10 h-full w-full blur-md" />
              <Image
                width={1260}
                height={1425}
                className="w-auto bottom-0 absolute h-[28rem] md:h-auto max-h-full md:max-h-none"
                src="/storybook_resources/dwarf2.png"
                alt="dwarf"
              />
            </div>
          </Card>
        </div>
        {isMobile && (
          <div className="flex w-full justify-between mt-8">
            <ChevronLeft onClick={handlePrev} />
            <ChevronRight onClick={handleNext} />
          </div>
        )}
        {!isMobile && (
          <ChevronRight
            onClick={handleNext}
            className="absolute -right-4 z-30"
          />
        )}
      </div>
      <Dots />
    </>
  );
}

export default CardsCarousel;
