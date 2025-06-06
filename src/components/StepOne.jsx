'use client';
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Form } from "./ui/form";
import DateTimeForm from "./DateTimeForm";
import SelectForm from "./SelectForm";
import { pakistanCities, pickUpTime } from "@/constants/AppData";

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function StepOne({ form }) {
  const [coords, setCoords] = useState({ source: null, destination: null });

  const source = form.watch("source");
  const destination = form.watch("destination");

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-[10%] my-10">
      <Form {...form}>
        <form className="w-full bg-white border shadow-md p-5">
          <DateTimeForm
            id="pickUpDate"
            label="Pick Up Date"
            control={form.control}
          />
          <SelectForm
            control={form.control}
            id="pickupTime"
            label="Pick up Time"
            placeholder="Set Pickup Time"
            list={pickUpTime}
          />
          <SelectForm
            control={form.control}
            id="source"
            label="Source"
            placeholder="Select Source City"
            list={pakistanCities}
          />
          <SelectForm
            control={form.control}
            id="destination"
            label="Destination"
            placeholder="Select Destination City"
            list={pakistanCities}
          />
        </form>
      </Form>

      <div className="w-full h-[400px] border shadow-md">
        <Map
          source={source}
          destination={destination}
          coords={coords}
          setCoords={setCoords}
        />
      </div>
    </div>
  );
}
