import React from 'react'

function CategoryCard({ icon, title, style, description }) {
    return (
        <div className="shadow-md bg-white rounded-xl cursor-pointer shadow-[#93afea] hover:scale-110 ease-in duration-300">
            <div className="w-20 mx-auto pt-2" >
                <span className={style}>{icon}</span>
            </div>
            <p className="my-6">{title}</p>
            <p className='my-6 text-sm text-gray-400'>{description}</p>
        </div>
    )
}

export default CategoryCard