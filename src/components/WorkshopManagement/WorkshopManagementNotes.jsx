import React from 'react'

const WorkshopManagementNotes = () => {
  const notes = [
    {
      title: 'PhoenixConnect Pro - Version 2.0',
      description: 'Introducing new features for enhanced collaboration and communication. Experience a more intuitive and efficient platform.'
    },
    {
      title: 'EcoTech Solutions Suite - Update',
      description: 'Optimizations for increased efficiency and expanded capabilities to further support sustainable practices.'
    },
    {
      title: 'InnoAnalytics Pro - Patch Release',
      description: 'Bug fixes and performance enhancements for a smoother analytical workflow.'
    },
  ]
  return (
    <div className="m-20 bg-cgray p-10 rounded-xl">
      <div className="flex items-center gap-20">
        <h2 className="text-5xl font-bold">Release Notes</h2>
        <p className="text-clightGray">Stay informed about the latest updates, improvements, and releases for existing products.</p>
      </div>
      <div className="bg-cdark rounded-2xl flex justify-between mt-5">
        <div className="w-full text-center bg-cblue rounded-2xl m-2 p-3">
          <p className="text-xl font-semibold ">Release notes</p>
        </div>
        <div className="w-full text-center">
          <p className="text-xl m-2 p-3">Updates</p>
        </div>
        <div className="w-full text-center">
          <p className="text-xl m-2 p-3">Improvements</p>
        </div>
      </div>

      <div>
        {
          notes.map((note, i)=>{
            return(
              <div className="mt-10" key={i}>
                <p className="text-xl font-semibold">{note.title}</p>
                <p className="text-clightGray text-lg mt-3">{note.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WorkshopManagementNotes