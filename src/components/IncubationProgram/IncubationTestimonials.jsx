import React from 'react'
import Slider from "react-slick";
import TestimonialImg from "@/images/workshop-incubation/testimonial_1.png"
import Image from "next/image";
const IncubationTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "260px",
  };
  const testimonials = [
    {
      img: TestimonialImg,
      description: `PhoenEX's Incubation Program has been a game-changer for my tech startup. The mentorship provided a strategic direction, and the collaborative environment fueled innovation. `,
      name: 'Emily Thompson',
      title: 'Tech Innovator'
    },
    {
      img: TestimonialImg,
      description: `PhoenEX's Incubation Program has been a game-changer for my tech startup. The mentorship provided a strategic direction, and the collaborative environment fueled innovation. `,
      name: 'Emily Thompson',
      title: 'Tech Innovator'
    },
    {
      img: TestimonialImg,
      description: `PhoenEX's Incubation Program has been a game-changer for my tech startup. The mentorship provided a strategic direction, and the collaborative environment fueled innovation. `,
      name: 'Emily Thompson',
      title: 'Tech Innovator'
    },
  ]
  return (
    <div className="m-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Testimonials</h2>
        <p className="text-clightGray mt-5">Hear from project managers who have reaped the benefits of our Incubation Program.</p>
      </div>
      <div className="mt-20">
        <Slider {...settings}>
          {
            testimonials.map((testimonial, i)=>{
              return(
                <div key={i} >
                  <div className="bg-cgray flex items-end  gap-10 mx-5 px-5 pt-5 rounded-xl">
                    <div className="w-1/2">
                      <Image src={testimonial.img} />
                    </div>
                    <div className="w-full flex flex-col p-5 justify-between  gap-10">
                      <p className="leading-loose text-clightGray">{testimonial.description}</p>
                      <div>
                        <p className="text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-cblue text-sm mt-2">{testimonial.title}</p>
                      </div>
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

export default IncubationTestimonials