import React from 'react'
import Banner from '../../components/landing/Banner'
import CourseCategories from '../../components/landing/CourseCategories'
import Footer from '../../components/landing/Footer'
import Mentors from '../../components/landing/Mentors'
import Navbar from '../../components/landing/Navbar'
import PopularCourses from '../../components/landing/PopularCourses'
import SubBanner from '../../components/landing/SubBanner'

function Landing() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        {/* <SubBanner/> */}
        <CourseCategories/>
        <PopularCourses/>
        <Mentors/>
        <Footer/>
    </div>
  )
}

export default Landing