import React from 'react'
import Slider from "react-slick";
import NewsImage1 from "@/images/project-specific-community/news_1.png"
import NewsImage2 from "@/images/project-specific-community/news_2.png"
import Image from "next/image";
const ProjectSpecificNews = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 2,
    speed: 500,
    dots:  true,
    responsive: [
      {
        breakpoint: 1228,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false
        }
      }
    ]
  };
  const allnews = [
    {
      img: NewsImage1,
      title: `PhoenEX's Innovation Hub Launches Groundbreaking Tech Initiative`,
      description: `In an exciting development, PhoenEX's Innovation Hub has embarked on a pioneering tech initiative aimed at pushing the boundaries of innovation. Under the leadership of community manager Sarah Johnson, the Innovation Hub is set to redefine the tech landscape with collaborative projects and cutting-edge discussions. `,
      date: 'November 15, 2023',
    },
    {
      img: NewsImage2,
      title: 'Innovation Hub Achieves Milestone - Celebrates 10,000 Members!',
      description: `PhoenEX's Innovation Hub is thrilled to announce a significant milestone – the community has surpassed 10,000 members! Under the guidance of community manager Sarah Johnson, the Innovation Hub has become a thriving ecosystem where tech enthusiasts converge to discuss, collaborate, and innovate. `,
      date: 'December 3, 2023',
    },
    {
      img: NewsImage1,
      title: `PhoenEX's Innovation Hub Launches Groundbreaking Tech Initiative`,
      description: `In an exciting development, PhoenEX's Innovation Hub has embarked on a pioneering tech initiative aimed at pushing the boundaries of innovation. Under the leadership of community manager Sarah Johnson, the Innovation Hub is set to redefine the tech landscape with collaborative projects and cutting-edge discussions. `,
      date: 'November 15, 2023',
    },
    {
      img: NewsImage2,
      title: 'Innovation Hub Achieves Milestone - Celebrates 10,000 Members!',
      description: `PhoenEX's Innovation Hub is thrilled to announce a significant milestone – the community has surpassed 10,000 members! Under the guidance of community manager Sarah Johnson, the Innovation Hub has become a thriving ecosystem where tech enthusiasts converge to discuss, collaborate, and innovate. `,
      date: 'December 3, 2023',
    },
  ]
  return (
    <div className="m-8 lg:m-20">
      <div className="mb-10 lg:px-10 text-center lg:text-start">
        <h1>Latest news</h1>
        <p className="text-lg lg:text-xl mt-5 text-clightGray">Unprecedented Events and Timely Updates Shaping the World Today</p>
      </div>
      <Slider {...settings}>
        {
          allnews.map((news, i)=>{
            return(
              <div className="text-center lg:text-start" key={i}>
                <div className="bg-cgray  p-5 m-2 lg:m-5 rounded-xl">
                  <div>
                    <Image src={news.img} />
                  </div>
                  <div className="mt-5">
                    <h2 className="text-xl leading-loose font-semibold">{news.title}</h2>
                    <p className="leading-loose mt-4 text-clightGray">{news.description}</p>
                  </div>
                  <div className="mt-8 flex items-center flex-col lg:flex-row gap-5 justify-between">
                    <button className="blue-btn">Find out more</button>
                    <p className="font-semibold">Date: {news.date}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ProjectSpecificNews