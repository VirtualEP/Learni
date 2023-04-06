import React from 'react'
import { Link } from 'react-router-dom'

export default function MyCourseCard({ item }) {
    return (
        <Link to={item._id+'/summary'} className="h-full border w-1/4 relative bg-gray-50 flex cursor-pointer">

            <div className="absolute flex flex-col flex-1 -top-1 bg-white  -left-1 w-full h-full relative border border-blue-100">
                <img src={item.cover} className='h-1/2 w-full' />
                <div className='flex flex-col h-full bg-opacity-10  flex-1'>
                    <div className='border-b py-3 px-3 space-y-1 flex-1'>
                        <h3 className='font-bold text-gray-900'>{item.name}</h3>
                        <p className='text-sm font-light text-blue-400 '>{item.lessons.length} Lessons</p>
                    </div>
                    <div className='flex items-center justify-between p-3 text-slate-500 text-sm'>
                        <p>Price</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            </div>
            
        </Link>
    )
}
