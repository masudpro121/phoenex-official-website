import React from 'react'
import HeroImg from "@/images/home/hero_img.png"
import Image from "next/image"
import People1 from "@/images/home/people_1.svg"
import People2 from "@/images/home/people_2.svg"
import People3 from "@/images/home/people_3.svg"
import People4 from "@/images/home/people_4.svg"
import People5 from "@/images/home/people_5.svg"
import People6 from "@/images/home/people_6.svg"
function HomeHero() {
  return (
    <div className="bg-cgray mx-20  rounded-3xl mt-10 flex">
      <div className="p-20 w-full ">
        <div className="space-y-5 ">
          <h1 className="text-7xl font-bold">Empowering <br/> Your Journey to <br/> Success</h1>
          <p className="text-clightGray text-lg">We aim to enhance rational decision-making among individuals and <br/> promote psychological well-being through technology research and <br/> information design</p>
          <button className="blue-btn">Explore Our Products</button>
        </div>
        <div className="flex items-center mt-10 gap-x-4">
          <div className="flex -space-x-3 ">
            <Image className="w-14" src={People1} />
            <Image className="w-14" src={People2} />
            <Image className="w-14" src={People3} />
            <Image className="w-14" src={People4} />
            <Image className="w-14" src={People5} />
            <Image className="w-14" src={People6} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-cblue">10M</h1>
            <p className="text-clightGray">Worldwide Users</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image className="" src={HeroImg} />
      </div>
    </div>
  )
}

export default HomeHero