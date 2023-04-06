import React, { useState } from 'react'
import ExploreCard from './ExploreCard'
import ExploreInfo from './ExploreInfo'

const OPEN_COURSES = [
    {
        title: 'Morden Art and Ideas',
        cover: 'https://images.unsplash.com/photo-1537884557178-342a575d7d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        author: 'Kwame K. Adu Willson',
        lessons: 11,
        subscribers: 20,
        rating: 4.5,
        live: true

    },
    {
        title: 'Introduction to programing',
        cover: 'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
        author: 'Issac Addo',
        lessons: 11,
        subscribers: 20,
        rating: 4.5,
        live: false

    },
    {
        title: `Newton's Law of Motion`,
        cover: 'https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        author: 'Tracy Sarah',
        lessons: 11,
        subscribers: 20,
        rating: 4.5,
        live: false

    },
    {
        title: 'Mobile App Development with React Native',
        cover: 'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6220b67ed815d28806335429_how-to-develop-app.jpg',
        author: 'Sebastin Sobo',
        lessons: 11,
        subscribers: 20,
        rating: 4.5,
        live: true,

    },
    {
        title: 'digital-marketing-campaign',
        cover: 'https://media.sproutsocial.com/uploads/2021/01/12-Social-Media-Marketing-Strategy-1.jpg',
        author: 'Micheal Ntow',
        lessons: 11,
        subscribers: 20,
        rating: 4.5,
        live: false

    },
    {
        title: 'Beginner’s Guide to App Development',
        cover: 'https://buildfire.com/wp-content/uploads/2017/10/become-mobile-app-developer.jpg',
        author: 'Samira Khadija',
        lessons: 11,
        subscribers: 20,
        rating: 4.5,
        live: true,

    }
]


export default function Explore() {

    const [selectedCourse, setSelectedCourse] = useState()

    return (
        <div className="flex-1 flex border-t -mx-5  -mb-5 overflow-hidden">
            <div className="w-1/2 border-r bg-white-50 flex flex-col space-y-8 border-gray-100 px-5">
                <h1 className="text-2xl pt-5 font-bold">Explore Courses</h1>
                <div className="flex items-center space-x-4 overflow-hidden overflow-x-auto">
                    <button className="bg-gray-100 text-gray-600 px-5 py-1 rounded">#Code</button>
                    <button className="bg-gray-100 text-gray-600 px-5 py-1 rounded">#Code</button>
                    <button className="bg-gray-100 text-gray-600 px-5 py-1 rounded">#Code</button>
                    <button className="bg-gray-100 text-gray-600 px-5 py-1 rounded">#Code</button>
                    <button className="bg-gray-100 text-gray-600 px-5 py-1 rounded">#Code</button>
                </div>
                <div className="flex-1 overflow-hidden space-y-8 overflow-y-auto h-full">
                    {OPEN_COURSES.map((d, i) => <ExploreCard onClick={()=>setSelectedCourse(d)} data={d} key={'explore-' + i} />)}
                </div>
            </div>
            <div className="w-1/2 flex flex-col">
                {selectedCourse ? <ExploreInfo data={selectedCourse} /> :
                    <div className="flex flex-1 items-center flex-col justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 text-gray-200 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <h3 className="text-xl text-gray-600">Nothing Selected</h3>
                        <p className="text-sm font-thin text-gray-400">Select a course to show more information.</p>
                    </div>}
            </div>
        </div>
    )
}


