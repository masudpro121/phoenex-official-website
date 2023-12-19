import React from 'react'

const CommunityHero = () => {
  return (
    <div className="community-hero m-20 bg-cgray rounded-3xl p-20 h-[700px]">
      <div className="flex justify-between ">
        <div className="w-2/3">
          <h1 >Community Overview</h1>
          <p className="text-clightGray leading-[2.8] text-lg mt-5">Welcome to the collaborative universe of PhoenEX! Our Community is your gateway to project-specific communities designed to amplify your experience. Joining these communities opens up a world of shared insights, meaningful connections, and endless possibilities for collaboration.</p>
        </div>
        <div>
          <button className="blue-btn">Explore our communities</button>
        </div>
      </div>
    </div>
  )
}

export default CommunityHero