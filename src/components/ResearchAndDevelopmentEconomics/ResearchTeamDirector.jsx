import React from 'react'
import Member1 from "@/images/research-development-behaviour/team_director_1.png"
import Member2 from "@/images/research-development-behaviour/team_director_2.png"
import Member3 from "@/images/research-development-behaviour/team_director_3.png"
import Member4 from "@/images/research-development-behaviour/team_director_4.png"
import Image from "next/image"
const ResearchTeamDirector = () => {
  const  members = [
    {
      img: Member1,
      name: 'Prof. Alexander',
      area: 'Number Theory, Cryptography, and Computational Mathematics.'
    },
    {
      img: Member2,
      name: 'Dr. Emily Chen',
      area: 'Number Theory, Cryptography, and Computational Mathematics.'
    },
    {
      img: Member3,
      name: 'Dr. Aisha Patel',
      area: 'Applied Mathematics, Mathematical Modeling, Fluid Dynamics, Cryptography.'
    },
    {
      img: Member4,
      name: 'Prof. Javier',
      area: 'Topology, Data Science, and Geometric Methods in Machine Learning'
    },
  ]
  return (
    <div className="m-5 lg:m-20">
      <div className="text-center">
        <h2 className="font-bold text-3xl  lg:text-5xl">Team Directory</h2>
        <p className="text-clightGray mt-5">Embark on a virtual journey through our Team Directory, a curated collection of exceptional individuals shaping the future of research.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-14">
        {
          members.map((member, i)=>{
            return(
              <div key={i} className="text-center space-y-4">
                <div className="flex justify-center">
                  <Image src={member.img} />
                </div>
                <p className="font-semibold text-xl">{member.name}</p>
                <p className="leading-loose"><span className="font-semibold">Research Area: </span> <span className="text-clightGray">{member.area}</span></p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ResearchTeamDirector