import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MakePayment from "../MakePayment";
import { useAuthContext } from "../../context/Auth";
import EditProfile from "../EditProfile";

export default function Settings() {

  const menuList = [
    {
      id: 1, name: "My Profile",
      icon: ()=><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    },
    {
      id: 2, name: "Security",
      icon: ()=><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>    
    },
    {
      id: 3, name: "Notification",
      icon:()=><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
    </svg>    

    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [check, setCheck] = useState(1);

  const handleListItemClick = (index, id) => {
    setSelectedIndex(index);
    setCheck(id);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-t mb-5 -mx-5">
        <h1 className="text-2xl py-5 ml-5  font-bold">Settings</h1>
        <div className="border-b mx-5"></div>
      </div>
      <div className="flex-1 flex flex-col -mx-5 ">
        <div className="w-full  flex flex-col">

          <div className="flex flex-col  pl-5 ">

            <div className="flex-1 flex flex-row space-x-3 text-sm">

              {menuList.map((menuItem, index) => {
                return (
                  <button key={`tab-menue-${index}`} onClick={e => handleListItemClick(index, menuItem.id)} className={`flex items-center space-x-2 font-regular px-3 text-gray-400 hover:rounded-xl hover:text-blue-400 font-medium p-2 transition-all  ${check==index+1 ? 'text-blue-700  rounded-xl' :''}`}>
                    <p>{menuItem.name}</p>
                  </button>
                );
              })}

            </div>
          </div>
        </div>
        {/* RENDER PAGES HERE */}
        <div className="mx-auto w-full  flex space-y-8 border-gray-100 px-5">
          {check === 1 && <EditProfile />}
          {check === 2 && <MakePayment />}
        </div>
      </div>
    </div>
  );
}
