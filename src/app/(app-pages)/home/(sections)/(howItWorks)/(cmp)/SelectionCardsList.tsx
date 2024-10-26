"use client";
import SelectionCard, {
  Props as SelectionCardProps,
} from "@/components/2.molecules/SelectionCard/SelectionCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import { EIProps } from "@/types";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import { useMemo, useRef } from "react";

interface Props extends EIProps {
  selectionCards: SelectionCardProps[];
}

function SelectionCardsList({ selectionCards }: Props) {
  const targetRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["-80%", "10%"], {
    ease: easeInOut,
  });
  const maybeX = useMemo(() => {
    if (isMobile) return 0;
    else return x;
  }, [x, isMobile]);

  return (
    <div className="relative" ref={targetRef}>
      <div className="h-full w-[2px] md:w-[200%] absolute md:h-[1px] left-[4.75rem] md:left-[-50%] top-6 -z-20 bg-gradient-to-t md:bg-gradient-to-r from-[#34104B] to-[#4154DC]"></div>
      <motion.div
        className="overflow-visible flex flex-col md:flex-row gap-12 px-12 lg:px-80 items-center md:items-start"
        style={{ x: maybeX }}
      >
        {selectionCards.map((card, index) => (
          <motion.div
            className="w-full"
            key={index}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SelectionCard {...card} className="md:!w-96" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SelectionCardsList;
