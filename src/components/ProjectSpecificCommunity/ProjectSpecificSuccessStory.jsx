import React from 'react'
import PersonImg from "@/images/project-specific-community/success.png"
import Image from "next/image"
const ProjectSpecificSuccessStory = () => {
  return (
    <div className="m-5 lg:m-20">
      <div className="bg-cgray flex flex-col lg:flex-row rounded-3xl">
        <div className="w-full p-5  lg:pl-20  py-14">
          <h1>Success Stories</h1>
          <h2 className="text-2xl lg:text-4xl mt-10 text-cblue font-semibold">Ethan Turner,</h2>
          <p className="text-clightGray text-lg leading-[2.6] mt-5">In the vibrant world of PhoenEX, the Collaboration Opportunities section bore witness to a groundbreaking partnership that transcended boundaries and fueled unprecedented success. The community manager, Sarah Johnson, joined forces with a forward-thinking digital marketing agency, SparkConnect, in a quest to elevate their shared vision.</p>
        </div>
        <div className="w-full flex items-end">
          <Image src={PersonImg} />
        </div>
      </div>
    </div>
  )
}

export default ProjectSpecificSuccessStory