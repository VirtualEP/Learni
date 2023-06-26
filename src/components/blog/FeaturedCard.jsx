import React from 'react'

export default function FeaturedCard() {
    return (
        <div className="h-[450px] flex flex-col bg-gray-400 bg-center bg-no-repeat bg-blend-multiply bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1687579521259-f60b7e435178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}>
            <div className="flex-1"></div>
            <div className='px-10 py-5 flex flex-col space-y-2 text-white text-sm'>
                <p><span>Tim Micheal</span> <span>20 Jan 2023</span></p>
                <h3 className='font-semibold text-2xl capitalize'>UX review presentaion</h3>
                <p className='font-semibold text-gray-100'>How do you create compelling presentaions that vow your colleagues your managers?</p>
                <div className='flex text-sm space-x-4 font-medium text-gray-100'>
                    <div className='border rounded-full px-3 '>design</div>
                    <div className='border rounded-full px-3 '>design</div>
                    <div className='border rounded-full px-3 '>design</div>
                </div>
            </div>
        </div>
    )
}
