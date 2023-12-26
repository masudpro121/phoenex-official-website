import React from 'react'
import Explore2Img from "@/images/home/explore2.png"
import Image from "next/image"

const HomeExplore2 = () => {
  return (
    <div className="my-10 md:my-20 mx-5 md:mx-20 flex flex-col-reverse md:flex-row gap-20">
      <div className="space-y-7">
        <h2 className="text-3xl md:text-6xl font-bold text-center md:text-start ">Explore the Excitement</h2>
        <p className="pt-5 text-center md:text-start ">Expand your knowledge horizon with our educational video section. Each video is a gateway to new insights and discoveries, presenting complex concepts.</p>
        <ol className="list-decimal ml-5 space-y-5">
          <li><span className="font-semibold text-cblue">Diverse Genres:</span> From heart-pounding adventures to laugh-out-loud moments.</li>
          <li><span className="font-semibold text-cblue">Captivating Narratives:</span> Stories that keep you on the edge of your seat.</li>
          <li><span className="font-semibold text-cblue">Stunning Visuals: </span> High-quality production and breathtaking cinematography.</li>
          <li><span className="font-semibold text-cblue">Curated Selection: </span> Something exciting for everyone.</li>
        </ol>
        <div className="flex md:block justify-center">
          <button className="blue-btn ">Start watching now</button>
        </div>
      </div>
      <div>
        <Image src={Explore2Img} />
      </div>
    </div>
  )
}

export default HomeExplore2