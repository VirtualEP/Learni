import React from 'react'
import CategoryCard from '../card/CategoryCard'
import { FaRegEdit, FaHeadset, FaLaptopCode, FaLaptop, FaPeopleArrows, FaMoneyCheckAlt } from 'react-icons/fa'


function CourseCategories() {
  return (
      <div id="courses" className='w-full lg:h-screen h-full bg-[#FBFBFC]'>
          <div className='max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24'>
              <div>
                  <p className="text-3xl text-gray-600 font-bold inline border-b-4 border-blue-600">Explore courses by category</p>
                  <p className="py-6">Browse top class courses by browsing our category which will be more
                  easy for you.</p>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                  <CategoryCard
                      title="Design & Development"
                      icon={<FaRegEdit />}
                      style="flex justify-center text-5xl text-slate-500"
                      description="250+ courses available"
                  />
                  <CategoryCard
                      title="Marketing & Communication"
                      icon={<FaHeadset />}
                      style="flex justify-center text-5xl text-blue-500"
                      description="300+ courses available"

                  />
                  <CategoryCard
                      title="Digital Marketing"
                      icon={<FaLaptop />}
                      style="flex justify-center text-5xl text-orange-400"
                      description="150+ courses available"

                  />
                  <CategoryCard
                      title="Business & Consulting"
                      icon={<FaPeopleArrows />}
                      style="flex justify-center text-5xl text-red-400"
                      description="170+ courses available"
                  />
                  <CategoryCard
                      title="Finance Management"
                      icon={<FaMoneyCheckAlt />}
                      style="flex justify-center text-5xl text-purple-400"
                      description="300+ courses available"

                  />
                  <CategoryCard
                      title="Software Development"
                      icon={<FaLaptopCode />}
                      style="flex justify-center text-5xl text-green-400"
                      description="50+ courses available"
                  />                  
              </div>              
          </div>    
    </div>
  )
}

export default CourseCategories