import GetInTouch from "@/components/Common/GetInTouch"
import IndPortfolioDetails from "@/components/IndividualPortfolio/IndPortfolioDetails"
import IndPortfolioExplore from "@/components/IndividualPortfolio/IndPortfolioExplore"
import IndPortfolioHero from "@/components/IndividualPortfolio/IndPortfolioHero"
import IndPortfolioUserSay from "@/components/IndividualPortfolio/IndPortfolioUserSay"
import React from 'react'

const IndividualPortfolioPage = () => {
  return (
    <div>
      <IndPortfolioHero />
      <IndPortfolioDetails />
      <IndPortfolioUserSay />
      <IndPortfolioExplore />
      <GetInTouch />
    </div>
  )
}

export default IndividualPortfolioPage