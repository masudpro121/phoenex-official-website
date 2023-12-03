import React from 'react'
import HeroImg from "@/images/product-services/hero_img.png"
import Image from "next/image"

function ProductHero() {
  return (
    <div className="bg-cgray mx-20  rounded-3xl mt-10 flex">
      <div className="p-20 w-full ">
        <div className="space-y-5 ">
          <h1>PhoenEX - Innovative <br/> Solutions for a <br/> Brighter Tomorrow</h1>
          <p className="text-clightGray text-lg">Explore Our Range of Products and Expert Services</p>
          <button className="blue-btn">Explore Our Products & Services</button>
        </div>
        
      </div>
      <div className="w-full">
        <Image className="" src={HeroImg} />
      </div>
    </div>
  )
}

export default ProductHero