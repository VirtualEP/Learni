import React from 'react'

export default function Topbar() {
  return (
    <div className='flex items-center mb-5'>
          <div className="w-1/3 flex bg-gray-100 items-center rounded-full overflow-hidden space-x-2 px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input placeholder='courses , lessons and videos' className="bg-gray-100 w-full" type="text" />
          </div>
          <div className='flex-1'></div>
          <div className='mr-5'>
            <div className='flex items-center space-x-5 cursor-pointer'>
              <img className='h-10 w-10 rounded-full' src={"https://images.unsplash.com/photo-1543278732-824a807df8bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"} />
              <div>
                <h3 className='font-bold'>Legal Peniel</h3>
                <p className='text-xs text-slate-400'>Learner Account</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>

              </div>
            </div>
          </div>
        </div>
  )
}
