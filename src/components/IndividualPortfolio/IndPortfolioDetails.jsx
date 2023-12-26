import Link from "next/link"
import React from 'react'
import Incubation1 from "@/images/individual-portfolio/incubation_1.svg"
import Incubation2 from "@/images/individual-portfolio/incubation_2.svg"
import Incubation3 from "@/images/individual-portfolio/incubation_3.svg"
import Visuals1 from "@/images/individual-portfolio/visuals_1.png"
import Visuals2 from "@/images/individual-portfolio/visuals_2.png"
import Visuals3 from "@/images/individual-portfolio/visuals_3.png"
import Visuals4 from "@/images/individual-portfolio/visuals_4.png"
import Visuals5 from "@/images/individual-portfolio/visuals_5.png"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';

const IndPortfolioDetails = () => {
  const details = {
    description:  'GreenTech Innovations focuses on developing cutting-edge technologies aimed at reducing carbon footprints and promoting eco-friendly practices. Our portfolio includes solutions ranging from renewable energy projects to smart waste management systems.',
    investmentOpportunity: 'Investors can actively participate in the GreenTech Innovations portfolio by supporting projects aligned with their sustainability goals. By investing, individuals contribute to the development of groundbreaking technologies that have the potential to reshape industries while promoting environmental stewardship.',
    incubation: {
      description: 'Our portfolio offers comprehensive incubation services to support the growth of GreenTech projects. From mentorship programs to access to state-of-the-art research facilities, we are dedicated to nurturing the full potential of each venture within this portfolio.',
      services: [
        {
          title: 'Mentorship Programs',
          icon: Incubation1
        },
        {
          title: 'Research Facilities',
          icon: Incubation2
        },
        { 
          title: 'Market Access',
          icon: Incubation3
        },
      ]
    },
    visuals : {
      description: 'Explore captivating visuals showcasing the impact of GreenTech Innovations. High-quality images depict solar farms, wind turbines, and smart cities powered by our sustainable technologies.',
      images: [Visuals1, Visuals2, Visuals3, Visuals4, Visuals5]
    },
    roadmap: [
      {
        title: 'Prototype Development',
        description: 'Turning ideas into reality! Witness the creation of prototypes that pave the way for groundbreaking solutions.'
      },
      {
        title: 'Strategic Partnerships',
        description: 'Forge ahead with strategic alliances! Explore the partnerships that enhance project capabilities and market reach.'
      },
      {
        title: 'User Testing Triumphs',
        description: 'Validation at its best! Celebrate the positive outcomes and lessons learned from rigorous user testing phases.'
      },
      {
        title: 'Funding Milestones',
        description: 'Fueling innovation! Stay updated on funding achievements that empower projects to reach new heights. '
      },
    ],
    projectAnalysis: [
      {
        title: 'Environmental Impact',
        percent: 85,
      },
      {
        title: 'Market Potential',
        percent: 90,
      },
      {
        title: 'Technological Innovation',
        percent: 80,
      },
      {
        title: 'Scalability',
        percent: 75,
      },
    ],
    investmentAnalysis: [
      {
        title: 'Project Valuation',
        percent: 85,
      },
      {
        title: 'Projected ROI:',
        percent: 90,
      },
      {
        title: 'Funding Round:',
        percent: 80,
      },
      {
        title: 'Timeframe:',
        percent: 75,
      },
    ],
    
    keyBenefits: [
      {
        title: 'Environmental Impact',
        description: 'Investing in GreenTech Innovations means actively participating in the fight against climate change.'
      },
      {
        title: 'Innovation Leadership',
        description: 'Be at the forefront of groundbreaking technologies, contributing to a more sustainable and resilient future.'
      },
      {
        title: 'Financial Returns',
        description: 'While making a positive impact, investors can also benefit from the financial success of the GreenTech portfolio.'
      },
    ],

    outputs: [
      {
        title: 'Energy Output Increase',
        description: 'Projected 30% higher.'
      },
      {
        title: 'Financial Returns',
        description: 'Anticipated annual revenue of $2 million.'
      },
      {
        title: 'Economic Growth',
        description: 'Predicted 15% boost in local economy.'
      },
    ]
   

  }
  return (
    <div className="m-5 my-20 lg:m-20 flex gap-5  lg:gap-20">
      <div  className="hidden lg:block w-1/3">
        <div className="flex  flex-col space-y-10 bg-cgray p-10 rounded-xl">
          <Link href="#description">Description</Link>
          <Link href="#investmentOpportunity">Investment Opportunity</Link>
          <Link href="#incubationService">Incubation Services</Link>
          <Link href="#informationVisuals">Information Visuals</Link>
          <Link href="#keyBenefits">Key Benefits</Link>
          <Link href="#investorInformation">Investor Information</Link>
        </div>
      </div>

      <div className="space-y-14 w-full">
        <div id="description">
          <div >
            <h2 className="text-3xl font-semibold">Description</h2>
            <p className="text-clightGray mt-5 text-lg lg:text-xl leading-loose">{details.incubation.description}</p>
          </div>
        </div>

        <div id="investmentOpportunity">
          <div >
            <h2 className="text-3xl font-semibold">Investment Opportunity</h2>
            <p className="text-clightGray mt-5 text-lg lg:text-xl leading-loose">{details.investmentOpportunity}</p>
          </div>
        </div>

        <div id="incubationService">
          <div >
            <h2 className="text-3xl font-semibold">Incubation Services</h2>
            <p className="text-clightGray mt-5 text-lg lg:text-xl leading-loose">{details.investmentOpportunity}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-7">
          {
            details.incubation.services.map((service, i)=>{
              return(
                <div className="flex gap-5 bg-cgray rounded-xl p-5 items-center" key={i}>
                  <div>
                    <Image src={service.icon} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg lg:text-xl">{service.title}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>

        <div id="informationVisuals">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold">Visuals</h2>
            <p className="text-clightGray mt-5 text-lg lg:text-xl leading-loose">{details.visuals.description}</p>
          </div>
          <div className="lg:flex gap-5 mt-5">
            {
              details.visuals.images.slice(0,2).map((img, i)=>{
                return(
                    <div key={i} className="w-full my-5 lg:my-0">
                      <Image  className="w-full h-64 rounded-xl object-cover" src={img} />
                    </div>
                )
              })
            }
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            {
              details.visuals.images.slice(2,5).map((img, i)=>{
                return(
                    <Image key={i} className="w-full h-full" src={img} />
                )
              })
            }
          </div>
          
        </div>

        {/* <div className="bg-cgray  p-5 rounded-xl">
            <Carousel 
               centerMode={true}
               useKeyboardArrows={true}
               centerSlidePercentage={33}
               infiniteLoop={true}
               showThumbs={false}
               showIndicators={false}
               swipeable={true}
            >
              {
                details.roadmap.map((rmap, i)=>{
                  return (
                    <div className="p-8 space-y-4 ">
                      <p className="font-semibold text-cblue text-xl">{rmap.title}</p>
                      <p className="text-clightGray leading-loose">{rmap.description}</p>
                    </div>
                  )
                })
              }
            </Carousel>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Project Infos with Easy-to-Read Flowcharts</h2>
          <div className="flex gap-10 mt-5">
            <div className="w-full bg-cgray p-12 rounded-3xl">
              <p className="font-semibold text-xl">Project Analysis</p>
              {
                details.projectAnalysis.map((project, i)=>{
                  return(
                    <div className="mt-7">
                      <div className="flex justify-between">
                        <p className="text-clightGray text-sm">{project.title}</p>
                        <p>{project.percent}%</p>
                      </div>
                      <div className="w-full mt-2 bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-cblue" style={{"width":  project.percent+"%"}} ></div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="w-full bg-cgray p-12 rounded-3xl">
              <p className="font-semibold text-xl">Investment Analysis</p>
              {
                details.investmentAnalysis.map((investment, i)=>{
                  return(
                    <div className="mt-7">
                      <div className="flex justify-between">
                        <p className="text-clightGray text-sm">{investment.title}</p>
                        <p>{investment.percent}%</p>
                      </div>
                      <div className="w-full mt-2 bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                        <div className="h-1.5 rounded-full bg-cblue" style={{"width":  investment.percent+"%"}} ></div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Key Benefits</h2>
          {
            details.keyBenefits.map((benefit, i)=>{
              return(
                <p className="text-xl leading-loose">
                  <span className="text-cwhite font-semibold">{benefit.title}: </span>
                  <span className="text-clightGray">{benefit.description}</span>
                </p>
              )
            })
          }
        </div>

        <div className="space-y-4">
          {
            details.outputs.map((output, i)=>{
              return(
                <p className="text-xl leading-loose">
                  <span className="text-clightGray ">{output.title}: </span>
                  <span className="text-cwhite font-semibold">{output.description}</span>
                </p>
              )
            })
          }
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Investor Information</h2>
          <p className="leading-loose text-clightGray text-xl mt-5">
            For more details on how to become a part of the GreenTech Innovations portfolio, please contact our Investor Relations team at <span className="text-cblue font-semibold">invest@greentech.phoenex.com</span> or call <span className="text-cblue font-semibold">(555) 123-4567</span>.
          </p>
        </div> */}

      </div>
    </div>
  )
}

export default IndPortfolioDetails