import React from "react";
import { Carousel } from "react-responsive-carousel";
import Project1 from "@/images/home/project_1.png";
import Project2 from "@/images/home/project_2.png";
import Project3 from "@/images/home/project_3.png";

import Image from "next/image";
const HomeProjects = () => {
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
    <div>
      <div className="px-28 pt-20">
        <h1 >Ongoing Projects</h1>
        <p className="text-xl mt-5">
          Discover our ongoing projects incubated by PhoenEX.
        </p>
      </div>
      <div className="mt-14 mx-20">
        <Carousel
          centerMode={true}
          useKeyboardArrows={true}
          centerSlidePercentage={33}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
        >
          {projects.map((project, i) => {
            return (
              <div key={i} className="bg-cgray mx-10 p-7 rounded-3xl text-left">
                <div className="space-y-2">
                  <Image src={project.img} />
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-clightGray">{project.description}</p>
                </div>
                <div className="space-y-2 mt-5 text-cwhite">
                  {project.infos.map((info, j) => {
                    return (
                      <div key={info + j} className="flex gap-3">
                        <div className="text-2xl font-bold ">.</div>
                        <div >{info}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4 mt-5">
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
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeProjects;
