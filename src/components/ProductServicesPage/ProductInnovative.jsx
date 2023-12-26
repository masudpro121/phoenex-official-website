import React from 'react'
import InnovativeImg from "@/images/product-services/innovative_img.png"
import Image from "next/image"
const ProductInnovative = () => {
  return (
    <div className="m-10 lg:m-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Innovative Products</h2>
        <p className="text-clightGray mt-5">Crafting Excellence: Discover the Next Level in Innovation with Our Products</p>
      </div>
      <div className="bg-cgray grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-7 rounded-xl my-10 text-center">
        <div className="bg-cblue py-3 rounded-2xl font-semibold">Edtech Solutions</div>
        <div className="bg-cdark py-3 rounded-2xl">Fintech Solutions</div>
        <div className="bg-cdark py-3 rounded-2xl">Martech Solutions</div>
        <div className="bg-cdark py-3 rounded-2xl">GreenTech</div>
        <div className="bg-cdark py-3 rounded-2xl">Global Impact Initiatives</div>
        <div className="bg-cdark py-3 rounded-2xl">Immersive Experiences Device</div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row  gap-20 items-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold leading-loose text-center lg:text-start">Empowering Learning and Knowledge Management</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
            <div className="bg-cgray rounded-xl p-4 space-y-2">
              <p className="text-cblue font-semibold text-xl">Language Learning Apps</p>
              <p className="text-clightGray leading-loose">Experience our language learning apps designed to make language acquisition seamless and fun.</p>
            </div>
            <div className="bg-cgray rounded-xl p-4 space-y-2">
              <p className="text-cblue font-semibold text-xl">Knowledge Management Software</p>
              <p className="text-clightGray leading-loose">Organize and optimize your knowledge with our intuitive knowledge management software</p>
            </div>
            <div className="bg-cgray rounded-xl p-4 space-y-2">
              <p className="text-cblue font-semibold text-xl"> Knowledge Transformation</p>
              <p className="text-clightGray leading-loose">Transform information into actionable knowledge with our transformative tools.</p>
            </div>
            <div className="bg-cgray rounded-xl p-4 space-y-2">
              <p className="text-cblue font-semibold text-xl">Financial Literacy Tools</p>
              <p className="text-clightGray leading-loose">Enhance your financial knowledge and literacy with our user-friendly tools.</p>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <Image  src={InnovativeImg} />
        </div>
      </div>
    </div>
  )
}

export default ProductInnovative