import React from 'react'
import User1 from "@/images/home/user_1.svg"
import User2 from "@/images/home/user_2.svg"
import User3 from "@/images/home/user_3.svg"
import Image from "next/image"
const HomeSay = () => {
  const users = [
    {
      name: 'John Smith',
      title: 'Marketing manger at google',
      img: User1
    },
    {
      name: 'Austin Brewer',
      title: 'Grapic designer at RISS',
      img: User2
    },
    {
      name: 'Hammad Ahmed',
      title: 'Frontend Developer',
      img: User2
    },
  ]
  return (
    <div className="m-5 lg:m-20 bg-cgray p-5 lg:p-20 rounded-xl">
      <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-start">What Our Users Say</h2>
      <div className="flex flex-col-reverse gap-20 lg:flex-row lg:gap-0 mt-16">
        <div className="w-full space-y-8">
          {
            users.map((user, i)=>{
              return (
                <div key={i} className="flex gap-5 items-center">
                  <div>
                    <Image className="w-20" src={user.img} />
                  </div>
                  <div>
                    <p className="text-lg lg:text-xl font-semibold">{user.name}</p>
                    <p className="text-clightGray">{user.title}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="w-full space-y-10 text-center lg:text-start">
          <div >
            <p className="text-3xl font-bold">Exceptional Service, Incredible Results</p>
            <p className="mt-3">⭐⭐⭐⭐⭐</p>
          </div>
          <p className="text-clightGray">I can't say enough about the outstanding service I received from PhoenEX. Their commitment to excellence, attention to detail, and dedication to customer satisfaction are truly exceptional.</p>
          <p className="text-clightGray">From the moment I contacted PhoenEX, I was greeted with warmth and professionalism. The entire team worked tirelessly to ensure that my needs were not only met but exceeded. They went above and beyond to make my experience as smooth and pleasant as possible.</p>
        </div>

      </div>
    </div>
  )
}

export default HomeSay