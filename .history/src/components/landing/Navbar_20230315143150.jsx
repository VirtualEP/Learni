import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, } from "react-icons/ai"


function Navbar() {


    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("#ecf0f3")
    const [Color, setColor] = useState("#1f2937")



    const handleOpen = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])


    return (
        <div className={shadow ? 'w-full h-[80px] z-10 bg-white fixed drop-shadow-lg' : 'w-full h-[80px] z-10 bg-white fixed'}
            style={{ backgroundColor: `${navBg}` }}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div className='flex items-center'>
                <h1 className="text-2xl font-bold capitalize">Lear<span className="text-blue-600 lowercase">ni</span></h1>
                    {/* MENU ITEMS */}
                    <div className='hidden md:flex'>
                        <ul style={{ color: `${Color}` }} className='hidden md:flex'>
                            <a href="/#home">
                                <li className='ml-10 text-md  border-b-2 hover:border-blue-600'>Home</li>
                            </a>
                            <a href="/#courses">
                                <li className='ml-10 text-md  hover:border-b-2 hover:border-blue-600'>Courses</li>
                            </a>
                            <a href="/#mentors">
                                <li className='ml-10 text-md  hover:border-b-2 hover:border-blue-600'>Mentors</li>
                            </a>
                            <a href="/#about">
                                <li className='ml-10 text-md  hover:border-b-2 hover:border-blue-600'>About</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex pr-4">
                    <a href='/signin'>
                        <button className='ml-10 px-4 py-2 text-white border bg-blue-600 border-blue-600 rounded-md'>Sign In</button>
                    </a>
                    <a href='/signup-options'>
                    <button className='ml-10 px-4 py-2 text-white border bg-blue-600 border-blue-600 rounded-md'
                    >Sign Up</button>
                    </a>
                </div>
                {/*END OF MENU ITEMS */}

                <div onClick={handleOpen} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            {/* MOBILE MENU */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h1 className='cursor-pointer font-fancy'>Virtual Ed.</h1>
                            <div onClick={handleOpen} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-blue-600 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Premium Online Education</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className='uppercase'>
                            <a href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </a>
                            <a href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Courses
                                </li>
                            </a>
                            <a href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Mentors
                                </li>
                            </a>
                            <a href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </a>
                            <button className='text-lg  hover:border-b-2 hover:border-blue-600 text-blue-600'>Sign In</button>
                            <button className='ml-10 px-4 py-2 text-white border bg-blue-600 border-blue-600 rounded-md'
                            >Sign Up</button>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar