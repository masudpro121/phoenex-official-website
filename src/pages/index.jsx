import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "@/components/Layout"
import HomeHero from "@/components/Homepage/HomeHero"
import HomeProjects from "@/components/Homepage/HomeProjects"
import HomeExplore from "@/components/Homepage/HomeExplore"
import Wave from "@/components/Common/Wave"
import HomeEdu from "@/components/Homepage/HomeEdu"
import HomeFundraising from "@/components/Homepage/HomeFundraising"
import HomeExplore2 from "@/components/Homepage/HomeExplore2"
import HomeSay from "@/components/Homepage/HomeSay"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <HomeHero />
        <HomeProjects />
        <HomeExplore />
        <Wave />
        <HomeEdu />
        <HomeFundraising />
        <HomeExplore2 />
        <HomeSay />
      </div>
  )
}
