"use client";
import SelectionCard, {
  Props as SelectionCardProps,
} from "@/components/2.molecules/SelectionCard/SelectionCard";
import { EIProps } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props extends EIProps {
  selectionCards: SelectionCardProps[];
}

function SelectionCardsList({ selectionCards }: Props) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["35%", "-95%"]);

  return (
    <div className="relative">
      <div className="h-full w-[2px] md:w-[200%] absolute md:h-[1px] left-[4.75rem] md:left-[-50%] top-6 -z-20 bg-gradient-to-t md:bg-gradient-to-r from-[#34104B] to-[#4154DC]"></div>
      <motion.div
        className="overflow-hidden flex flex-col md:flex-row gap-12 px-12 lg:px-80 items-center md:items-start"
        style={{ x }}
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
