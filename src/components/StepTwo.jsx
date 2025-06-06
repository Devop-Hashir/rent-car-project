"use client";
import { carsArray } from "@/constants/AppData";
import { staggerContainer } from "@/constants/Motions";
import Styles from "@/constants/Styles";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Title from "./Title";
import SelectRide from "./SelectRide";

export default function StepTwo({ form, isForm }) {
  console.log(StepTwo)
  return (
    <motion.div
      variants={isForm ? undefined : staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${Styles.innerWidth} mx-auto flex flex-col`}
    >
      {!isForm && <Title title={<>Our Fleet</>} />}
      <div>
        {carsArray.map((cars, index) => (
          <SelectRide
            key={index}
            {...cars}
            index={index}
            isForm={isForm}
            form={form}
          />
        ))}
      </div>
    </motion.div>
  );
}
