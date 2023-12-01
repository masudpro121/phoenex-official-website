import React from "react";
import { Carousel } from "react-responsive-carousel";
import Project1 from "@/images/home/project_1.png";
import LocationImg from "@/images/home/fund_location.svg";

import Image from "next/image";
const HomeFundraising = () => {
  const projects = [
    {
      img: Project1,
      title: "Optimum Health Using AI",
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
      title: "Optimum Health Using AI",
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
      title: "Optimum Health Using AI",
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
      title: "Optimum Health Using AI",
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
        <h1 >Fundraising Opportunities</h1>
        <p className="text-xl mt-5">
          Explore investment opportunities with PhoenEX.
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
                <div className="space-y-2 mt-5 text-clightGray">
                  {project.infos.map((info, j) => {
                    return (
                      <div key={info + j} className="flex gap-3">
                        <div className="text-2xl font-bold ">.</div>
                        <div>{info}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-5">
                  <div className="space-y-1">
                    <p>Min per Investor</p>
                    <h2 className="text-4xl font-bold">$9.5M</h2>
                  </div>
                  <div className="space-y-1">
                    <p>Total Required</p>
                    <h2 className="text-4xl font-bold">$20M</h2>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <div>
                      <button className="text-cblue font-semibold text-lg border-2 rounded-lg px-5   border-cblue py-2.5">Learn more</button>
                    </div>
                    <div className="flex items-center gap-1">
                      <div><Image className="" src={LocationImg} /></div>
                      <p className="font-semibold w-full  text-cblue">Victoria, Australia</p>
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

export default HomeFundraising;
