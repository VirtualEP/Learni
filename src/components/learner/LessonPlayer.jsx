import React from 'react'
import { motion } from 'framer-motion'

export default function LessonPlayer({ data, onClose }) {

    console.log(data);
    return (
        <motion.div animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} exit={{ translateY: 10, opacity: 0 }} className={`flex absolute top-0 left-0 w-screen h-screen bg-white flex-col flex-1`}>
            <div className="flex-1 flex">
                <div className="flex-1 flex items-center justify-center">
                    <iframe className='w-full' height="500" src="https://www.youtube-nocookie.com/embed/6DaJVZBXETE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="w-1/3 border-l p-5 flex-col space-y-3">
                    <h1 className='font-medium text-gray-900 text-xl'>Lesson Note</h1>
                    <div className='flex flex-col space-y-5'>
                        <h2 className="text-4xl font-bold">{data.title}</h2>
                        <p className='text-gray-600 font-normal leading-relaxed'>
                            Binary search is a more specialized algorithm than sequential search as it takes advantage of data that has been sorted. The underlying idea of binary search is to divide the sorted data into two halves and to examine the data at the point of the split. Since the data is sorted, we can easily ignore one half or the other depending on where the data we're looking for lies in comparison to the data at the split. This makes for a much more efficient search than linear search.
                        </p>

                        <p className='text-gray-600 font-normal leading-relaxed'>Binary search is used on sorted arrays, but we see it more often when used with binary search trees (see the trees SparkNote for more information). Whereas linear search allows us to look for data in O(n) time, where n is the number of elements being searched, binary search allows us to do the same search in O(logn) time, a dramatic speed enhancement.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center space-x-5 bg-white border-t">
                <button onClick={onClose} className=' bg-red-600 px-10 my-10 py-3 flex rounded-full text-white space-x-2'>
                    <span>Close Lesson</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className=' bg-blue-600 px-10 my-10 py-3 flex rounded-full text-white space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>

                    <span>Next Lesson</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>

                </button>
            </div>
        </motion.div>
    )
}
