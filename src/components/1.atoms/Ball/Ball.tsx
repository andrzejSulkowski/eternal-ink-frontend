"use client";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { motion } from "framer-motion";

function Ball({ className }: EIProps) {
  return (
    <motion.img
      className={classNames("max-w-full max-h-full", className)}
      src="./storybook_resources/ball_solid.png"
      alt="Ball"
      layout
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
}
export default Ball;
