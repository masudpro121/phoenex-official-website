import React from 'react'
import ContactImg from "@/images/contact-us/contact.png"
import Image from "next/image"

const ContactHero = () => {
  return (
    <div className="m-5 lg:m-20">
      <div className=" bg-cgray rounded-3xl flex flex-col lg:flex-row text-center lg:text-start items-center gap-10 p-5 lg:p-16">
        <div className="w-full">
          <h1 className="leading-normal">Reach Out, Connect, Engage</h1>
          <p className="mt-7 leading-[2.8] text-clightGray text-md lg:text-lg">Our "Contact Us" page is designed to be your direct line to the heart of PhoenEX. Whether you're a user, investor, or potential partner, we welcome your inquiries, demands, and collaboration ideas. At PhoenEX, we value your communication and strive to make your engagement with us seamless and satisfying.</p>
        </div>
        <div className="w-2/3">
          <Image src={ContactImg} />
        </div>
      </div>

      <div className="bg-cgray flex flex-col lg:flex-row items-center p-2 rounded-2xl my-20">
        <div className="w-full text-center bg-cblue py-4 cursor-pointer rounded-xl">
          <p className="font-semibold  text-lg lg:text-xl">General Inquiry Form</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-lg lg:text-xl">Investor Inquiry Form</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-lg lg:text-xl">Partnership Inquiry Form</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-lg lg:text-xl">Event Registration Form</p>
        </div>
      </div>
    </div>
  )
}

export default ContactHero