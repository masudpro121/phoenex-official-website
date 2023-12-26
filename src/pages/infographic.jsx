import React from 'react'
import InfoImg from "@/images/infographics/info.png"
import Image from "next/image"

const Infographic = () => {
  const infos = [
    {
      step: '01',
      title: 'Empathize',
      description: 'In this phase, deeply connect with users to understand their needs and challenges, forming the foundation for effective solutions.'
    },
    {
      step: '02',
      title: 'Define',
      description: 'Articulate a clear problem statement by synthesizing insights from the empathize phase, providing a guiding framework for the design process.'
    },
    {
      step: '03',
      title: 'Ideate',
      description: 'Encourage creative idea generation through brainstorming sessions, prioritizing quantity to explore a broad range of innovative solutions.'
    },
    {
      step: '04',
      title: 'Prototype',
      description: 'Develop tangible representations, such as sketches or models, to visualize and refine potential solutions based on ideation.'
    },
    {
      step: '05',
      title: 'Test',
      description: 'Test prototypes with the target audience, gather feedback, and iteratively refine solutions to ensure alignment with user needs.'
    },
    {
      step: '06',
      title: 'Implement',
      description: 'Execute the refined solution on a broader scale, collaborating with stakeholders to ensure a smooth transition from concept to reality.'
    },
    {
      step: '07',
      title: 'Evaluate',
      description: 'Establish metrics to evaluate the success of the implemented solution, providing insights into its impact and effectiveness.'
    },
    {
      step: '08',
      title: 'Iterate',
      description: 'Continuously refine solutions based on evaluation results and ongoing feedback, ensuring adaptability to evolving circumstances.'
    },
    {
      step: '09',
      title: 'Scale',
      description: 'Expand the reach of successful solutions to new markets or contexts, maximizing positive outcomes and impact.'
    },
    {
      step: '10',
      title: 'Celebrate',
      description: 'Acknowledge and celebrate team efforts and positive impacts, fostering motivation and a collaborative work environment.'
    },
  ]
  return (
    <div className="flex flex-col lg:flex-row m-10 lg:m-20 gap-20">
      <div className="w-full space-y-4">
        <h1>Problem-Solving Steps</h1>
        <p className="font-semibold text-cblue">Innovate, Iterate, Impact</p>
        <p className="text-clightGray">Explore, refine, and celebrate the successes of a dynamic problem-solving process designed to make a real and lasting impact in any context.</p>
        <Image src={InfoImg} />
      </div>
      <div className="w-full relative">
        {
          infos.map((info, i)=>{
            return(
              <div className="flex items-center gap-5 mt-5">
                <div className="">
                  <h2 className="text-5xl text-cblue font-bold bg-cgray p-5 rounded-full ">{info.step}</h2>
                </div> 
                <div className="bg-cgray p-5 rounded-xl">
                  <h3 className="text-white text-2xl font-semibold">{info.title}</h3>
                  <p className="text-clightGray mt-2 leading-loose">{info.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Infographic