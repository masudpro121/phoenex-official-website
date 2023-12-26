import React from 'react'
import Thesis1 from "@/images/research-development-behaviour/thesis_1.png"
import Thesis2 from "@/images/research-development-behaviour/thesis_2.png"
import Image from "next/image"
const ResearchThesis = () => {
  return (
    <div className="m-5 my-20 lg:m-20">
      <div className="text-center lg:text-start">
        <h2 className="text-3xl lg:text-5xl font-bold">Research Thesis Repository</h2>
        <p className="leading-loose text-clightGray mt-5">Immerse yourself in a wealth of knowledge, meticulously organized and easily accessible for enthusiasts, scholars, and inquisitive <br/> minds alike.</p>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        <div className="w-full flex gap-5">
          <div><Image src={Thesis1}/></div>
          <div><Image src={Thesis2}/></div>
        </div>
        <div className="w-full bg-cgray p-10 rounded-xl">
          <p className="font-semibold text-3xl">Title</p>
          <p className="leading-loose text-lg lg:text-xl mt-8">Captivating titles that offer a glimpse into the essence of each research endeavor.</p>
          <div className="flex flex-col gap-10 lg:flex-row justify-between mt-10">
            <div>
              <p className="text-lg lg:text-xl">Author</p>
              <p className="text-2xl lg:text-3xl mt-3">Kashan Bhatti</p>
            </div>
            <div>
              <p className="text-lg lg:text-xl">Date of Publish</p>
              <p className="text-2xl lg:text-3xl mt-3">2-Sep-2012</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-lg lg:text-xl">Brief Abstract</p>
            <p className="text-clightGray leading-loose mt-4">Condensed narratives providing a snapshot of the research's scope and significance.</p>
          </div>
          <button className="blue-btn mt-10">Download</button>
        </div>
      </div>

    </div>
  )
}

export default ResearchThesis