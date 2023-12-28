import Image from "next/image"
import React from 'react'
import QuoteImg from "@/images/project-specific-community/quote.svg"
const ProjectSpecificThoughts = () => {
  return (
    <div className="m-5 lg:w-[80%] lg:m-auto py-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-full text-center lg:text-start">
          <h2 className="text-3xl lg:text-6xl font-bold">Share Your Thoughts</h2>
          <p className="text-clightGray mt-10 leading-loose text-md lg:text-lg">At PhoenEX, we believe in the power of your voice to drive positive change. The Feedback Sharing section is your platform to share valuable insights, usage experiences, and groundbreaking incubation ideas.</p>
          <p className="text-clightGray mt-7 leading-loose text-lg">Your input not only helps us refine our offerings but also contributes to the collective growth of our dynamic community.</p>
          <Image className="hidden lg:block mt-8  w-28" src={QuoteImg} />
        </div>
        <div className="w-full lg:w-2/3 m-auto p-5">
          <p className="font-semibold pl-1">Community Username</p>
          <input type="text" className="bg-cgray px-4 rounded-md py-2 w-full mt-2" placeholder="Enter your username here" />
          <p className="font-semibold pl-1 mt-5">Email</p>
          <input type="text" className="bg-cgray px-4 rounded-md py-2 w-full mt-2" placeholder="Enter your email here" />
          <p className="font-semibold pl-1 mt-5">Feedback Type</p>
          <div className=" bg-cgray rounded-lg  mt-2 px-2 ">
            <select className=" bg-cgray py-2 w-full  px-2  cursor-pointer  ">
              <option   value="Sustainable Urban Development Initiative">Sustainable Urban Development Initiative</option>
              <option   value="Sustainable Urban Development Initiative">Sustainable Urban Development Initiative</option>
              <option   value="Sustainable Urban Development Initiative">Sustainable Urban Development Initiative</option>
            </select>
          </div>
          <p className="font-semibold pl-1 mt-5">Your Feedback</p>
          <textarea type="text" className="bg-cgray px-4 h-28 rounded-md py-2 w-full mt-2" placeholder="Enter your email here" />
          <button className="blue-btn mt-10">Submit Feedback</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectSpecificThoughts