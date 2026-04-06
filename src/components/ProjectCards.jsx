import React from 'react'

function ProjectCards({project}) {
  return (
    <div className='bg-black font-brunoAce rounded-xl flex flex-col'>
        <img src={project.image} alt={project.title} className='rounded-3xl p-[2%]'/>
        <div className='px-[3%] pb-[8%]'>
            <h2 className='text-white'>{project.title}</h2>
            <p className='text-white'>{project.description}</p>
            <a href={project.link} target='_blank' rel='noreferrer' className='text-white'>View projects</a>
        </div>
    </div>
  )
}

export default ProjectCards