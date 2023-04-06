import React from 'react'
import MentorCard from '../card/MentorCard'

function Mentors() {
  return (
    <div id="home" className='w-full lg:h-full bg-[#EDEEF8]'>
        <div className='max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24'>
            <MentorCard/>

        </div>

    </div>
  )
}

export default Mentors