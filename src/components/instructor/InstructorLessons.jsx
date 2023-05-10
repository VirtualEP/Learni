import React, { useState } from 'react'
import MediaList from './MediaList'
import UploadMedia from './UploadMedia'

export default function instructorLessons() {
    const [showAddMedia, setShowAddMedia] = useState(false)
    return (
        <div className='flex-1 flex flex-col space-y-2  h-full relative'>
            <div className="flex items-center space-x-5">
                <button onClick={e => setShowAddMedia(true)} className='flex items-center space-x-2 bg-blue-100 text-blue-700 border border-gray-100 py-3 px-5  font-medium rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>

                    <p>Add Media</p>

                </button>

                <button onClick={e => null} className='flex items-center space-x-2 bg-gray-100 border border-gray-100 py-3 px-3 text-gray-500 font-medium rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>


                    <p>Create Questions</p>
                </button>

                <button onClick={e => null} className='flex items-center space-x-2 bg-gray-100 border border-gray-100 py-3 px-3 text-gray-500 font-medium rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>


                    <p>Broadcast live</p>
                </button>
            </div>
            <div className=''>
                <h3 className='text-xl pt-10'>Course media</h3>
            </div>
            <div>
                <MediaList />
            </div>
            {showAddMedia && <div className='bg-white absolute -top-20 right-0 w-full h-[113%] flex'>
               <UploadMedia onClose={e=>setShowAddMedia(false)} />
            </div>}
        </div>
    )
}
