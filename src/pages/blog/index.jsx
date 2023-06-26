import React from 'react'
import HeroNavBar from '../landings/HeroNavBar'
import Footer from '../../components/landing/Footer'
import LandFooter from '../landings/Footer'
import BlogCard from '../../components/blog/BlogCard'
import FeaturedCard from '../../components/blog/FeaturedCard'

export default function BlogPage() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="container mx-auto">
                <HeroNavBar />
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center space-y-5 py-10 px-3 md:px-0">
                <p className="font-semibold">The Blog</p>
                <h3 className="text-4xl md:text-6xl font-bold text-center">Writings from our team.</h3>
                <p className="font-semibold text-gray-500 text-center">The latest industry news, interviews, technology, and resources</p>
            </div>
            <div className="container mx-auto flex flex-col space-y-5">
                <FeaturedCard />
                <div className='flex items-center flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 px-3 md:px-0'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className='flex items-center flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 px-3 md:px-0'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className='flex items-center justify-center pt-16'>
                        <button className='bg-gray-200 px-5 py-2 rounded-md'>Show more</button>
                </div>
            </div>
            <div className='h-20'></div>

            <LandFooter />
        </div>
    )
}
