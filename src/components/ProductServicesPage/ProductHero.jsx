import React from 'react'
import HeroImg from "@/images/product-services/hero_img.png"
import Image from "next/image"
import People1 from "@/images/home/people_1.svg"
import People2 from "@/images/home/people_2.svg"
import People3 from "@/images/home/people_3.svg"
import People4 from "@/images/home/people_4.svg"
import People5 from "@/images/home/people_5.svg"
import People6 from "@/images/home/people_6.svg"
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