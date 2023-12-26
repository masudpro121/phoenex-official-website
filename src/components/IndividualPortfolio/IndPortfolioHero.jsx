import React from 'react'
import HeroImg from "@/images/individual-portfolio/hero.png"
import Image from "next/image"
const IndPortfolioHero = () => {
  return (
    <div className="space-y-5 m-5 lg:m-20 text-center">
      <h1 className="">GreenTech Innovations Portfolio</h1>
      <p className="text-clightGray text-lg lg:text-xl Poppins leading-loose">
        Explore the GreenTech Innovations portfolio, meticulously designed to revolutionize sustainable technologies and address  pressing environmental challenges. At PhoenEX, we are committed to fostering innovation that contributes to a greener future.
      </p>
      <Image src={HeroImg} />
    </div>
  )
}

export default IndPortfolioHero