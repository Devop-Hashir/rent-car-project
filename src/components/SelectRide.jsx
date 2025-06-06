"use client";

import { Fahkwang } from "next/font/google";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SelectRide({
  image,
  name,
  model,
  seats,
  ac,
  price,
  isForm,
  form,
  id,
}) {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [option,setOption] = useState(null)
  useEffect(()=>{
    setOption(searchParam.get('option'))
  },[searchParam]);
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 border rounded-2xl shadow-md bg-white mt-5">
      <div className="w-full md:w-[300px] h-[250px] relative rounded-[32px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
      <div>
        <h4 className="font-extrabold text-slate-700 lg:text-[32px] text-[24px]">
          {name}
        </h4>
        <p className="mt-2 text-slate-500">Model: {model}</p>
        <p className="text-slate-500">Seats: {seats}</p>
        <p className="text-slate-500">AC: {ac}</p>
        <p className="text-slate-600 font-semibold mt-2">Price: Rs. {price}</p>
        {isForm && (
          <button
            onClick={() => {
              form.setValue('Name', name)
              form.setValue('Model', model)
              form.setValue('Image', image)
              router.push(`/booking?index=2&option=${id}`);
            }}
            className={`${
              option === id.toString()
                ? "bg-blue-600 text-white"
                : "bg-slate-300 text-black"
            }  py-2 px-5 rounded-full my-4 cursor-pointer`}
            disabled={option === id.toString() ? true: false}
          >
            {" "}
            Select{" "}
          </button>
        )}
      </div>
    </div>
  );
}
