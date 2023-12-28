import React from "react";
import Portfolio1 from "@/images/workshop-product-management/product_1.png";
import Portfolio2 from "@/images/workshop-product-management/product_2.png";
import Portfolio3 from "@/images/workshop-product-management/product_3.png";
import Portfolio4 from "@/images/workshop-product-management/product_4.png";
import Portfolio5 from "@/images/workshop-product-management/product_5.png";
import Portfolio6 from "@/images/workshop-product-management/product_6.png";
import Portfolio7 from "@/images/workshop-product-management/product_7.png";
import Portfolio8 from "@/images/workshop-product-management/product_8.png";
import Image from "next/image";
const WorkshopManagementPortfolio = () => {
  const portfolios = [
    {
      img: Portfolio1,
      title: "Fintech",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
    {
      img: Portfolio2,
      title: "Martech",
      description:
        "Dive into sustainable and eco-friendly investments with our Green Energy Ventures portfolio. Discover projects that are shaping the future of renewable energy and environmental conservation.",
      link: "https://google.com",
    },
    {
      img: Portfolio3,
      title: "Edtech",
      description:
        "Join the HealthTech Revolution portfolio to explore ventures at the forefront of healthcare innovation. From telemedicine to advanced diagnostics, these investments are driving the future of healthcare.",
      link: "https://google.com",
    },
    {
      img: Portfolio4,
      title: "GreenTech",
      description:
        "Engage with our Global Impact Initiatives portfolio, where we invest in projects with a focus on social responsibility and positive change. Explore opportunities that make a meaningful impact on communities worldwide.",
      link: "https://google.com",
    },
    {
      img: Portfolio5,
      title: "Global Impact Initiatives",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
    {
      img: Portfolio6,
      title: "Immersive Experiences Device",
      description:
        "Dive into sustainable and eco-friendly investments with our Green Energy Ventures portfolio. Discover projects that ",
      link: "https://google.com",
    },
    {
      img: Portfolio7,
      title: "For Future Categories",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
    {
      img: Portfolio8,
      title: "For Future Categories",
      description:
        "Explore groundbreaking technology ventures that redefine industries. From artificial intelligence to cutting-edge software solutions, our Tech Innovators Hub is the epicenter of innovation.",
      link: "https://google.com",
    },
  ];
  return (
    <div className="m-5 lg:m-20">
      <div >
        <h2 className="text-5xl font-bold">Product Portfolio</h2>
        <p className="text-clightGray mt-5">
        Explore our diverse range of products and services, each crafted with precision to meet the evolving needs of our dynamic community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-20">
        {portfolios.map((portfolio, i) => {
          return (
            <div key={i} className="p-5 rounded-xl text-center  bg-cgray flex flex-col gap-5">
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

export default WorkshopManagementPortfolio;
