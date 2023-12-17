import React from 'react'
import Slider from "react-slick";
import EventImg from "@/images/workshop/event.png"
import Image from "next/image";

const WorkshopUpcoming = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  const events = [
    {
      day: '09',
      month:  'december',
      location: 'Grand Innovation Center ',
      img: EventImg,
      title: 'Innovation Summit',
      description: 'Join us at the Innovation Summit, where industry leaders and visionaries converge to explore groundbreaking ideas and shape the future of innovation. Don\'t miss your chance to be part of the next big thing!',
      link: ''
    },
    {
      day: '09',
      month:  'december',
      location: 'Grand Innovation Center ',
      img: EventImg,
      title: 'Innovation Summit',
      description: 'Join us at the Innovation Summit, where industry leaders and visionaries converge to explore groundbreaking ideas and shape the future of innovation. Don\'t miss your chance to be part of the next big thing!',
      link: ''
    },
    {
      day: '09',
      month:  'december',
      location: 'Grand Innovation Center ',
      img: EventImg,
      title: 'Innovation Summit',
      description: 'Join us at the Innovation Summit, where industry leaders and visionaries converge to explore groundbreaking ideas and shape the future of innovation. Don\'t miss your chance to be part of the next big thing!',
      link: ''
    },
  ]
  return (
    <div className="m-20 pt-10 ">
      <div className="flex gap-10">
        <h1 >Upcoming Events</h1>
        <p className="leading-loose flex-1">Stay tuned for exciting opportunities! Explore upcoming events dedicated to venture incubation, fostering collaboration among our dynamic community.</p>
      </div> 
      <div>
        <Slider {...settings}>
          {
            events.map((event, i)=>{
              return(
                <div key={i}>
                  <div className="flex items-center gap-10 mx-5 bg-cgray p-8 mt-10 rounded-xl">
                    <div className="w-full flex items-center gap-8 text-center space-y-3 ">
                      <div className="w-full bg-cdark p-7 rounded-xl">
                        <h2 className="text-[128px] font-bold text-cblue">{event.day}</h2>
                        <p className="font-semibold">{event.month.toUpperCase()}</p>
                        <p className="text-clightGray mt-3">{event.location}</p>
                      </div>
                      <div className="w-full">
                        <Image src={event.img} />
                      </div>
                    </div>
                    <div className="w-full space-y-5">
                      <h2 className="text-2xl font-bold">{event.title}</h2>
                      <p className="leading-loose text-clightGray">{event.description}</p>
                      <button className="blue-btn">Participate Now!</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default WorkshopUpcoming