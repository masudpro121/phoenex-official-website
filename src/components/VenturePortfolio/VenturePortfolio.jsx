import React from "react";
import VenturePortfolio1 from "@/images/venture-portfolio/portfolio_1.png";
import VenturePortfolio2 from "@/images/venture-portfolio/portfolio_2.png";
import VenturePortfolio3 from "@/images/venture-portfolio/portfolio_3.png";
import VenturePortfolio4 from "@/images/venture-portfolio/portfolio_4.png";
import VenturePortfolio5 from "@/images/venture-portfolio/portfolio_5.png";
import VenturePortfolio6 from "@/images/venture-portfolio/portfolio_6.png";
import VenturePortfolio7 from "@/images/venture-portfolio/portfolio_7.png";
import VenturePortfolio8 from "@/images/venture-portfolio/portfolio_8.png";
import Image from "next/image";
const VenturePortfolio = () => {
  const portfolios = [
    {
      img: VenturePortfolio1,
      title: "Fintech",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio2,
      title: "Martech",
      description:
        "Dive into sustainable and eco-friendly investments with our Green Energy Ventures portfolio. Discover projects that are shaping the future of renewable energy and environmental conservation.",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio3,
      title: "Edtech",
      description:
        "Join the HealthTech Revolution portfolio to explore ventures at the forefront of healthcare innovation. From telemedicine to advanced diagnostics, these investments are driving the future of healthcare.",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio4,
      title: "GreenTech",
      description:
        "Engage with our Global Impact Initiatives portfolio, where we invest in projects with a focus on social responsibility and positive change. Explore opportunities that make a meaningful impact on communities worldwide.",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio5,
      title: "Global Impact Initiatives",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio6,
      title: "Immersive Experiences Device",
      description:
        "Dive into sustainable and eco-friendly investments with our Green Energy Ventures portfolio. Discover projects that ",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio7,
      title: "For Future Categories",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
    {
      img: VenturePortfolio8,
      title: "For Future Categories",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
  ];
  return (
    <div className="m-10 lg:m-20">
      <div className="text-center">
        <h1>Our Portfolio</h1>
        <p className="text-clightGray mt-5">
          Welcome to PhoenEX's Venture Portfolio section, where we showcase our{" "}
          <br /> diverse range of investment opportunities and services that
          align with our <br /> mission and vision.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 mt-10">
        {portfolios.map((portfolio, i) => {
          return (
            <div className="p-5 rounded-xl text-center  bg-cgray flex flex-col gap-5">
              <div >
                <Image className="w-full" src={portfolio.img} />
              </div>
              <div className="flex flex-col justify-between h-1/2">
                <div>
                  <p className=" text-2xl font-semibold">{portfolio.title}</p>
                  <p className="mt-5  text-clightGray">{portfolio.description}</p>
                </div>
                <div>
                <button className="blue-btn mt-10">Find out more</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VenturePortfolio;
