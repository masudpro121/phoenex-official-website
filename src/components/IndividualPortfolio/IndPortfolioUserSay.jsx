import React from 'react'
import User1 from "@/images/individual-portfolio/user_1.svg"
import User2 from "@/images/individual-portfolio/user_2.svg"
import User3 from "@/images/individual-portfolio/user_3.svg"
import Image from "next/image"
const IndPortfolioUserSay = () => {
  const users = [
    {
      name: 'Michael R',
      title: 'GreenTech Entrepreneur',
      img: User1
    },
    {
      name: 'Jennifer L.',
      title: 'Investor since 2020.',
      img: User2
    },
    {
      name: 'David K',
      title: 'Investor since 2019',
      img: User3
    },
  ]
  return (
    <div className="m-5 lg:m-20 p-5 py-10 lg:p-20 rounded-3xl bg-cgray">
      <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-start">What Users Say</h2>
      <div className="flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row mt-10 items-center">
        <div className="w-full">
          {
            users.map((user, i)=>{
              return(
                <div className="flex gap-5 lg:gap-10 mt-5 lg:mt-10 items-center">
                  <div>
                    <Image src={user.img} />
                  </div>
                  <div>
                    <p className="font-semibold text-xl for">{user.name}</p>
                    <p className="text-clightGray">{user.title}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="w-full leading-loose text-center lg:text-start">
          <p className="text-xl lg:text-3xl font-semibold">A Beacon of Innovation and Impact</p>
          <p className="text-xl mt-5">⭐⭐⭐⭐⭐</p>
          <p className="text-clightGray mt-7">I embarked on my investment journey with PhoenEX in 2018, seeking not just financial returns but a deeper connection to meaningful ventures. The GreenTech Innovations portfolio, in particular, has been a beacon of innovation and impact. The seamless integration of cutting-edge technologies with a commitment to sustainability resonates with my values.</p>
          <p className="text-clightGray mt-10">PhoenEX's dedication to incubating and nurturing these GreenTech projects is evident in the success stories that continue to emerge.</p>
        </div>
      </div>
    </div>
  )
}

export default IndPortfolioUserSay