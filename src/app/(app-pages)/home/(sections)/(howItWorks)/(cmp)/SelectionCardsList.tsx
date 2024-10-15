import SelectionCard, {
  Props as SelectionCardProps,
} from "@/components/2.molecules/SelectionCard/SelectionCard";
import { EIProps } from "@/types";
import { RefObject, useRef } from "react";
import { animated, SpringValue } from "@react-spring/web";
import { motion } from "framer-motion";

interface Props extends EIProps {
  selectionCards: SelectionCardProps[];
  setRef: (ref: RefObject<HTMLDivElement>) => void;
  scrollLeft: SpringValue<number>;
}

function SelectionCardsList({ selectionCards, scrollLeft, setRef }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  setRef(scrollContainerRef);

  return (
    <motion.div className="relative" layout>
      <div className="h-full w-[2px] md:w-[200%] absolute md:h-[1px] left-[4.5rem] md:left-[-50%] top-6 -z-20 bg-gradient-to-t md:bg-gradient-to-r from-[#34104B] to-[#4154DC]"></div>
      <animated.div
        className="overflow flex flex-col md:flex-row gap-12 px-12 md:px-80 items-center md:items-start"
        ref={scrollContainerRef}
        style={{
          transform: scrollLeft.to(
            (scrollLeft) => `translateX(-${scrollLeft}px)`
          ),
        }}
      >
        {selectionCards.map((card, index) => (
          <motion.div
            key={index}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SelectionCard key={index} {...card} className="md:!w-96" />
          </motion.div>
        ))}
      </animated.div>
    </motion.div>
  );
}

export default SelectionCardsList;
