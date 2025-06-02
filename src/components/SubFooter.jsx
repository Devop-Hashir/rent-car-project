'use client'
import Image from "next/image";
import React from "react";
import {MdCardTravel} from 'react-icons/md'
import {MdContacts} from 'react-icons/md'
import {MdCarRental} from 'react-icons/md'
export default function SubFooter() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-[0_2px_15px_-3px-rgba(0,0,0.07),0_12px_20px_-2px-rgba(0,0,0.04)] md:flex-row relative">
      <Image
        src={`/porshe.jpg`}
        width={400}
        height={400}
        alt="porshe"
        className="h-96 w-full object-cover md:h-[60vh] lg:h-[80vh]"
      />
      <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8">
        <div className="flex items-center gap-5">
            <span className="shadow-xl p-6 rounded-full text-2xl">
                <MdCardTravel className="text-blue-500"/>
            </span>
            <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-bold text-gray-900 mb-2">Weeding</h5>
                <p className="mb-4 text-base text-gray-500 border-l-4  border-blue-500 pl-4 ">Seeking wedding transportation services? Contact us to customize your special day</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <span className="shadow-xl p-6 rounded-full text-2xl">
                <MdCarRental className="text-blue-500"/>
            </span>
            <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-2">Our fleet</h5>
                <p className="mb-4 text-base text-gray-500 border-l-4  border-blue-500 pl-4">Discover the perfect ride for any event. Whats your selection</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <span className="shadow-xl p-6 rounded-full text-2xl">
                <MdContacts className="text-blue-500"/>
            </span>
            <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-2">About us</h5>
                <p className="mb-4 text-base text-gray-500 border-l-4  border-blue-500 pl-4 ">Whether you're exploring the city or heading out of town, our cars are ready for every journey.</p>
            </div>
        </div>
      </div>
    </div>   
  );
}
