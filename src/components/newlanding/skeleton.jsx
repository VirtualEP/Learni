import React from 'react'

export default function SkeletonLui() {
    return (
        <div className='w-[250px] flex flex-col space-y-3'>
            <div className='w-[250px] bg-gray-200  h-40 rounded-lg overflow-hidden animate animate-pulse' />

            <div className='bg-gray-300 h-3 rounded-xl animated animate-pulse' />
            <div className='bg-gray-300 w-2/3 h-3 rounded-xl animated animate-pulse' />
            <div className='flex flex-row items-center space-x-2'>
                <div className='h-8 w-8 rounded-full bg-gray-300 animate-pulse relative' />

                <div className='bg-gray-300 w-1/3 h-3 rounded-xl animated animate-pulse' />

                <div className='flex-1'></div>
                <div className='bg-gray-300 w-1/3 h-3 rounded-xl animated animate-pulse' />
            </div>
        </div>
    )
}
