import Image from "next/image"
import React from 'react'
import NexusImg from "@/images/workshop/tech_nexus_video.png"
const WorkshopTechNexus = () => {
  return (
    <div className="m-20 mt-36">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold">Tech Nexus: Unveiling Tomorrow's Innovation</h2>
        <button className="blue-btn">Start watching now!</button>
      </div>
      <p className="text-clightGray leading-loose py-10">Dive into the future with our video section, offering exclusive event previews and dynamic marketing highlights. From behind-the-scenes insights to tech visionary interviews, experience the essence of "Tech Nexus" – where innovation meets anticipation. It's not just an event; it's a visual journey into tomorrow's technology.</p>
      <div>
        <Image src={NexusImg} />
      </div>
    </div>
  )
}

export default WorkshopTechNexus