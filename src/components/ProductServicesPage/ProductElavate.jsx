import React from "react";
import WaveImg from "@/images/product-services/ready_wave.png";
import Image from "next/image";
const ProductElavate = () => {
  return (
    <div className="text-center lg:text-start">
      <div className="m-5 lg:m-20 bg-cgray  rounded-xl">
        <div className="flex items-center">
          <div className="w-full space-y-10 flex-grow-1 p-5 lg:p-10">
            <h2 className="text-3xl lg:text-5xl font-bold">Ready to Elevate Your <br/> Experience?</h2>
            <p className="text-clightGray text-lg lg:text-xl leading-loose">
            Let's Connect! Reach out to us today for more information,<br/> collaboration opportunities, and to embark on a journey of innovation <br/> and excellence together. Your next success story starts with a simple click.
            </p>
            <button className="blue-btn">Get In touch!</button>
          </div>
          <div className="hidden lg:block w-[80%]">
            <Image src={WaveImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElavate;
