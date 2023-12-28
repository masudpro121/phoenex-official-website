import React from 'react'
import Slider from "react-slick";
import ProcessIcon1 from "@/images/project-specific-community/activity_process1.svg"
import ProcessIcon2 from "@/images/project-specific-community/activity_process2.svg"
import ProcessIcon3 from "@/images/project-specific-community/activity_process3.svg"
import ProcessIcon4 from "@/images/project-specific-community/activity_process4.svg"
import ActivityImg from "@/images/project-specific-community/activity_img.png"
import Image from "next/image";

const  ProjectSpecificActivity = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
    dots:  true,
    responsive:[
      {
        breakpoint: 1228,
        settings: {
          centerMode: false
        }
      }
    ]
  };
  const activities = [
    {
      title: 'Collaborative Workshops',
      description: 'Engage in hands-on collaborative workshops that encourage ideation and problem-solving. Our Innovation Hub hosts regular sessions where members actively contribute their expertise to tackle real-world challenges.',
      img: ActivityImg,
      processes: [
        {
          icon: ProcessIcon1,
          title: 'Brainstorming Sessions',
          description: 'Engage in lively brainstorming sessions where diverse perspectives come together to generate innovative ideas.'
        },
        {
          icon: ProcessIcon2,
          title: 'PrototypingLabs',
          description: 'Dive into hands-on prototyping labs, turning concepts into tangible solutions through experimentation and iteration.'
        },
        {
          icon: ProcessIcon3,
          title: 'Team Collaboration',
          description: 'Foster a culture of teamwork and collaboration, leveraging the collective expertise of our diverse community.'
        },
        {
          icon: ProcessIcon4,
          title: 'Real-World Problem Solving',
          description: 'Tackle real-world challenges through interactive activities, applying technological solutions to make a meaningful impact.'
        },
      ]
    },
    {
      title: 'Collaborative Workshops',
      description: 'Engage in hands-on collaborative workshops that encourage ideation and problem-solving. Our Innovation Hub hosts regular sessions where members actively contribute their expertise to tackle real-world challenges.',
      img: ActivityImg,
      processes: [
        {
          icon: ProcessIcon1,
          title: 'Brainstorming Sessions',
          description: 'Engage in lively brainstorming sessions where diverse perspectives come together to generate innovative ideas.'
        },
        {
          icon: ProcessIcon2,
          title: 'PrototypingLabs',
          description: 'Dive into hands-on prototyping labs, turning concepts into tangible solutions through experimentation and iteration.'
        },
        {
          icon: ProcessIcon3,
          title: 'Team Collaboration',
          description: 'Foster a culture of teamwork and collaboration, leveraging the collective expertise of our diverse community.'
        },
        {
          icon: ProcessIcon4,
          title: 'Real-World Problem Solving',
          description: 'Tackle real-world challenges through interactive activities, applying technological solutions to make a meaningful impact.'
        },
      ]
    },
    {
      title: 'Collaborative Workshops',
      description: 'Engage in hands-on collaborative workshops that encourage ideation and problem-solving. Our Innovation Hub hosts regular sessions where members actively contribute their expertise to tackle real-world challenges.',
      img: ActivityImg,
      processes: [
        {
          icon: ProcessIcon1,
          title: 'Brainstorming Sessions',
          description: 'Engage in lively brainstorming sessions where diverse perspectives come together to generate innovative ideas.'
        },
        {
          icon: ProcessIcon2,
          title: 'PrototypingLabs',
          description: 'Dive into hands-on prototyping labs, turning concepts into tangible solutions through experimentation and iteration.'
        },
        {
          icon: ProcessIcon3,
          title: 'Team Collaboration',
          description: 'Foster a culture of teamwork and collaboration, leveraging the collective expertise of our diverse community.'
        },
        {
          icon: ProcessIcon4,
          title: 'Real-World Problem Solving',
          description: 'Tackle real-world challenges through interactive activities, applying technological solutions to make a meaningful impact.'
        },
      ]
    },
  ]
  return (
    <div className="m-8 lg:m-20">
      <Slider {...settings} >
        {
          activities.map((activity, i)=>{
            return(
              <div key={i} className="p-2 lg:p-10">
                <div className="flex flex-col text-center lg:flex-row lg:text-starts gap-10">
                  <h2 className="text-cblue font-bold text-3xl">{activity.title}</h2>
                  <p className="text-clightGray leading-loose text-lg">{activity.description}</p>
                </div>
                <div className="mt-10">
                  <Image src={activity.img} />
                </div>

                <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 py-10">
                  {
                    activity.processes.map((process, j)=>{
                      return(
                        <div className="lg:w-64 bg-cgray relative  rounded-xl text-center" key={j}>
                          <div className={`absolute flex justify-center  h-full  w-full ${(j)%2==0? '-top-5 items-start': '-top-5 lg:top-5 items-start  lg:-bottom-5 lg:items-end'}`}>
                            <Image className="border-4 border-cblue rounded-full p-2 w-14" src={process.icon} />
                          </div>
                         <div className={`p-7 ${(j)%2==0? 'mt-8': 'mt-8 lg:mt-0 lg:mb-8'}`}>
                          <h3 className="text-xl font-semibold">{process.title}</h3>
                            <p className="text-clightGray leading-loose mt-4">{process.description}</p>
                         </div>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ProjectSpecificActivity