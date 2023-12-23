import React from 'react'
import ContactImg from "@/images/contact-us/contact.png"
import Image from "next/image"

const ContactHero = () => {
  return (
    <div className="m-20">
      <div className=" bg-cgray rounded-3xl flex items-center gap-10 p-16">
        <div className="w-full">
          <h1 className="leading-normal">Reach Out, Connect, Engage</h1>
          <p className="mt-7 leading-[2.8] text-clightGray text-lg">Our "Contact Us" page is designed to be your direct line to the heart of PhoenEX. Whether you're a user, investor, or potential partner, we welcome your inquiries, demands, and collaboration ideas. At PhoenEX, we value your communication and strive to make your engagement with us seamless and satisfying.</p>
        </div>
        <div className="w-2/3">
          <Image src={ContactImg} />
        </div>
      </div>

      <div className="bg-cgray flex items-center p-2 rounded-2xl my-20">
        <div className="w-full text-center bg-cblue py-4 cursor-pointer rounded-xl">
          <p className="font-semibold text-xl">General Inquiry Form</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-xl">Investor Inquiry Form</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-xl">Partnership Inquiry Form</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-xl">Event Registration Form</p>
        </div>
      </div>
    </div>
  )
}

export default ContactHero