import React from 'react'
import Expert1 from "@/images/product-services/expert1.png"
import Expert2 from "@/images/product-services/expert2.png"
import Expert3 from "@/images/product-services/expert3.png"
import Expert4 from "@/images/product-services/expert4.png"
import Image from "next/image"
const ProductServices = () => {
  const services = [
    {
      img: Expert1,
      serial:'01',
      firstline:'Designing User-Centric Experiences',
      title:'Product R&D',
      subTitle:'Creative Product Design',
      description:'Our team crafts creative and user-centric product designs to enhance daily experiences.'
    },
    {
      img: Expert2,
      serial:'02',
      firstline:'Comprehensive Business Models',
      title:'Business Modeling',
      subTitle:'Building Strong Foundations for Success',
      description:'We develop comprehensive business models with a strategic perspective for your success.'
    },
    {
      img: Expert3,
      serial:'03',
      firstline:'PhoenEX Ventures',
      title:'Venture Hub/Studio Portfolio',
      subTitle:'Join Our Exclusive Portfolio of Innovations',
      description:'Explore our exclusive portfolio in design technology, behavioral optimization platforms, and financial technology.'
    },
    {
      img: Expert4,
      serial:'04',
      firstline:'Tokenomics Design Service',
      title:'Tokenomics Design',
      subTitle:'Elevate Your Projects with Effective Token Mechanisms',
      description:'Enhance your projects with our tokenomics design service, creating effective mechanisms and behaviors.'
    },
    
  ]
  return (
    <div className="m-5 lg:m-20">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Expert Services</h2>
        <p className="text-clightGray mt-5">Empowering Your Journey with Unrivaled Expert Services: Where Precision Meets Proficiency in Crafting Tailored Solutions for Your Unique Needs and Challenges.</p>
      </div>
      <div className="mt-20">
        {
          services.map((service, i)=>{
            return(
              <div key={i} className={`flex my-20 lg:my-10 gap-10 lg:gap-40 items-center ${(i+1)%2==0?'lg:flex-row-reverse flex-col-reverse':'flex-col-reverse lg:flex-row'}`}>
                <div className="w-full flex justify-center">
                  <Image className="w-[80%] lg:w-full" src={service.img} />
                </div>
                <div className="w-full space-y-3">
                  <h2 className="text-cgray text-9xl font-bold">{service.serial}</h2>
                  <p className="text-clightGray">{service.firstline}</p>
                  <h2 className="font-bold text-4xl">{service.title}</h2>
                  <p className="text-cblue font-semibold">{service.subTitle}</p>
                  <p className="text-clightGray">{service.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductServices