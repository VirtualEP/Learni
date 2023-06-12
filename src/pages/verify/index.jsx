import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API_ROUTES } from '../../hooks/useServerHook';
import cancelImage from './../../assets/cancel.png'
import checkedImage from './../../assets/checked.png'
export default function VerifyPage() {

    const { pubkey } = useParams();

    const [message, setMessage] = useState({ title: 'Verifying Email Address', message: '', loading: false, src: null });

    useEffect(() => {
        setMessage(prev => ({ ...prev, loading: true }))
        axios.get(`${API_ROUTES}/api/auth/verify/${pubkey}`).then(response => {
            console.log(response);
            setMessage(prev => ({ ...prev, title: "Email Address Verified", message: "Your email address has successfully been verifed. you can now login in to continue.",src:checkedImage }))
        }).catch(err => {
            console.log(err);
            setMessage(prev => ({ ...prev, title: err.response.data.error, message: err.response.data.message,src:cancelImage }))
            
        }).finally(() => {
            setMessage(prev => ({ ...prev, loading: false }))
        })
    }, [])



    return (
        <div className="flex items-center bg-white justify-center w-screen">
            <div className="py-10 md:w-1/3 mx-auto  flex flex-col space-y-5 px-4 md:px-0">
                <div className="flex items-center justify-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold cursor-pointer">
                        Dev<span className="text-blue-600 ">Tray</span>{" "}
                    </h1>
                    {/* MENU ITEMS */}
                </div>
                <div className="flex items-center flex-col justify-center pt-6">
                    {!message.loading ? <img src={message.src} className='h-24 w-24' />:
                    <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center capitalize">{message.title}</h1>
                    <p className="text-center text-gray-500 mt-1">{message.message}</p>
                </div>
                    <Link to="/signin" className='text-blue-600 font-medium text-center'>Login in account</Link>
            </div>
        </div>
    )
}
