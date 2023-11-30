import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "@/components/Layout"
import HomeHero from "@/components/Homepage/HomeHero"
import HomeProjects from "@/components/Homepage/HomeProjects"
import HomeExplore from "@/components/Homepage/HomeExplore"
import Wave from "@/components/Common/Wave"
import HomeEdu from "@/components/Homepage/HomeEdu"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <HomeHero />
        <HomeProjects />
        <HomeExplore />
        <Wave />
        <HomeEdu />
      </div>
  )
}
