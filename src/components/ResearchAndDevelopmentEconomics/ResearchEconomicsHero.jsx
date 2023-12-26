import React, { useState } from 'react'
import Behaviour1 from "@/images/research-development-behaviour/behavioural_1.png"
import Behaviour2 from "@/images/research-development-behaviour/behavioural_2.png"
import Behaviour3 from "@/images/research-development-behaviour/behavioural_3.png"
import Image from "next/image"
import DropdownImg from "@/images/dropdown.svg"
const ResearchEconomicsHero = () => {
  const [accordion, setAccordion] = useState("Methodology")
  const datas = [
    {
      title: 'Methodology',
      description: 'Our research incorporates cutting-edge methodologies, blending quantitative analysis with qualitative insights. Interdisciplinary collaboration lies at the heart of our approach, ensuring a holistic understanding of behavioral phenomena'
    },
    {
      title: 'Research Theses',
      description: 'Our research incorporates'
    },
    {
      title: 'Research Team',
      description: 'Our research incorporates'
    },
    {
      title: 'Key Results',
      description: 'Our research incorporates'
    },
    {
      title: 'Related Services',
      description: 'Our research incorporates'
    },
  ]
  return (
    <div className="m-5 lg:m-20">
      <div className="text-center leading-loose">
        <h1>Behavioral Economics Research</h1>
        <p className="mt-8">Delve into the intricate realm of Behavioral Economics, where we unravel the complexities of human decision-making. <br/> Understand its societal impact and explore avenues for transformative change.</p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-14">
        <div className="lg:w-1/2">
          {
            datas.map((data, i)=>{
              return(
                <div key={i} className={`px-7 py-5 ${data.title == accordion ? 'bg-cgray rounded-xl': ''}`}>
                  <div className="flex items-center gap-3 cursor-pointer"  onClick={()=>setAccordion(data.title)}>
                    <p className={`text-lg lg:text-xl  ${data.title == accordion? 'text-cblue': ''}`} >
                        {data.title}
                    </p>
                    <Image className={` ${data.title == accordion? 'rotate-180': ''}`} src={DropdownImg} />
                  </div>
                  <p className={`mt-2 leading-loose text-clightGray ${data.title != accordion ? 'hidden': ''}`}>{data.description}</p>
                </div>
              )
            })
          }
        </div>
        <div className="w-full grid grid-cols-2 gap-5">
          <div>
            <Image src={Behaviour1} />
          </div>
          <div className="row-span-2">
            <Image src={Behaviour3} />
          </div>
          <div>
            <Image src={Behaviour2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchEconomicsHero