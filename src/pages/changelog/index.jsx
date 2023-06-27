import React from 'react'
import HeroNavBar from '../landings/HeroNavBar'
import { Link } from 'react-router-dom'
import LandFooter from '../landings/Footer'
import LogInfo from '../../components/changelog/LogInfo'

export default function Changelog() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="container mx-auto border-b">
                <HeroNavBar />
            </div>
            <div className="container flex flex-col md:flex-row mx-auto pt-0">
                <div className="md:w-1/5 flex items-center justify-end pr-10 md:h-[70vh]">
                    <div className="flex md:space-x-0 space-x-3 items-center md:flex-col space-y-3 text-gray-600 font-medium text-sm">
                        <p className="text-gray-400 pt-2 md:py-2">2nd Jan 2023</p>
                        <Link className="text-yellow-600 rounded-full bg-yellow-100 px-3 py-1" to="#">Improvements</Link>
                        <Link className="text-pink-600 rounded-full text-right bg-pink-100 px-3 py-1 w-fit" to="#">Bug fix</Link>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col space-y-4 py-10 px-3 md:px-3 text-center md:text-left">
                        <h3 className="text-4xl font-semibold">What's New</h3>
                        <p className="text-sm text-gray-400">New updates and improvements to DevTray.</p>
                    </div>
                    <div>
                    <LogInfo/>
                    {/* <LogInfo/>
                    <LogInfo/>
                    <LogInfo/> */}
                    </div>
                </div>
            </div>

            <LandFooter/>
        </div>
    )
}
