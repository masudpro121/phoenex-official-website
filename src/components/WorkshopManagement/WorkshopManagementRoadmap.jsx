import Image from "next/image"
import React from 'react'
import RoadmapIcon1 from "@/images/workshop-product-management/roadmap_1.svg"
import RoadmapIcon2 from "@/images/workshop-product-management/roadmap_2.svg"
import RoadmapIcon3 from "@/images/workshop-product-management/roadmap_3.svg"
import RoadmapIcon4 from "@/images/workshop-product-management/roadmap_4.svg"
import RoadmapIcon5 from "@/images/workshop-product-management/roadmap_5.svg"
const WorkshopManagementRoadmap = () => {
  const roadmaps = [
    {
      step: '01',
      icon: RoadmapIcon1,
      title: 'Smart Commerce Integration',
      description: 'Bridging the gap between e-commerce and smart technology for a seamless shopping experience.'
    },
    {
      step: '02',
      icon: RoadmapIcon2,
      title: 'GreenTech Initiative',
      description: 'Expanding our commitment to sustainability with innovative solutions for a greener tomorrow.'
    },
    {
      step: '03',
      icon: RoadmapIcon3,
      title: 'AI-Driven Personalization',
      description: 'Enhancing user experiences through cutting-edge artificial intelligence to personalize interactions and content.'
    },
    {
      step: '04',
      icon: RoadmapIcon4,
      title: 'Security Enhancement Protocol',
      description: 'Prioritizing the safety of our users with advanced security features and protocols.'
    },
    {
      step: '05',
      icon: RoadmapIcon5,
      title: 'Mobile App Redesign',
      description: 'Optimizing user experience on the go with a redesigned mobile application interface.'
    }
  ]
  return (
    <div className="max-w-[800px] m-auto">
      <div >
        
        {
          roadmaps.map((roadmap, i)=>{
            return(
              <div className={`flex gap-28 flex-start relative items-center ${(i+1)%2==0?'flex-row-reverse':''}`}>
                <div className="absolute  h-full w-4  bg-cgray left-0 right-0 m-auto "></div>
                <div className="absolute  h-8 w-8 rounded-full  bg-cblue left-0 right-0 m-auto "></div>
                <div className="w-full">
                  <h2 className="text-cgray text-[200px] font-bold">{roadmap.step}</h2>
                </div>
                <div className="w-full space-y-4">
                  <div><Image src={roadmap.icon} /></div>
                  <h2 className="text-xl font-semibold">{roadmap.title}</h2>
                  <p className="leading-loose  text-clightGray">{roadmap.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WorkshopManagementRoadmap