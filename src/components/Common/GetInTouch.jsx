import React from "react";
import LocationIcon from "@/images/location.svg";
import CallIcon from "@/images/call.svg";
import EmailIcon from "@/images/email.svg";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div className="flex flex-col  lg:flex-row gap-20  items-center  py-5 m-5 lg:w-3/4 lg:m-auto my-20">
      <div className=" w-full space-y-5">
        <div className="text-center lg:text-start">
          <p className="font-bold text-3xl lg:text-5xl leading-relaxed">Get in Touch for Inquiries and Feedback</p>
          <p className="text-clightGray leading-loose mt-4">
            Your Questions, Feedback, and Inquiries Matter! Use the Form to Share
            Your<br/> Thoughts, and Our Team Will Get Back to You Promptly. We
            Appreciate Your <br/> Interest in PHOENEX.
          </p>
        </div>
        <div className="flex gap-2 items-center !mt-12">
          <div>
            <Image className="w-5 lg:w-7" src={LocationIcon} />
          </div>
          <p>New civil lines street#17 house NO # 7 </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-3">
          <div className="flex gap-2 items-center">
            <div>
              <Image className="w-5 lg:w-7" src={CallIcon} />
            </div>
            <p>+92 309 80622 42</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Image className="w-5 lg:w-7" src={EmailIcon} />
            </div>
            <p>kashanbhatti00004@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <div className="pt-2 ">
          <label className="ml-1" htmlFor="">Full Name</label> <br/>
          <input className="bg-cgray  mt-1 w-full lg:w-96 px-3 py-2 rounded-md" type="text" placeholder="Enter your name here" />
        </div>
        <div className="pt-2">
          <label className="ml-1" htmlFor="">Email</label> <br/>
          <input className="bg-cgray  mt-1 w-full lg:w-96 px-3 py-2 rounded-md" type="text" placeholder="Enter your email here" />
        </div>
        <div className="pt-2">
          <label className="ml-1" htmlFor="">Subject</label> <br/>
          <input className="bg-cgray  mt-1 w-full lg:w-96 px-3 py-2 rounded-md" type="text" placeholder="Enter topic here" />
        </div>
        <div className="pt-2">
          <label className="ml-1" htmlFor="">Your message</label> <br/>
          <textarea className="bg-cgray  mt-1 w-full lg:w-96 h-20 px-3 py-2 rounded-md" type="text" placeholder="Type here........" />
        </div>
        <button className="blue-btn ">Send Message</button>
      </div>
    </div>
  );
};

export default GetInTouch;
