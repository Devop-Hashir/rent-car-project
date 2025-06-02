"use client";
import { textVariant } from "@/constants/Motions";
import { motion } from "framer-motion";
import React from "react";

export default function Title({ title, textStyle }) {
  return (
    <div>
      <motion.h2
        variants={textVariant}
        initial="hidden"
        whileInView={`show`}
        className={`mt-2 text-amber-100 font-bold md:text-[64px] text-[36px] text-center ${textStyle}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
