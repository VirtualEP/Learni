import React from 'react'
import PopularCoursesCard from '../card/PopularCoursesCard'
import { popularCourseData} from '../../data/popularCourseData'



function PopularCourses() {
  return (
      <div className='w-full lg:h-full bg-[#EDEEF8]'>
          <div className='max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24'>
              <div>
                  <p className="text-3xl text-gray-600 font-bold inline border-b-4 border-blue-600">Popular courses for you</p>
                  <p className="py-6">Get the best course with the best price with world-class tutors</p>
              </div>
              <div className="w-full grid justify-center grid-cols sm:grid-cols-3 gap-4 text-center py-8">
                  {popularCourseData.map((course, i)=> (
                    <div key={i}>
                        <PopularCoursesCard title={course.title} image={course.image} tag={course.category}/>
                        </div>
                  ))}
              </div>           
          </div>       
    </div>
  )
}

export default PopularCourses