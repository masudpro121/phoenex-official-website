import React from 'react'
import UserImg from "@/images/workshop-incubation/success_stories.png"
import Image from "next/image"

const IncubationSuccess = () => {
  return (
    <div className="m-5 lg:m-20 ">
     <div className="bg-cgray rounded-xl flex flex-col lg:flex-row items-center">
      <div className="w-full p-5 lg:p-20">
        <h1>Success Stories</h1>
        <h2 className="text-cblue text-2xl lg:text-4xl mt-10">Meet Alex,</h2>
        <p className="leading-[2.9] text-clightGray mt-5">An aspiring entrepreneur whose journey with PhoenEX's Incubation Program turned a bold idea into a transformative venture.
Alex's vision was to create a sustainable solution for urban mobility, blending technology with eco-friendly practices. Upon joining the incubation community, Alex found a supportive environment that nurtured innovation.</p>
      </div>
      <div className="w-full">
        <Image src={UserImg} />
      </div>
     </div>
    </div>
  )
}

export default IncubationSuccess