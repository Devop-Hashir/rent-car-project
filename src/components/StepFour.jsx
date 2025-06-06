import Image from "next/image";
import React from "react";

export default function StepFour({ form }) {
  const {
    image,
    name,
    model,
    seats,
    ac,
    price,
    firstName,
    lastName,
    email,
    comment,
    source,
    destination,
    number,
  } = form.getValues();
  return (
    <div>
      <div>
        <div>
          <Image src={image} placeholder={name} height={500} width={500}/>
        </div>
      </div>
    </div>
  );
}
