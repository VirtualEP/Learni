import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/Auth'


export default function MyCourseCard({ item }) {

    const { user } = useAuthContext()


    const cardToPointTo = useRef(linkBuilder())

    function linkBuilder() {

        let builderLink = "";

        if (user?.user?.accountType === 'student') {

            builderLink = item._id + '/summary'
        }

        if (user?.user?.accountType === 'instructor') {
            builderLink = item._id + '/lessons'
        }


        return builderLink;
    }

    useEffect(() => {
        linkBuilder()
    }, [user])
    

    return (
        <Link to={cardToPointTo.current} className="h-full border w-1/4 relative bg-gray-50 flex cursor-pointer">

            <div className="absolute flex flex-col flex-1 -top-1 bg-white  -left-1 w-full h-full relative border border-blue-100">
                <img src={item.cover} className='h-1/2 w-full' />
                <div className='flex flex-col h-full bg-opacity-10  flex-1'>
                    <div className='border-b py-3 px-3 space-y-1 flex-1'>
                        <h3 className='font-bold text-gray-900'>{item.title}</h3>
                        <p className='text-sm font-light text-blue-400 '>{item.students.legnth} Students</p>
                    </div>
                    <div className='flex items-center justify-between p-3 text-slate-500 text-sm'>
                        <p>Price</p>
                        <p>GHS {item.price}</p>
                    </div>
                </div>
            </div>

        </Link>
    )
}
