import React from 'react'
import Person1 from "@/images/project-specific-community/management_person_1.png"
import Person2 from "@/images/project-specific-community/management_person_2.png"
import Image from "next/image"
import Collaboration1 from "@/images/project-specific-community/collaboration1.svg"
import Collaboration2 from "@/images/project-specific-community/collaboration1.svg"
import Collaboration3 from "@/images/project-specific-community/collaboration1.svg"

const ProjectSpecificManagement = () => {
  const collaborations = [
    {
      icon: Collaboration1,
      title: 'Joint Marketing Campaigns',
      description:  'Coordinated efforts to promote community initiatives and agency services simultaneously.'
    },
    {
      icon: Collaboration2,
      title: 'Co-Branding Initiatives',
      description:  'Collaborative branding efforts that leverage the reputation audience of both the community & the agency.'
    },
    {
      icon: Collaboration3,
      title: 'Collaborative Events',
      description:  'Hosting joint webinars, conferences, or meet-ups that benefit both the community and the agency.'
    },
  ]
  return (
    <div className="m-5 lg:m-20 py-20">
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold leading-relaxed">Community Management & Collaboration Opportunities</h2>
        <p className="text-lg lg:text-xl mt-10">Nurturing Engagement and Growth, Unlocking Synergies with Digital Marketing Agencies</p>
      </div>

      <div className="bg-cgray flex flex-col lg:flex-row items-center p-2 rounded-xl my-20">
        <div className="w-full text-center bg-cblue py-4 cursor-pointer rounded-xl">
          <p className="font-semibold text-lg lg:text-xl">Community Management</p>
        </div>
        <div className="w-full text-center py-4 cursor-pointer">
          <p className="text-lg lg:text-xl">Collaboration Opportunities</p>
        </div>
      </div>

      <div className="flex flex-col  lg:flex-row items-center gap-20">
        <div className="w-full">
          <div className="text-center lg:text-start">
            <p className="text-xl font-bold">Introduction</p>
            <p className="text-clightGray leading-loose mt-5">Community managers play a pivotal role in fostering vibrant and engaged communities. They are the backbone, ensuring a positive and collaborative atmosphere. Their responsibilities extend beyond mere moderation, encompassing the facilitation of meaningful interactions and the growth of the community ecosystem. These dedicated professionals are instrumental in maintaining a healthy, inclusive environment for members to thrive.</p>
            <p className="text-xl font-bold mt-10">Collaboration Opportunities</p>
            <p className="text-clightGray leading-loose mt-5">Opportunities include joint marketing campaigns, co-branding initiatives, and collaborative events. To discuss potential collaborations, contact our collaboration team at </p>
            <p className="text-cblue font-bold">collaborations@phoenex.com.</p>
          </div>
          <div className="mt-16">
            <p className="text-xl font-bold text-center lg:text-start">Manager Contacts</p>
            <div className="flex flex-col lg:flex-row gap-10 mt-8">
              <div className="space-y-4">
                <p className="text-lg font-bold text-cblue">Sarah Johnson</p>
                <p><span className="text-clightGray">Email: </span><span className="font-bold">sarah.johnson@phoenex.com</span></p>
                <p><span className="text-clightGray">Phone: </span><span className="font-bold">+1 (555) 123-4567</span></p>
              </div>
              <div className="space-y-4">
                <p className="text-lg font-bold text-cblue">Alex Rodriguez</p>
                <p><span className="text-clightGray">Email: </span><span className="font-bold">alex.rodriguez@phoenex.com</span></p>
                <p><span className="text-clightGray">Phone: </span><span className="font-bold">+1 (555) 987-6543</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div>
            <Image src={Person1} />
          </div>
          <div>
            <Image src={Person2} />
          </div>
        </div>
      </div>

      <div className="mt-32 text-center lg:text-start">
        <p className="text-xl font-bold">Introduction</p>
        <p className="text-clightGray leading-loose mt-5">Collaboration between community managers and digital marketing agencies is a powerful avenue for mutual growth. By combining the strengths of engaged communities with strategic marketing expertise, both parties can achieve heightened visibility, increased engagement, and expanded influence.</p>
        <p className="text-xl font-bold mt-10">Collaboration Types</p>
        <div className="flex flex-col lg:flex-row mt-7 gap-10">
           {
            collaborations.map((collaboration, i) => {
              return(
                <div key={i} className="bg-cgray px-7 py-5 rounded-3xl">
                  <div className="flex justify-center lg:justify-start gap-5 items-center">
                    <Image src={collaboration.icon} />
                    <p className="text-lg font-semibold">{collaboration.title}</p>
                  </div>
                  <p className="mt-3 text-clightGray leading-loose">
                    {collaboration.description}
                  </p>
                </div>
              )
            })
           }
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-xl font-bold">Submission Process</p>
        <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-start mt-7">
          <div className="lg:w-2/3">
            <p className="text-clightGray leading-loose">Digital marketing agencies interested in collaboration are invited to express their interest by reaching out to <span className="font-bold text-cblue">collaborations@phoenex.com.</span>  Provide an overview of your agency, your collaboration proposal, and how it aligns with the community's ethos.</p>
          </div>
          <button className="blue-btn">Send Proposal</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectSpecificManagement