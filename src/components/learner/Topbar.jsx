import React, { useState } from 'react'
import { useAuthContext } from '../../context/Auth'
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'

export default function Topbar() {
  const { user } = useAuthContext();

  const [profileOptions, setProfileOptions] = useState(false)

  return (
    <div className='flex items-center mb-5 relative'>
      <div className=" flex bg-gray-100 items-center rounded-lg w-2/4 overflow-hidden space-x-2 px-3 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input placeholder='courses , lessons and videos' className="bg-gray-100 w-full" type="text" />
      </div>
      <div className='flex-1'></div>
      <div className='mr-5 shrink-0'>
        <div className='flex items-center space-x-5 cursor-pointer' onClick={() => setProfileOptions(true)}>
          <img className='h-10 w-10 rounded-full' src={"https://images.unsplash.com/photo-1543278732-824a807df8bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"} />
          <div>
            <h3 className='font-bold'>{`${user.user.firstName} ${user.user.lastName}`}</h3>
            <p className='text-xs text-slate-400 capitalize'>{user.user.accountType} Account</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {profileOptions &&
            <motion.div initial={{height:0}} animate={{height:"100vh"}} exit={{height:0}} className="absolute top-0 left-0 w-full h-screen cursor-default" onClick={e=>setProfileOptions(false)}>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='min-h-40 right-5 bg-white shadow-md border absolute w-[220px] top-14 p-3 py-5 flex flex-col space-y-3 text-gray-400 border-gray-100 rounded-md z-10'>
                <Link to="/dashboard/settings/#make-payment" className='flex items-center text-xs hover:font-semibold transition-all hover:transition-all delay-75 hover:text-black space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  <p>Billing Information</p>
                </Link>
                <div className='border-t pt-3 flex flex-col space-y-3 border-gray-100  '>
                  <Link to="/dashboard/support" className='flex items-center text-xs hover:font-semibold transition-all hover:transition-all delay-75 hover:text-black space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>

                    <p>Support</p>
                  </Link>
                  <button onClick={e=>localStorage.clear()} to="" className='flex items-center text-xs space-x-3 hover:font-semibold transition-all hover:transition-all delay-75 hover:text-red-500 capitalize'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>

                    <p>logout</p>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}
