import React from 'react'
import PopularCoursesCard from '../card/PopularCoursesCard'
import webdev from "./assets/webdev.png"
import motion from "../assets/motion.png"
import cms from "../assets/cms.png"
import design from "../assets/design.png"
import drawing from "../assets/drawing.png"
import videography from "../assets/videography.png"


function PopularCourses() {
  return (
      <div className='w-full lg:h-full bg-[#EDEEF8]'>
          <div className='max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24'>
              <div>
                  <p className="text-3xl text-gray-600 font-bold inline border-b-4 border-blue-600">Popular courses for you</p>
                  <p className="py-6">Get the best course with the best price with world-class tutors</p>
              </div>
              <div className="w-full grid justify-center grid-cols sm:grid-cols-3 gap-4 text-center py-8">
              <PopularCourseCard
                      title="Learn app development in 30 days"
                      tag="Web design"
                      image={webdev}
                  />
                  <PopularCourseCard
                      title="Advance motion graphics"
                      tag="Graphics Design"
                      image={motion}
                  />
                  <PopularCourseCard
                      title="Learn CMS Development"
                      tag="Web design"
                      image={cms}
                  />
                  <PopularCourseCard
                      title="The Complete Web Design Course"
                      tag="Web design"
                      image={design}
                  /> 
                  <PopularCourseCard
                      title="Advance Drawing"
                      tag="Art"
                      image={drawing}
                  /> 
                  <PopularCourseCard
                      title="Advance videography course"
                      tag="Media"
                      image={videography}
                  /> 
              </div>           
          </div>       
    </div>
  )
}

export default PopularCourses