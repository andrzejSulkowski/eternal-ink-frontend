import SelectionCard, {
  Props as SelectionCardProps,
} from "@/components/2.molecules/SelectionCard/SelectionCard";
import { EIProps } from "@/types";
import { RefObject, useRef } from "react";
import { animated, SpringProps } from "@react-spring/web";

interface Props extends EIProps {
  selectionCards: SelectionCardProps[];
  setRef: (ref: RefObject<HTMLDivElement>) => void;
}

function SelectionCardsList({ selectionCards, setRef }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  setRef(scrollContainerRef);

  return (
    <div className="relative">
      <div className="w-[200%] absolute h-[1px] left-[-50%] top-6 -z-20 bg-gradient-to-r from-[#34104B] to-[#4154DC]"></div>
      <animated.div
        className="overflow-hidden flex gap-12 px-80"
        ref={scrollContainerRef}
      >
        {selectionCards.map((card, index) => (
          <SelectionCard key={index} {...card} className="!w-96" />
        ))}
      </animated.div>
    </div>
  );
}

export default SelectionCardsList;
