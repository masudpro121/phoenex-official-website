import React from 'react'
// import HeroImg from "@/images/product-services/hero_img.png"
import Image from "next/image"

function ProductHero() {
  return (
    <div className="bg-cgray mx-5 lg:mx-20  rounded-3xl mt-10 flex product-hero-bg">
      <div className=" w-full ">
        <div className=" w-full lg:w-2/3 text-center lg:text-start space-y-8 px-5 lg:pl-14 py-5 lg:py-20 ">
          <h1 className="leading-relaxed">PhoenEX - Innovative Solutions for a  Brighter Tomorrow</h1>
          <p className="text-clightGray text-lg">Explore Our Range of Products and Expert Services</p>
          <button className="blue-btn">Explore Our Products & Services</button>
        </div>
      </div>
      
    </div>
  )
} 

export default ProductHero