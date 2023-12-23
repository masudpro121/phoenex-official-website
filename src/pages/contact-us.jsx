import GetInTouch from "@/components/Common/GetInTouch"
import ContactHero from "@/components/ContactUs/ContactHero"
import ContactLocation from "@/components/ContactUs/ContactLocation"
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <ContactHero />
      <GetInTouch />
      <ContactLocation />
    </div>
  )
}

export default ContactUs