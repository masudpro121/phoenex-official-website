import React from "react";
import { Carousel } from "react-responsive-carousel";
import Project1 from "@/images/home/project_1.png";
import Project2 from "@/images/home/project_2.png";
import Project3 from "@/images/home/project_3.png";
import Slider from "react-slick";
import Image from "next/image";
const HomeProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
  const projects = [
    {
      img: Project1,
      title: "PhoenEdX platform",
      description:
        "UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management",
      infos: [
        "Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976",
        "Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134",
        "Monthly residual income paid (operated and fully managed by ASE)",
      ],
    },
    {
      img: Project2,
      title: "PhoenEdX platform",
      description:
        "UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management",
      infos: [
        "Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976",
        "Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134",
        "Monthly residual income paid (operated and fully managed by ASE)",
      ],
    },
    {
      img: Project3,
      title: "Phashion Tube",
      description:
        "UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management",
      infos: [
        "Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976",
        "Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134",
        "Monthly residual income paid (operated and fully managed by ASE)",
      ],
    },
    {
      img: Project1,
      title: "BrandEY A.I",
      description:
        "UX design guideline for PhoenEdX, an AI-driven education platform that leverages learning assets and knowledge management",
      infos: [
        "Series A (1 unit = $270K USD) Est. Net income (after payback) $1,258,976",
        "Series B (0.25 unit = $67.5K USD) Est. Net income (after payback) $289,134",
        "Monthly residual income paid (operated and fully managed by ASE)",
      ],
    },
  ];
  return (
    <div className="m-5 lg:m-20">
      <div className="text-center lg:text-start px-5 lg:px-28 pt-20">
        <h1 className="leading-normal" >Ongoing Projects</h1>
        <p className="text-lg lg:text-xl mt-5">
          Discover our ongoing projects incubated by PhoenEX.
        </p>
      </div>
      <div className="mt-14  mx-2">
        <Slider
          {...settings}
        >
          {projects.map((project, i) => {
            return (
              <div key={i}>
                <div key={i} className="bg-cgray mx-2 lg:mx-10 p-7 rounded-3xl text-left">
                  <div className="space-y-2">
                    <div className="flex justify-center mb-10">
                      <Image className="w-full" src={project.img} />
                    </div>
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <p className="text-clightGray">{project.description}</p>
                  </div>
                  <div className="space-y-2 mt-5 text-cwhite">
                    {project.infos.map((info, j) => {
                      return (
                        <div key={info + j} className="flex gap-3">
                          <div className="text-2xl font-bold ">.</div>
                          <p className="leading-loose  text-sm" >{info}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="hidden lg:block space-y-4 mt-5">
                    <div> 
                      <p className="font-semibold  ">
                        <span className="text-cblue">14 days </span>
                        and
                        <span className="text-cblue"> 08:45:30 </span>
                        left for this Round
                      </p>
                    </div>
                    <div className="w-full  bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                      <div className="bg-cblue h-full rounded-full w-[80%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-cblue font-semibold text-lg border-2 rounded-lg px-5  border-cblue py-2.5">Learn more</button>
                      <div>
                        <p className="font-bold text-2xl text-cblue">86%</p>
                        <p className="font-semibold text-clightGray">In Progress</p>
                      </div>
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

export default HomeProjects;
