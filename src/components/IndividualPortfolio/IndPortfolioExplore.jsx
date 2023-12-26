import React from "react";
import Portfolio1 from "@/images/individual-portfolio/portfolio_1.png";
import Portfolio2 from "@/images/individual-portfolio/portfolio_2.png";
import Portfolio3 from "@/images/individual-portfolio/portfolio_3.png";
import Portfolio4 from "@/images/individual-portfolio/portfolio_4.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const IndPortfolioExplore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1228,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const portfolios = [
    {
      img: Portfolio1,
      title: "Global Impact Initiatives",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "",
    },
    {
      img: Portfolio2,
      title: "Immersive Experiences Device",
      description:
        "Dive into sustainable and eco-friendly investments with our Green Energy Ventures portfolio. Discover projects that ",
      link: "",
    },
    {
      img: Portfolio3,
      title: "Edtech",
      description:
        "Join the HealthTech Revolution portfolio to explore ventures at the forefront of healthcare innovation. From telemedicine to advanced diagnostics, these investments are driving the future of healthcare.",
      link: "",
    },
    {
      img: Portfolio4,
      title: "GreenTech",
      description:
        "Engage with our Global Impact Initiatives portfolio, where we invest in projects with a focus on social responsibility and positive change. Explore opportunities that make a meaningful impact on communities worldwide.",
      link: "",
    },
    {
      img: Portfolio1,
      title: "Global Impact Initiatives",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "",
    },
    {
      img: Portfolio2,
      title: "Immersive Experiences Device",
      description:
        "Dive into sustainable and eco-friendly investments with our Green Energy Ventures portfolio. Discover projects that ",
      link: "",
    },
    {
      img: Portfolio3,
      title: "Edtech",
      description:
        "Join the HealthTech Revolution portfolio to explore ventures at the forefront of healthcare innovation. From telemedicine to advanced diagnostics, these investments are driving the future of healthcare.",
      link: "",
    },
    {
      img: Portfolio4,
      title: "GreenTech",
      description:
        "Engage with our Global Impact Initiatives portfolio, where we invest in projects with a focus on social responsibility and positive change. Explore opportunities that make a meaningful impact on communities worldwide.",
      link: "",
    },
  ];
  return (
    <div className="m-8 lg:m-20">
      <h2 className="text-3xl text-center lg:text-start lg:text-5xl font-bold">Explore more Portfolios</h2>
      <div className="mt-10">
      <Slider {...settings} >
          {
            portfolios.map((portfolio, i) => {
              return (
                <div key={i} className="p-1 h-[720px]   text-center  ">
                  <div className="h-full bg-cgray rounded-2xl">
                    <div className="p-5">
                      <Image className="w-full" src={portfolio.img} />
                    </div>
                    <div className="flex px-5 flex-col justify-between h-1/2">
                      <div>
                        <p className=" text-2xl font-semibold">{portfolio.title}</p>
                        <p className="mt-5  text-clightGray">
                          {portfolio.description}
                        </p>
                      </div>
                      <div>
                        <button className="blue-btn  mt-5">Find out more</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
      </Slider>
      </div>
    </div>
  );
};

export default IndPortfolioExplore;
