import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/Auth'
import { API_ROUTES } from '../../hooks/useServerHook'
import numToCurrency from '../../utils/numToCurrency'


export default function MyCourseCard({ item }) {

    const { user } = useAuthContext()
    const navigate = useNavigate()
    
    const cardToPointTo = useRef(linkBuilder())

    function linkBuilder() {

        let builderLink = "";

        if (user?.user?.accountType === 'learner') {

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
        <button onClick={()=>navigate(cardToPointTo.current,{state:{...item}})} className="h-full border flex-1 relative bg-gray-50 flex cursor-pointer">

            <div className="absolute flex flex-col flex-1 -top-1 bg-white  -left-1 w-full h-full relative border border-blue-100">
                <img src={API_ROUTES+'/'+item.cover} onError={e=>e.target.src='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'} className='h-[150px] w-full' />
                <div className='flex flex-col h-full bg-opacity-10  flex-1'>
                    <div className='border-b py-3 px-3 space-y-1 flex-1'>
                        <h3 className='font-bold text-gray-900'>{item.title}</h3>
                        <p className='text-sm font-light text-blue-400 '>{item.students.length} Enrollment{item.students.length > 1 ? 's':''}</p>
                    </div>
                    <div className='flex items-center justify-between p-3 text-slate-500 text-sm'>
                        <p>Price</p>
                        <p>{numToCurrency.format(item.price)}</p>
                    </div>
                </div>
            </div>

        </button>
    )
}
