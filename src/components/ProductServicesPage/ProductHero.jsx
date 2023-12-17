import React from 'react'
// import HeroImg from "@/images/product-services/hero_img.png"
import Image from "next/image"

function ProductHero() {
  return (
    <div className="bg-cgray mx-20  rounded-3xl mt-10 flex product-hero-bg">
      <div className=" w-full ">
        <div className="space-y-8 pl-14 py-20 ">
          <h1 className="leading-relaxed">PhoenEX - Innovative <br/> Solutions for a <br/> Brighter Tomorrow</h1>
          <p className="text-clightGray text-lg">Explore Our Range of Products and Expert Services</p>
          <button className="blue-btn">Explore Our Products & Services</button>
        </div>
      </div>
      
    </div>
  )
} 

export default ProductHero