
import Wave from "@/components/Common/Wave"
import ProjectSpecificActivity from "@/components/ProjectSpecificCommunity/ProjectSpecificActivity"
import ProjectSpecificCommunityHero from "@/components/ProjectSpecificCommunity/ProjectSpecificCommunityHero"
import ProjectSpecificNews from "@/components/ProjectSpecificCommunity/ProjectSpecificNews"
import ProjectSpecificRoadmap from "@/components/ProjectSpecificCommunity/ProjectSpecificRoadmap"
import React from 'react'

const ProjectSpecificCommunityPage = () => {
  return (
    <div>
      <ProjectSpecificCommunityHero />
      <ProjectSpecificActivity />
      <Wave />
      <ProjectSpecificNews />
      <ProjectSpecificRoadmap />
    </div>
  )
}

export default ProjectSpecificCommunityPage