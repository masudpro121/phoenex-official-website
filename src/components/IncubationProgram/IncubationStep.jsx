import React from 'react'
import Step1 from "@/images/workshop-incubation/step1.png"
import Step2 from "@/images/workshop-incubation/step2.png"
import Step3 from "@/images/workshop-incubation/step3.png"
import Image from "next/image"

const IncubationStep = () => {
  const steps = [
    {
      serial: '01',
      title: 'Explore Opportunities',
      description: 'Dive into our project opportunities to find the incubation program that aligns with your vision. Uncover potential for collaboration, innovation, and growth.',
      img: Step1
    },
    {
      serial: '02',
      title: 'Submit Your Proposal',
      description: `Craft a compelling proposal outlining your project's details, objectives, and impact. Showcase your team's expertise, highlighting why your project fits PhoenEX's incubation community perfectly.`,
      img: Step2
    },
    {
      serial: '03',
      title: 'Engage in Interview',
      description: `After submitting, our team reviews your application. Shortlisted candidates join an interview to discuss your project, showcasing passion and aligning your vision with our vibrant incubation community's goals.`,
      img: Step3
    },
  ]
  return (
    <div className="m-20">
      <div className="text-center">
        <h2 className="text-5xl">Take the First Step Towards Success!</h2>
        <p className="text-clightGray">Apply now and embark on a transformative journey with PhoenEX's Incubation Program.</p>
      </div>
      <div>
        {
          steps.map((step, i)=>{
            return(
              <div key={i} className={`flex items-center gap-20 ${(i+1)%2==0?'flex-row-reverse': ''}`}>
                <div className="w-full p-10">
                  <p className="leading-tight"><span className="text-[200px] font-bold text-cgray">{step.serial}</span> <span className="text-cblue font-semibold">STEP</span></p>
                  <h2 className="text-4xl font-bold">{step.title}</h2>
                  <p className="text-clightGray leading-loose mt-3">{step.description}</p>
                </div>
                <div className="w-full p-20">
                  <Image src={step.img} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default IncubationStep