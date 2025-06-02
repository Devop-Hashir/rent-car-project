import React from "react";
import Title from "./Title";
import { Span } from "next/dist/trace";
import { homeCards } from "@/constants/AppData";
import Image from "next/image";

export default function OurObjective() {
  return (
    <div className="bg-teal-50 pt-12 mb-10">
      <Title
        title={
          <span className="font-extrabold text-gray-950">Our Objective</span>
        }
      />
      <div className="mx-10 md:mx-[10%] mt-8">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {homeCards.map((car, index) => (
            <div key={index} className="rounded shadow-lg bg-white">
              <div className="w-full relative">
                <Image
                  src={car.img}
                  alt="cars"
                  height={200}
                  width={200}
                  className="w-full object-cover"
                />
              </div>
              <div className="font-bold text-xl mb-1 text-blue-900 p-2 mt-2 flex justify-center text-center">
                {car.title}
              </div>
              <p className="text-gray-500 text-base p-2">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
