import React from 'react'

export default function BlogCard() {
    return (
        <div className='md:w-1/3 flex flex-col space-y-3'>
            <div className='bg-gray-100  h-[300px]'>

            </div>
            <div>
                <div className='flex flex-col space-y-3 text-black text-sm'>
                    <p><span>Tim Micheal</span> <span>20 Jan 2023</span></p>
                    <h3 className='font-semibold text-2xl capitalize'>UX review presentaion</h3>
                    <p className='font-semibold text-gray-600'>How do you create compelling presentaions that vow your colleagues your managers?</p>
                    <div className='flex text-xs space-x-2 font-medium text-gray-700'>
                        <div className='border rounded-full px-3 '>design</div>
                        <div className='border rounded-full px-3 '>design</div>
                        <div className='border rounded-full px-3 '>design</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
