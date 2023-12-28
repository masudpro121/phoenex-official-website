import React from "react";
import Director1 from "@/images/community-overview/director_1.png";
import Director2 from "@/images/community-overview/director_2.png";
import Director3 from "@/images/community-overview/director_3.png";
import Director4 from "@/images/community-overview/director_4.png";
import Director5 from "@/images/community-overview/director_5.png";
import Director6 from "@/images/community-overview/director_6.png";
import Director7 from "@/images/community-overview/director_7.png";
import Director8 from "@/images/community-overview/director_8.png";
import Image from "next/image";
const CommunityDirectories = () => {
  const directors = [
    {
      img: Director1,
      title: 'Innovation Hub',
      description: 'Connect with pioneers in tech innovation. Discuss ideas, share insights, and be part of shaping the future.',
      position: 'Manager',
      name: 'Sarah Johnson',
      since: '15 September, 2021',
      link: ''
    },
    {
      img: Director2,
      title: 'Sustainable Living',
      description: 'Connect with eco-conscious individuals and contribute to sustainable living initiatives.',
      position: 'Manager',
      name: 'Alex Rodriguez',
      since: '20 January, 2021',
      link: ''
    },
    {
      img: Director3,
      title: 'HealthTech Enthusiasts',
      description: 'Discuss the latest in health technology, share insights, and contribute to cutting-edge developments.',
      position: 'Manager',
      name: 'Emily Thompson',
      since: '21 August, 2020',
      link: ''
    },
    {
      img: Director4,
      title: 'Future of Finance',
      description: 'Explore the future of finance with experts in fintech and financial innovation.',
      position: 'Manager',
      name: 'Daniel Chen',
      since: '26 November, 2019',
      link: ''
    }, 
    {
      img: Director5,
      title: 'Digital Creatives Collective',
      description: 'Join a vibrant community of digital creatives. Collaborate on projects and stay updated on the latest trends.',
      position: 'Manager',
      name: 'Olivia Davis',
      since: '15 September, 2021',
      link: ''
    },
    {
      img: Director6,
      title: 'Smart City Innovators',
      description: 'Shape the future of urban living. Discuss smart city initiatives, innovations, and urban development.',
      position: 'Manager',
      name: 'Michael Lee',
      since: '20 January, 2021',
      link: ''
    },
    {
      img: Director7,
      title: 'EduTech Explorers',
      description: 'Dive into the world of educational technology. Share insights, explore innovations, and collaborate.',
      position: 'Manager',
      name: 'Sophia Martinez',
      since: '21 August, 2020 ',
      link: ''
    },
    {
      img: Director1,
      title: 'AI Enthusiasts Network',
      description: 'Connect with fellow AI enthusiasts. Discuss AI trends, share resources, and collaborate on AI projects.',
      position: 'Manager',
      name: 'Ethan Taylor',
      since: '26 November, 2019',
      link: ''
    },
  ];
  return (
    <div className="m-5 lg:m-20 py-20">
      <div className="flex flex-col lg:flex-row  items-center gap-20">
        <div className="w-full text-center lg:text-start">
          <h1>Community Directories</h1>
        </div>
        <div className="w-1/2 flex items-center gap-3">
          <input className="bg-cgray py-3 px-5 rounded-lg text-sm w-full" type="text" placeholder="Search Here.." />
          <button className="blue-btn">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-5 mt-20">
        {directors.map((director, i) => {
          return (
            <div className="rounded-xl text-center relative  bg-cgray flex flex-col gap-5">
              <div className="p-5">
                <Image className="w-full" src={director.img} />
              </div>
              <div className="flex flex-col pb-20">
                <div className="p-2">
                  <div >
                    <p className=" text-2xl font-semibold">{director.title}</p>
                    <p className="mt-4  text-clightGray leading-loose">{director.description}</p>
                  </div>
                  <div className="mt-7">
                    <p className="font-semibold">{director.position}</p>
                    <p className="text-cblue text-lg mt-2">{director.name}</p>
                  </div>
                  <div className="mt-5">
                    <p className="font-semibold">Community since</p>
                    <p className="text-cblue text-lg mt-2">{director.since}</p>
                  </div>
                </div>
                <div className="absolute bottom-5 w-[90%] left-0 right-0 m-auto">
                 <button className=" w-full  blue-btn mt-10 ">Join Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityDirectories;
