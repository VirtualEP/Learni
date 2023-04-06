import React, { useState } from 'react'
import MyCourseCard from './MyCourseCard'

const APPLIED_COURSES = [
    {
        _id: "830984394",
        name: 'Chemistry 102',
        cover: 'https://images.unsplash.com/photo-1655720855348-a5eeeddd1bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        _id: "3289736223",
        name: 'Calculus II',
        cover: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        _id: "390902387",
        name: 'Physics II',
        cover: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        _id: "43934782230",
        name: 'Robotics',
        cover: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
]


export default function CoursesList() {
    
    const [courses, setCourses] = useState(APPLIED_COURSES)

    return (
        <div className="flex-1">
            <div className=" my-10">
                <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            </div>
            <div className="h-1/3 flex space-x-5">
                {courses.map((item, index) => <MyCourseCard item={item} key={index} />)}
            </div>
        </div>
    )
}
