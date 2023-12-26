import Wave from "@/components/Common/Wave"
import ProductElavate from "@/components/ProductServicesPage/ProductElavate"
import ProductHero from "@/components/ProductServicesPage/ProductHero"
import ProductInnovative from "@/components/ProductServicesPage/ProductInnovative"
import ProductServices from "@/components/ProductServicesPage/ProductServices"
import React from 'react'

const ProductServicesPage = () => {
  return (
    <div>
      <ProductHero />
      <ProductInnovative />
      <Wave />
      <ProductServices />
      <ProductElavate /> 
    </div>
  )
}

export default ProductServicesPage