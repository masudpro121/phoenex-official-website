import Wave from "@/components/Common/Wave"
import IncubationHero from "@/components/IncubationProgram/IncubationHero"
import IncubationProgress from "@/components/IncubationProgram/IncubationProgress"
import IncubationStep from "@/components/IncubationProgram/IncubationStep"
import IncubationSuccess from "@/components/IncubationProgram/IncubationSuccess"
import IncubationTestimonials from "@/components/IncubationProgram/IncubationTestimonials"
import React from 'react'
const IncubationProgram = () => {
  return (
    <div>
      <IncubationHero />
      <IncubationProgress />
      <Wave  />
      <IncubationStep />
      <IncubationSuccess />
      <IncubationTestimonials />
    </div>
  )
}

export default IncubationProgram