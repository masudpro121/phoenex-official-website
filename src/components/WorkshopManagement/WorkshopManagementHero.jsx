import React from 'react'
import HeroImg from "@/images/workshop-product-management/hero_img.png"
import Image from "next/image"
const WorkshopManagementHero = () => {
  return (
    <div className="m-5 lg:m-20">
      <div className="text-center space-y-7">
        <h2 className="text-3xl lg:text-6xl leading-relaxed font-bold">Welcome to PhoenEX's Product Management</h2>
        <p className="leading-[2.5] lg:leading-[3] text-xl  text-clightGray"> Where innovation meets strategic development. Our commitment to excellence in product management is driven by a philosophy that values user-centric solutions, adaptability, and continuous improvement.</p>
        <button className="blue-btn">Explore Products</button>
      </div>
      <div className="my-20">
        <Image src={HeroImg} />
      </div>
    </div>
  )
}

export default WorkshopManagementHero