import React from 'react'
import LocationImg  from "@/images/contact-us/location.png"
import LocationIcon from "@/images/location.svg"
import Image from "next/image"
const ContactLocation = () => {
  return (
    <div className="m-5 lg:m-20">
     <div className="text-center">
       <h2 className="text-3xl lg:text-5xl font-bold">Our Location</h2>
        <p className="text-clightGray mt-5">Explore where innovation happens! PhoenEX's office is strategically located to welcome visitors, partners, and collaborators.</p>
     </div>
      <div className="my-10">
        <Image src={LocationImg} />
      </div>
      
      <div className="flex flex-col text-center lg:text-start items-center justify-center gap-5 pb-14">
        <div className="hidden lg:block">
          <Image src={LocationIcon} />
        </div>
        <p>4979 Devils Hill RoadHattiesburg, MS 39402</p>
        <button className="blue-btn">Get Directions</button>
      </div>
    </div>
  )
}

export default ContactLocation