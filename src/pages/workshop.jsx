import Wave from "@/components/Common/Wave"
import WorkshopHero from "@/components/Workshop/WorkshopHero"
import WorkshopPast from "@/components/Workshop/WorkshopPast"
import WorkshopTechNexus from "@/components/Workshop/WorkshopTechNexus"
import WorkshopUpcoming from "@/components/Workshop/WorkshopUpcoming"
import React from 'react'

const Workshop = () => {
  return (
    <div>
      <WorkshopHero /> 
      <WorkshopTechNexus />
      <WorkshopUpcoming />
      <Wave />
      <WorkshopPast />
    </div>
  )
}

export default Workshop