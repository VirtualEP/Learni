import React, { useRef, useState, useEffect } from 'react'
import googleLogo from './../../assets/google-logo.png'
import { SUPPORTED_COUNTRIES } from '../../data';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { SignupOptions } from '../../components';
import { useAuthContext } from '../../context/Auth';
import { VITE_CLIENT_ID } from '../../App';
import LoadingIcon from '../../components/LoadingIcon';

export const AccountTypes = {
    instructor: 'instructor',
    student: 'student',
}

export default function Signup() {
    const [showCountryList, setShowCountryList] = useState(false)

    const [country, setCountry] = useState({ name: '', flag: '?' })

    const [AccountType, setAccountType] = useState('')

    const countryInput = useRef()

    const { register, loading } = useAuthContext()

    const onSignUpWithForm = (e) => {
        e.preventDefault();
        register({ email: e.target[3].value, password: e.target[4].value, firstName: e.target[0].value, lastName: e.target[1].value, country: e.target[2].value, type: AccountType })

        // let firstName = e.target[0].value
        // let lastName = e.target[1].value
        // let country = e.target[2].value
        // let emailAddress = e.target[3].value
        // let password = e.target[4].value
        // console.log(firstName, lastName, country, emailAddress, password,type);
    }

    const selectCountry = (country) => {
        setCountry(country);
        setShowCountryList(false)
    }
    // your forehead. 


    const onInputPress = (e) => {
        if (showCountryList === false) {
            setShowCountryList(true)
        }
    }

    if (AccountType !== '') {
        return (
            <div className="w-screen h-screen bg-white flex flex-col overflow-hidden relative overflow-y-auto">
                <div></div>
                <div className='flex-1 flex flex-row items-center justify-center'>
                    <div className='flex-1 md:px-0'>
                        <div className='flex flex-col items-center space-y-6 w-5/6 md:w-2/6 mx-auto py-20'>
                            <div className='w-full flex flex-col space-y-10'>
                                <h1 className="text-center font-bold text-3xl">Get Started for free</h1>
                                <GoogleLogin
                                    clientId={VITE_CLIENT_ID}
                                    buttonText='Sign in with Google'
                                    onSuccess={null}
                                    onFailure={null}
                                    cookiePolicy='single_host_origin'
                                    className={`text-center items-center justify-center border-2 border-gray-800 shadow-sm text-black`}
                                />
                            </div>
                            <div className="flex flex-row items-center w-full">
                                <hr className="flex-1" />
                                <h4 className="px-10 text-sm text-gray-400">or</h4>
                                <hr className="flex-1" />
                            </div>
                            <form method='POST' onSubmit={e => onSignUpWithForm(e)} className="flex flex-col w-full space-y-4">
                                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center md:space-x-3 w-full">
                                    <div className="flex flex-col flex-1 space-y-2 w-full">
                                        <label className="font-medium text-gray-600 text-sm">First name</label>
                                        <input className="bg-white border px-4 py-4 text-sm" required type="text" name="first_name" placeholder="First name" />
                                    </div>
                                    <div className="flex flex-col flex-1  space-y-2 w-full">
                                        <label className="font-medium text-gray-600 text-sm">Last name</label>
                                        <input className="bg-white border px-4 py-4 text-sm" required type="test" name="last_name" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full space-y-2 relative">
                                    <label className="font-medium text-gray-600 text-sm">Country of residence</label>
                                    <div className="border  flex items-center">
                                        <input ref={countryInput} onInput={e => onInputPress(e)} value={country.name} onChange={e => setCountry(prev => ({ ...prev, name: e.target.value }))} className="text-sm flex-1 p-4 bg-white" required type="text" name="country" placeholder="Select your country" />
                                        <h1 className="text-2xl px-4 opacity-40 border-l">{country.flag || '?'}</h1>
                                    </div>

                                    {showCountryList && <div className="w-full z-20 border overflow-y-auto max-h-[200%] overflow-hidden bg-white absolute top-[100%] left-0">
                                        <ul className="w-full h-full p-4 flex flex-col space-y-5 ">
                                            {SUPPORTED_COUNTRIES.map((country, index) => {
                                                return (<li key={`${index}`} onClick={(e) => selectCountry(country)} className='cursor-pointer text-gray-500 flex items-center justify-between'>
                                                    <p className="text-gray-500 font-medium">{country.name}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-300">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </li>)
                                            })}
                                        </ul>
                                    </div>}
                                </div>
                                <div className="flex flex-col w-full space-y-2">
                                    <label className="font-medium text-gray-600 text-sm">Email</label>
                                    <input className="bg-white border px-4 py-4 text-sm" required type="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="flex flex-col w-full space-y-2">
                                    <label className="font-medium text-gray-600 text-sm">Password</label>
                                    <input className="bg-white border px-4 py-4 text-sm" required type="password" name="password" placeholder="Enter your password" />
                                </div>

                                <button disabled={loading} type="submit" className="flex flex-row w-full items-center bg-[rgb(67,56,246)] text-center text-white font-smibold px-4 py-3 text-lg justify-center">
                                    {loading && <LoadingIcon />}
                                    <p> Get Started</p>
                                </button>
                            </form>
                            <div className="w-full flex flex-col text-sm items-center justify-between text-center space-y-5">
                                <Link to="/signin" className='font-bold text-ms leading-relaxed underline text-gray-600' href="#">Do you have an account?</Link>
                                <h3 className=''>Signing up for a Band Account means that you agree to the <a className='font-bold text-xs leading-relaxed underline text-gray-600' href="#">Privacy Policy</a> and <a className='font-bold text-xs leading-relaxed underline text-gray-600' href="#">Terms of Service</a> .</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div onClick={() => setShowCountryList(false)} className={`${showCountryList ? "flex" : 'hidden'} bg-black bg-opacity-0 flex-1 absolute top-0 left-0 w-full h-full z-10`}></div>
            </div>
        )
    }

    return <SignupOptions setAccountType={setAccountType} />


}
