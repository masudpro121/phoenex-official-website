import React from 'react'
import Logo from "@/images/layout/logo.svg"
import FacebookImg from "@/images/layout/footer_facebook.svg"
import InstagramImg from "@/images/layout/footer_instagram.svg"
import TwitterImg from "@/images/layout/footer_twitter.svg"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="mt-20 text-lg">
      <div className=" space-y-10 lg:flex gap-10 bg-cgray p-5 lg:p-20">
        <div className="w-full">
          <div className="flex items-center">
            <Image className="h-16" src={Logo} />
            <h3 className="text-2xl font-bold text-cwhite">PhoenEx</h3>
          </div>
          <div className="space-y-2 pt-4">
            <p><span className="text-clightGray">Email:</span> contact@phoenex.com</p>
            <p><span className="text-clightGray">Phone:</span> +1 123 456-7890</p>
            <p><span className="text-clightGray">Office Address:</span> 123 Main Street, City, Country</p>
          </div>
        </div>
        <div className="w-full ">
          <h4 className="font-semibold text-xl ">Quick links</h4>
          <div className="text-clightGray space-y-2 mt-4">
            <div className="">
              <Link href="#">Product & Services</Link>
            </div>
            <div>
              <Link href="#">Venture Portfolio</Link>
            </div>
            <div>
              <Link href="#">Research</Link>
            </div>
            <div>
              <Link href="#">Workshop</Link>
            </div>
            <div>
              <Link href="#">Community</Link>
            </div>
          </div>
        </div>
        <div className="w-full space-y-4">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold">Newsletter</h3>
            <p className="text-clightGray mt-2">Connecting You with the Latest</p>
          </div>
          <div className="flex gap-3  items-center">
            <input className="text-sm pl-7 rounded-xl bg-cdark lg:w-1/2 py-4" type="text" placeholder="Enter your Email" />
            <button className="blue-btn">Send</button>
          </div>
          <div className="pt-6 flex lg:block justify-center text-center lg:text-left">
            <div>
              <h4 className="font-semibold ">Follow us on:</h4>
              <div className="flex gap-5 mt-3">
                <Image src={FacebookImg} />
                <Image src={InstagramImg} />
                <Image src={TwitterImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-5 text-center lg:text-left py-4 bg-cblue">
        <p className=" lg:font-semibold">© 2023 Copyright by PhoenEx. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer