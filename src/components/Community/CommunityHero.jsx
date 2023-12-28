import React from 'react'

const CommunityHero = () => {
  return (
    <div className="community-hero m-5 lg:m-20 bg-cgray rounded-3xl text-center lg:text-start p-10 lg:p-20 min-h-[700px]">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="lg:w-2/3">
          <h1 >Community Overview</h1>
          <p className="text-clightGray leading-[2.6] lg:leading-[2.8] text-lg mt-5">Welcome to the collaborative universe of PhoenEX! Our Community is your gateway to project-specific communities designed to amplify your experience. Joining these communities opens up a world of shared insights, meaningful connections, and endless possibilities for collaboration.</p>
        </div>
        <div>
          <button className="blue-btn">Explore our communities</button>
        </div>
      </div>
    </div>
  )
}

export default CommunityHero