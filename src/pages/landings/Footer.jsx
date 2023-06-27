import React from 'react'
import { Link } from 'react-router-dom'
import social_ig from './../../assets/social/ig.png'
import social_twitter from './../../assets/social/twiter.png'
import linkedin from './../../assets/social/linkedin.png'
import github from './../../assets/social/github.png'

export default function LandFooter() {
    return (
      <div className="bg-gray-50 min-h-[40vh] flex  border-t px-5">
        <div className="flex-1 flex flex-col md:flex-row container mx-auto py-10 md:space-x-10 space-y-5 md:space-y-0">
          <div className="md:w-1/3 flex flex-col space-y-5 md:border-r">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <h1 className="text-2xl text-black font-bold cursor-pointer">
                Dev<span className="text-blue-600 ">Tray</span>{" "}
              </h1>
              {/* MENU ITEMS */}
            </div>
            <p className="text-sm font-light text-gray-500">
              Quality education accessible online.
            </p>
            <div className="flex items-center space-x-3">
              <Link to="#">
                <img className="h-8 w-8 rounded-full" src={social_ig} />
              </Link>
              <Link to="#">
                <img className="h-8 w-8 rounded-full" src={social_twitter} />
              </Link>
              <Link to="#">
                <img className="h-8 w-8 rounded-full" src={linkedin} />
              </Link>
              <Link to="#">
                <img className="h-8 w-8 rounded-full" src={github} />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:flex-row space-y-5 ">
            <div className="md:w-1/3 flex flex-col space-y-3">
              <h3 className="font-bold text-gray-800">Contact</h3>
              <Link
                to="mailto:support@devtray.net"
                className="hover:border-b-2 hover:w-fit hover:border-blue-600"
              >
                support@devtray.net
              </Link>
              <Link
                to="mailto:developers@devtray.net"
                className="hover:border-b-2 hover:w-fit hover:border-blue-600"
              >
                developers@devtray.net
              </Link>
              <div>
                <Link to="tel:0200872923">020 087 2923</Link>,
                <Link to="tel:0241595499"> 024 149 5499</Link>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col space-y-3">
              <h3 className="font-bold text-gray-800">Quick Links</h3>
              <Link
                to="/dashboard/explore"
                className="hover:border-b-2 hover:w-fit hover:border-blue-600"
              >
                Courses
              </Link>
              <Link
                to="/pricing"
                className="hover:border-b-2 hover:w-fit hover:border-blue-600"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="hover:border-b-2 hover:w-fit hover:border-blue-600"
              >
                Blog
              </Link>
              <Link
                to="/changelog"
                className="hover:border-b-2 hover:w-fit hover:border-blue-600"
              >
                Changelog
              </Link>
            </div>
            <div className="md:w-1/3 flex flex-col space-y-3">
              <h3 className="font-bold text-gray-800">Resources</h3>
              <Link to="tel:support@devtray.net">support@devtray.net</Link>
              <Link to="tel:support@devtray.net">support@devtray.net</Link>
              <Link to="tel:support@devtray.net">support@devtray.net</Link>
              <Link to="tel:support@devtray.net">support@devtray.net</Link>
            </div>
          </div>
        </div>
      </div>
    );
}
