import React from 'react'
import WaveImg from "@/images/wave.png"
import Image from "next/image"
const Wave = () => {
  return (
    <div className="my-20">
      <Image className="w-full" src={WaveImg} />
    </div>
  )
}

export default Wave