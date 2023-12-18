import React from 'react'
import Event1 from "@/images/workshop/past_event_1.png"
import Event2 from "@/images/workshop/past_event_2.png"
import Event3 from "@/images/workshop/past_event_3.png"
import Event4 from "@/images/workshop/past_event_4.png"
import Event5 from "@/images/workshop/past_event_5.png"
import Image from "next/image"


const WorkshopPast = () => {
  
  return (
    <div className="m-20">
      <div className="text-center">
        <h1>Past Events</h1>
        <p className="text-clightGray py-7">Missed out on previous events? Catch up on the highlights and success stories from our past gatherings, celebrating the spirit of innovation.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-10 mt-10">
        <Image src={Event1} />
        <Image className="col-span-2" src={Event2} />
        <Image src={Event3} />
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Image src={Event4} />
        <Image src={Event5} />
      </div>
    </div>
  )
}

export default WorkshopPast