import React from "react";
import LocationIcon from "@/images/location.svg";
import CallIcon from "@/images/call.svg";
import EmailIcon from "@/images/email.svg";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div className="flex   w-3/4 m-auto my-20">
      <div className=" w-full space-y-5">
        <h2 className="font-bold text-5xl">Get in Touch for Inquiries and Feedback</h2>
        <p className="text-clightGray">
          Your Questions, Feedback, and Inquiries Matter! Use the Form to Share
          Your<br/> Thoughts, and Our Team Will Get Back to You Promptly. We
          Appreciate Your <br/> Interest in PHOENEX.
        </p>
        <div className="flex gap-2 items-center !mt-12">
          <div>
            <Image className="w-7" src={LocationIcon} />
          </div>
          <p>New civil lines street#17 house NO # 7 </p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <div>
              <Image className="w-7" src={CallIcon} />
            </div>
            <p>+92 309 80622 42</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Image className="w-7" src={EmailIcon} />
            </div>
            <p>kashanbhatti00004@gmail.com</p>
          </div>
        </div>
      </div>

      <div className=" space-y-3">
        <div>
          <label htmlFor="">Full Name</label> <br/>
          <input className="bg-cgray  mt-1 w-80 px-3 py-1 rounded-md" type="text" placeholder="Enter your name here" />
        </div>
        <div>
          <label htmlFor="">Email</label> <br/>
          <input className="bg-cgray  mt-1 w-80 px-3 py-1 rounded-md" type="text" placeholder="Enter your email here" />
        </div>
        <div>
          <label htmlFor="">Subject</label> <br/>
          <input className="bg-cgray  mt-1 w-80 px-3 py-1 rounded-md" type="text" placeholder="Enter topic here" />
        </div>
        <div>
          <label htmlFor="">Your message</label> <br/>
          <textarea className="bg-cgray  mt-1 w-80 h-20 px-3 py-1 rounded-md" type="text" placeholder="Type here........" />
        </div>
        <button className="blue-btn">Send Message</button>
      </div>
    </div>
  );
};

export default GetInTouch;
