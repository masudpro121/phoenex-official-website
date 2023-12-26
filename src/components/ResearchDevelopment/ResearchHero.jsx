import Image from "next/image"
import React from 'react'
import HeroImg from "@/images/research-development/hero_img.png"

const ResearchHero = () => {
  const steps = [
    {
      name: 'STEP 01',
      title: 'Innovation Hub',
      description: 'Centralized hub for groundbreaking initiatives, coordinating diverse projects.'
    },
    {
      name: 'STEP 02',
      title: 'Diverse Projects',
      description: 'Comprehensive exploration initiatives spanning various fields'
    },
    {
      name: 'STEP 03',
      title: 'Team Collaboration',
      description: 'Synergistic teamwork unlocking insights beyond individual capabilities.'
    },
    {
      name: 'STEP 04',
      title: 'Cutting-Edge Technology',
      description: 'Commitment to innovation through advanced technology implementation'
    },
    {
      name: 'STEP 05',
      title: 'Data-Driven Excellence',
      description: 'Comprehensive data analysis transforms discoveries into impactful innovations.'
    },
  ]
  return (
    <div className="m-5 lg:m-20">
      <div className="text-center space-y-5">
        <h1>PhoenEX Research</h1>
        <p className="text-clightGray">
          Welcome to PhoenEX Research, where innovation meets exploration. Our commitment to groundbreaking research <br/> drives the pulse of progress, propelling us towards a future defined by discovery and excellence.
        </p>
      </div>
      <Image className="mt-10" src={HeroImg} />
      <div className="mt-20 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {
          steps.map((step, i)=>{
            return(
              <div key={i} className="bg-cgray w-80 rounded-lg p-5 text-center space-y-4">
                <p>{step.name}</p>
                <h3 className="text-cblue font-semibold text-2xl">{step.title}</h3>
                <p className="text-clightGray">{step.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ResearchHero