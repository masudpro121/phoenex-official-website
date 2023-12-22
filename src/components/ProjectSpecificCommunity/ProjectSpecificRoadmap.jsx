import React from 'react'

const ProjectSpecificRoadmap = () => {
  const progresses = [
    {
      title:  'Prototype Development',
      description: 'Turning ideas into reality! Witness the creation of prototypes that pave the way for groundbreaking solutions.'
    },
    {
      title:  'Strategic Partnerships',
      description: 'Forge ahead with strategic alliances! Explore the partnerships that enhance project capabilities and market reach.'
    },
    {
      title:  'User Testing Triumphs',
      description: 'Validation at its best! Celebrate the positive outcomes and lessons learned from rigorous user testing phases. '
    },
    {
      title:  'Funding Milestones',
      description: 'Fueling innovation! Stay updated on funding achievements that empower projects to reach new heights.'
    },
  ]
  return (
    <div className="m-20">
      <div className="flex items-center justify-between">
        <div>
          <h1>Project Roadmaps.</h1>
          <p className="text-xl text-clightGray mt-5">Crafting Comprehensive Project Roadmaps for Triumph in a Complex Business Landscape</p>
        </div>
        <div className=" bg-cgray rounded-lg  p-3 ">
          <select className=" bg-cgray px-3  cursor-pointer  ">
            <option   value="Sustainable Urban Development Initiative">Sustainable Urban Development Initiative</option>
            <option   value="Sustainable Urban Development Initiative">Sustainable Urban Development Initiative</option>
            <option   value="Sustainable Urban Development Initiative">Sustainable Urban Development Initiative</option>
          </select>
          {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select> */}
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-20">Sustainable Urban Development Initiative</h2>
      <p className="text-clightGray mt-5 pb-7">Shaping the Future of Smart Cities for Sustainable Living</p>
      <div className="flex gap-10 mt-20 relative ">
        <div className="absolute w-full h-3 rounded-lg bg-cgray -top-10"></div>
        {
          progresses.map((progress, i)=>{
            return(
              <div className="mt-5">
                <div className="absolute w-7 h-7 -top-12 rounded-full bg-cblue "></div>
                <p className="font-semibold text-xl text-cblue">{progress.title}</p>
                <p className="text-clightGray leading-loose mt-3">{progress.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectSpecificRoadmap