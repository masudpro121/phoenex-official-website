
import Wave from "@/components/Common/Wave"
import ProjectSpecificActivity from "@/components/ProjectSpecificCommunity/ProjectSpecificActivity"
import ProjectSpecificCommunityHero from "@/components/ProjectSpecificCommunity/ProjectSpecificCommunityHero"
import ProjectSpecificManagement from "@/components/ProjectSpecificCommunity/ProjectSpecificManagement"
import ProjectSpecificNews from "@/components/ProjectSpecificCommunity/ProjectSpecificNews"
import ProjectSpecificRoadmap from "@/components/ProjectSpecificCommunity/ProjectSpecificRoadmap"
import ProjectSpecificSuccessStory from "@/components/ProjectSpecificCommunity/ProjectSpecificSuccessStory"
import ProjectSpecificThoughts from "@/components/ProjectSpecificCommunity/ProjectSpecificThoughts"
import React from 'react'

const ProjectSpecificCommunityPage = () => {
  return (
    <div>
      <ProjectSpecificCommunityHero />
      <ProjectSpecificActivity />
      <Wave />
      <ProjectSpecificNews />
      <ProjectSpecificRoadmap />
      <ProjectSpecificManagement />
      <ProjectSpecificSuccessStory />
      <ProjectSpecificThoughts />
    </div>
  )
}

export default ProjectSpecificCommunityPage