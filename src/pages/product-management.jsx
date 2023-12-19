import Wave from "@/components/Common/Wave"
import WorkshopManagementHero from "@/components/WorkshopManagement/WorkshopManagementHero"
import WorkshopManagementNotes from "@/components/WorkshopManagement/WorkshopManagementNotes"
import WorkshopManagementPortfolio from "@/components/WorkshopManagement/WorkshopManagementPortfolio"
import WorkshopManagementRoadmap from "@/components/WorkshopManagement/WorkshopManagementRoadmap"
import React from 'react'

const ProductManagement = () => {
  return (
    <div>
      <WorkshopManagementHero />
      <WorkshopManagementPortfolio />
      <WorkshopManagementRoadmap />
      <Wave />
      <WorkshopManagementNotes />
    </div>
  )
}

export default ProductManagement