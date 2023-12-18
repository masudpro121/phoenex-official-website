import React from 'react'
import HeroImg from "@/images/workshop-incubation/hero_img.png"
import Image from "next/image"
const IncubationHero = () => {
  return (
    <div className="flex items-center">
      <div className="w-full p-20 space-y-7">
        <h1>Incubation Program</h1>
        <p className="text-clightGray leading-loose text-xl">Embark on a journey of growth with our Incubation Program. Discover a purposeful incubation experience and witness your project flourish.</p>
        <button className="blue-btn">Apply for Incubation</button>
      </div>
      <div className="w-1/2">
        <Image src={HeroImg} />
      </div>
    </div>
  )
}

export default IncubationHero