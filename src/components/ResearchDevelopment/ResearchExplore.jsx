import React from 'react'

const ResearchExplore = () => {
  const researches = [
    {
      title: 'Behavioral Economics Research',
      description: 'Delve into the fascinating realm of Behavioral Economics, where our experts dissect the intricacies of human decision-making. Explore the societal impact, collaborative methodologies, and key findings that shape our understanding of behavioral patterns.',
      link:  'https://google.com'
      
    },
    {
      title: 'Tech-Driven Human Optimization',
      description:  'Witness the intersection of innovation and materials science. Dive into our research on cutting-edge materials, from nanotechnology to sustainable composites. Discover how our team\'s interdisciplinary approach pioneers advancements with a lasting impact.',
      link:  'https://google.com'
      
    },
    {
      title: 'Personalized EdTech Experiences',
      description:  'Discover our commitment to sustainability. Explore research initiatives focused on eco-friendly solutions, renewable energy, and sustainable practices. Join us in creating a harmonious balance between technology and the environment.',
      link:  'https://google.com'
      
    },
    {
      title: 'Tech-Enhanced Educational Impact',
      description:  'Explore the frontier of health and biomedical innovations. From cutting-edge medical technologies to groundbreaking research in life sciences, witness how our team is revolutionizing healthcare for a healthier and more sustainable future.',
      link:  'https://google.com'
      
    },
  ]
  return (
    <div className="m-5 lg:m-20">
      <div className="flex flex-col lg:flex-row  gap-7 text-center lg:text-start items-center">
        <h2 className="text-3xl lg:text-6xl font-bold w-full ">Explore Our Research Themes</h2>
        <p className="w-full text-clightGray leading-8">
          Each thematic block represents a distinct avenue of exploration, showcasing the diversity and depth of our
          groundbreaking research initiatives. Embark on a journey of discovery as we unveil the core themes that drive our 
          quest for knowledge and transformation.
        </p>
      </div> 
      <div className="bg-cgray grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-7 rounded-xl my-10 text-center">
        <div className="bg-cblue py-3 rounded-2xl font-semibold">Edtech Solutions</div>
        <div className="bg-cdark py-3 rounded-2xl">Fintech Solutions</div>
        <div className="bg-cdark py-3 rounded-2xl">Martech Solutions</div>
        <div className="bg-cdark py-3 rounded-2xl">GreenTech</div>
        <div className="bg-cdark py-3 rounded-2xl">Global Impact Initiatives</div>
        <div className="bg-cdark py-3 rounded-2xl">Immersive Experiences Device</div>
      </div> 

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {
          researches.map((research, i)=>{
            return(
              <div className="bg-cgray p-10 rounded-xl ">
                <h2 className="text-2xl ">{research.title}</h2>
                <p className="text-clightGray mt-4">{research.description}</p>
                <button className="blue-btn mt-8">Learn More</button>
              </div>
            )
          })
        }
      </div>    
    </div>
  )
}

export default ResearchExplore