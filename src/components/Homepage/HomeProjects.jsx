import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Project1 from "@/images/home/project_1.png"
import Project2 from "@/images/home/project_2.png"
import Project3 from "@/images/home/project_3.png"
import Image from "next/image";
const HomeProjects = () => {
  const projects = [
    {
      img:Project1,
      title: 'PhoenEdX platform',
      description: 'UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management',
      infos: [
        'Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976',
        'Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134',
        'Monthly residual income paid (operated and fully managed by ASE)'
      ]
    },
    {
      img:Project2,
      title: 'PhoenEdX platform',
      description: 'UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management',
      infos: [
        'Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976',
        'Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134',
        'Monthly residual income paid (operated and fully managed by ASE)'
      ]
    },
    {
      img:Project3,
      title: 'Phashion Tube',
      description: 'UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management',
      infos: [
        'Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976',
        'Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134',
        'Monthly residual income paid (operated and fully managed by ASE)'
      ]
    },
    {
      img:Project1,
      title: 'BrandEY A.I',
      description: 'UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management',
      infos: [
        'Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976',
        'Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134',
        'Monthly residual income paid (operated and fully managed by ASE)'
      ]
    },
  ]
  return (
    <div>
      <div>
        <h1 className="text-7xl font-bold ">Ongoing Projects</h1>
        <p className="text-xl mt-5">Discover our ongoing projects incubated by PhoenEX.</p>
      </div>
      <div className="mt-10">
        <Carousel centerMode={true} useKeyboardArrows={true} centerSlidePercentage={33} infiniteLoop={true} showThumbs={false}>
          {
            projects.map((project, i)=>{
              return(
                <div key={i} className="bg-cgray mx-10 p-7 rounded-3xl text-left">
                  <div className="space-y-2">
                    <Image src={project.img} />
                    <h1 className="text-xl font-semibold">{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  <div className="space-y-2 mt-5" >
                    {
                      project.infos.map((info, j)=>{
                        return (
                          <div key={info+j} className="flex gap-3">
                            <div className="text-2xl font-bold ">.</div> 
                            <div>{info}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          } 
        </Carousel>
      </div>
    </div>
  )
}

export default HomeProjects