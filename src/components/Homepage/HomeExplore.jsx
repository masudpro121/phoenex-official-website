import React from 'react'
import Explore1 from "@/images/home/explore1.png"
import Image from "next/image"
const HomeExplore = () => {
  return (
    <div className="flex justify-center mx-20 gap-10 my-40">
      <div className="w-full space-y-7 flex-grow-1">
        <h1>Explore the Excitement</h1>
        <p className="text-cblue font-semibold text-xl">Dive into Thrilling Video Content</p>
        <p className="text-clightGray">Embark on a visual journey that captivates your senses. Our video section is a treasure trove of <br/> excitement, featuring content that ranges from heart-pounding adventures to laugh-out-loud <br/> moments. Immerse yourself in a world of captivating narratives and stunning visuals that promise to <br/> keep you on the edge of your seat.</p>
        <button className="blue-btn">Start watching now!</button>
      </div>
      <div className="w-[80%]">
        <Image src={Explore1} />
      </div>
    </div>
  )
}

export default HomeExplore