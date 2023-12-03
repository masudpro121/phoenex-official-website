import React from "react";
import WaveImg from "@/images/product-services/ready_wave.png";
import Image from "next/image";
const ProductElavate = () => {
  return (
    <div>
      <div className="m-20 bg-cgray  rounded-xl">
        <div className="flex items-center">
          <div className="w-full space-y-10 flex-grow-1 p-10">
            <h2 className="text-5xl font-bold">Ready to Elevate Your <br/> Experience?</h2>
            <p className="text-clightGray text-xl">
            Let's Connect! Reach out to us today for more information,<br/> collaboration opportunities, and to embark on a journey of innovation <br/> and excellence together. Your next success story starts with a simple click.
            </p>
            <button className="blue-btn">Get In touch!</button>
          </div>
          <div className="w-[80%]">
            <Image src={WaveImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElavate;
