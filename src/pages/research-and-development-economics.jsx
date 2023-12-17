import GetInTouch from "@/components/Common/GetInTouch"
import ResearchEconomicsHero from "@/components/ResearchAndDevelopmentEconomics/ResearchEconomicsHero"
import ResearchTeamDirector from "@/components/ResearchAndDevelopmentEconomics/ResearchTeamDirector"
import ResearchThesis from "@/components/ResearchAndDevelopmentEconomics/ResearchThesis"
import React, { useState } from 'react'

const ResearchAndDevelopmentEconomics = () => {
  return (
    <div>
      <ResearchEconomicsHero />
      <ResearchThesis />
      <ResearchTeamDirector />
      <div className="pt-10">
      <GetInTouch />
      </div>
    </div>
  )
}

export default ResearchAndDevelopmentEconomics