import React, { useState } from "react";
import DropdownImg from "@/images/dropdown.svg"
import MenuImg from "@/images/menu.svg"
import Image from "next/image";
import Logo from "@/images/layout/logo.svg"
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [dropdown, setDropdown] = useState("")
  const router = useRouter()

  const handleDropdown = (item) =>{
    if(dropdown==item){
      setDropdown("")
    }else{
      setDropdown(item)
    }
  }
  return (
      <div className="max-w-[1920px] m-auto">
        <div className="flex items-center justify-between gap-4 mx-10 py-1">
          <div className="flex items-center">
            <Image className="h-16" src={Logo} />
            <h3 className="text-2xl font-bold text-cwhite">PhoenEx</h3>
          </div>
          
          {/* Right Side  */}
          <div className="flex gap-7 items-center">
            <div>
              <Link href="/product-and-services">Product & Services</Link>
            </div>
            <div className="relative">
              <div className="flex gap-2 cursor-pointer" >
                <Link href="venture-portfolio">Venture Portfolio</Link>
                <Image onClick={()=>{handleDropdown('venture')}} className={dropdown=='venture' ? 'rotate-180' :''} src={DropdownImg} />
              </div>
              <div className={`absolute cursor-pointer mt-2  ${dropdown!='venture' && 'hidden'}`}>
                <div className="">
                  <Link href="/other">Other</Link>
                </div>
                <div>
                  <Link href="/other">Another</Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-2 cursor-pointer" >
                <Link href="/research-and-development" className="">Research & Development</Link>
                <Image onClick={()=>{handleDropdown('research')}} className={dropdown=='research' ? 'rotate-180':''} src={DropdownImg} />
              </div>
              <div className={`absolute cursor-pointer mt-2  ${dropdown!='research' ? 'hidden':''}`}>
                <div className="">
                  <Link href="/other">Other</Link>
                </div>
                <div>
                  <Link href="/other">Another</Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-2 cursor-pointer" onClick={()=>{handleDropdown('workshop')}}>
                <p className="">Workshop</p>
                <Image className={dropdown=='workshop' ? 'rotate-180':''} src={DropdownImg} />
              </div>
              <div className={`absolute cursor-pointer mt-2  ${dropdown!='workshop' ? 'hidden':''}`}>
                <div className="">
                  <Link href="/other">Other</Link>
                </div>
                <div>
                  <Link href="/other">Another</Link>
                </div>
              </div>
            </div>
            <div>
              Community
            </div>
            <div>
              <button className="blue-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
