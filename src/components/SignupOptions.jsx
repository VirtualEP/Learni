import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AccountTypes } from "../pages/signup";
import male from "../assets/male.png";
import female from "../assets/female.png";

function SignupOptions({ setAccountType }) {
  const [type, setType] = useState("");
  const [disable, setDisabled] = useState(true)
  return (
    <div className="flex min-h-screen w-screen">

      <div className="md:w-5/12 flex flex-col space-y-5 md:p-10 py-10 px-5 leading-relaxed">
        <div className="">
          {/* header */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="text-gray-600 ml-2">Dev</span>
            <span className="text-blue-600">Tray</span>
          </Link>
        </div>
        <div className="flex-1 py-10 space-y-5">
          {/* selection action */}
          <h3 className="text-3xl font-medium text-gray-700 leading-snug">Join by your role</h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">Chose the right role to join our platform,This option can not be updates when registration is complete.</p>
          <div className="flex w-full space-x-3 py-5">
            <OptionCard active={type} type={AccountTypes.student} title="I'am Student" subtitle="ready to learn something" onClick={e=>setType(AccountTypes.student)} />
            <OptionCard active={type} type={AccountTypes.instructor} title="I'am Instructor" subtitle="ready to educate Students" onClick={e=>setType(AccountTypes.instructor)} />
          
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <button onClick={() => setAccountType(type)} className="w-full text-white font-medium text-sm rounded-lg bg-blue-500 py-3">Continue as Business</button>
          <Link to='/signin' className="text-xs font-medium text-gray-500">Already have an account<span className="text-gray-700"> ? Login</span></Link>
        </div>
      </div>
      <div className="flex-1 bg-gray-300 hidden md:flex bg-center bg-cover" style={{backgroundImage:`url(https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`}}></div>
    </div>
  );
}


function OptionCard({title,onClick,subtitle, active , type}) {
  return <div onClick={onClick} className={`flex-1 min-h-[100px] p-5 hover:border-blue-300 hover:border-2 transition-all shadow-sm hover:shadow-blue-100 flexflex-col space-y-3 border-2 ${active ==type && 'border-blue-600' } rounded-2xl cursor-pointer relative`}>
  <div className={`bg-gradient-to-tl  ${active ==type ? 'text-blue-600':'text-gray-600' } `}>
    {type === AccountTypes.student ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
  </svg>
  }
  </div>
  <div>
    <p className="font-medium text-gray-700 text-sm">{title}</p>
  <p className="text-xs font-light text-gray-500">{subtitle}</p>
  </div>

  <div className={`absolute ${active ==type ? 'flex':'hidden' } transition-all delay-75  top-0 right-0 h-9 w-9 rounded-full flex items-center text-blue-500 justify-center`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>

  </div>
</div>
}


export default SignupOptions;
