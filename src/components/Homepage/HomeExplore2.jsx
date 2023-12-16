import React from 'react'
import Explore2Img from "@/images/home/explore2.png"
import Image from "next/image"

const HomeExplore2 = () => {
  return (
    <div className="m-20 flex gap-20">
      <div className="space-y-7">
        <h1>Explore the Excitement</h1>
        <p className="pt-5">Expand your knowledge horizon with our educational video section. Each video is a gateway to new insights and discoveries, presenting complex concepts.</p>
        <ol className="list-decimal ml-5">
          <li><span className="font-semibold text-cblue">Diverse Genres:</span> From heart-pounding adventures to laugh-out-loud moments.</li>
          <li><span className="font-semibold text-cblue">Captivating Narratives:</span> Stories that keep you on the edge of your seat.</li>
          <li><span className="font-semibold text-cblue">Stunning Visuals: </span> High-quality production and breathtaking cinematography.</li>
          <li><span className="font-semibold text-cblue">Curated Selection: </span> Something exciting for everyone.</li>
        </ol>
        <button className="blue-btn">Start watching now</button>
      </div>
      <div>
        <Image src={Explore2Img} />
      </div>
    </div>
  )
}

export default HomeExplore2