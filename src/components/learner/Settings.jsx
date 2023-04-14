import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MakePayment from "../MakePayment";
import { useAuthContext } from "../../context/Auth";
import EditProfile from "../EditProfile";

export default function Settings() {

  const menuList = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Billing Information" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [check, setCheck] = useState(1);

  const handleListItemClick = (index, id) => {
    setSelectedIndex(index);
    setCheck(id);
  };

  return (
    <div>
      <div className="flex-1 flex border-t -mx-5 ">
        <div className="w-1/4 border-r ">
          <h1 className="text-2xl py-5 ml-5  font-bold">Settings</h1>
          <div className="flex flex-col text-center items-center justify-center">
            {menuList.map((menuItem, index) => {
              return (
                <div
                  className="hover:bg-blue-600 hover:text-white text-lg font-semibold"
                  selected={selectedIndex}
                  key={index}
                  onClick={() => handleListItemClick(index, menuItem.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    width: "100%",
                    borderBottom: "0.2px solid #f3f5f7",
                    padding: "0.5rem",
                  }}
                >
                  <p
                    style={{
                      paddingTop: "1rem",
                      fontSize: "1rem",
                    }}
                  >
                    {menuItem.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* RENDER PAGES HERE */}
        <div className="mx-auto w-5/12 bg-white-50 flex space-y-8 border-gray-100 px-5">
          {check === 1 && <EditProfile />}
          {check === 2 && <MakePayment />}
        </div>
      </div>
    </div>
  );
}
