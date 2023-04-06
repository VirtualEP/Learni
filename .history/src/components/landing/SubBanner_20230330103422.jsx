import React from 'react'

function SubBanner() {
  return (
      <div>
          <div className='w-full my-32 hover:animate-pulse'>
              <div className='max-w-[1240px] mx-auto'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Access Quality Education!</h2>
                      <p className='text-3xl py-6 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                      <div className='border py-8 rounded-xl shadow-xl'>
                          <p className='text-6xl font-bold text-blue-600'>10k</p>
                          <p className='text-gray-400 mt-2'>Total courses</p>
                      </div>
                      <div className='border py-8 rounded-xl shadow-xl'>
                          <p className='text-6xl font-bold text-blue-600'>500+</p>
                          <p className='text-gray-400 mt-2'>Mentors</p>
                      </div>
                      <div className='border py-8 rounded-xl shadow-xl'>
                          <p className='text-6xl font-bold text-blue-600'>300k+</p>
                          <p className='text-gray-400 mt-2'>Student's globally</p>
                      </div>
                  </div>
              </div>

          </div>
    </div>
  )
}

export default SubBanner