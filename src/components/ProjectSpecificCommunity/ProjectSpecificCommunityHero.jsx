import React from 'react'
import HeroImg from "@/images/project-specific-community/hero_img.png"
import HeroIcon1 from "@/images/project-specific-community/hero_user.svg"
import HeroIcon2 from "@/images/project-specific-community/hero_message.svg"
import HeroIcon3 from "@/images/project-specific-community/hero_rocket.svg"
import Image from "next/image"
const ProjectSpecificCommunityHero = () => {
  return (
    <div className="m-5 lg:m-20">
      <div className="flex flex-col xl:flex-row items-center gap-20">
        <div className="w-full text-center lg:text-start space-y-7">
          <h1>Innovation Hub</h1>
          <p className="leading-[2.5] lg:leading-[3] text-lg lg:text-xl text-clightGray">Connect with pioneers in tech innovation. Discuss ideas, share insights, and shape the future.</p>
          <p className="text-xl"><span>Community Manager : </span> <span className="text-cblue font-semibold">Sarah Johnson</span></p>
          <p className="text-xl"><span>Community Since :  </span> <span className="text-cblue font-semibold">15 September , 2020</span></p>
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row  lg:justify-center gap-5 text-center">
            <div className="bg-cgray w-full lg:w-48 space-y-3 rounded-xl  p-7">
              <div className="flex justify-center"><Image className="w-20" src={HeroIcon1} /></div>
              <p>Total Members</p>
              <h2 className="text-3xl lg:text-5xl font-bold">24M</h2>
            </div>
            <div className="bg-cgray w-full lg:w-48 space-y-3 rounded-xl p-7">
              <div className="flex justify-center"><Image className="w-20" src={HeroIcon2} /></div>
              <p>Active Discussions</p>
              <h2 className="text-3xl lg:text-5xl font-bold">15k</h2>
            </div>
            <div className="bg-cgray w-full lg:w-48 space-y-3 rounded-xl p-7">
              <div className="flex justify-center"><Image className="w-20" src={HeroIcon3} /></div>
              <p>Collaborative Projects</p>
              <h2 className="text-3xl lg:text-5xl font-bold">69</h2>
            </div>
          </div>
          <div className="p-7">
            <button className="blue-btn w-full">Join a Community </button>
          </div>
        </div>
      </div>

      <div className="my-20">
        <Image src={HeroImg} />
      </div>

      <div className="text-center lg:text-start">
          <p className="text-clightGray text-lg  lg:text-xl leading-[2.7]">The Innovation Hub at PhoenEX is a dynamic community where pioneers in tech innovation converge to shape the future. As a collaborative ecosystem, the Innovation Hub provides a space for groundbreaking ideas, spirited discussions, and the sharing of cutting-edge insights. Led by the visionary community manager, Sarah Johnson, the Innovation Hub is a melting pot of diverse expertise, fostering an environment where members can actively participate in shaping the landscape of technology.</p>
          <p className="text-clightGray text-lg lg:text-xl leading-[2.7] mt-10">Join the Innovation Hub and become part of a vibrant community that not only stays ahead of the curve but actively contributes to defining the next chapter in technological evolution. This is where ideas ignite, innovations flourish, and the future unfolds collaboratively.</p>
      </div>

    </div>
  )
}

export default ProjectSpecificCommunityHero