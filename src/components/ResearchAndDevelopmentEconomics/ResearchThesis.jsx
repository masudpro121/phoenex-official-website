import React from 'react'
import Thesis1 from "@/images/research-development-behaviour/thesis_1.png"
import Thesis2 from "@/images/research-development-behaviour/thesis_2.png"
import Image from "next/image"
const ResearchThesis = () => {
  return (
    <div className="m-20">
      <h2 className="text-5xl font-bold">Research Thesis Repository</h2>
      <p className="leading-loose text-clightGray mt-5">Immerse yourself in a wealth of knowledge, meticulously organized and easily accessible for enthusiasts, scholars, and inquisitive <br/> minds alike.</p>

      <div className="flex gap-10">
        <div className="w-full flex gap-5">
          <div><Image src={Thesis1}/></div>
          <div><Image src={Thesis2}/></div>
        </div>
        <div className="w-full bg-cgray p-10 rounded-xl">
          <p className="font-semibold text-3xl">Title</p>
          <p className="leading-loose text-2xl mt-8">Captivating titles that offer a glimpse into the essence of each research endeavor.</p>
          <div className="flex justify-between mt-10">
            <div>
              <p className="text-xl">Author</p>
              <p className="text-3xl mt-3">Kashan Bhatti</p>
            </div>
            <div>
              <p className="text-xl">Date of Publish</p>
              <p className="text-3xl mt-3">2-Sep-2012</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-xl">Brief Abstract</p>
            <p className="text-clightGray leading-loose mt-4">Condensed narratives providing a snapshot of the research's scope and significance.</p>
          </div>
          <button className="blue-btn mt-10">Download</button>
        </div>
      </div>

    </div>
  )
}

export default ResearchThesis