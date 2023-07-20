import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../context/Auth";
import { useServerHook } from "../hooks/useServerHook";

function MakePayment() {
  const { user, loading } = useAuthContext();
  const { updatesecurity} = useServerHook();
  const [securityUpdate, setSecurityUpdate] = useState({
    emailVerfifcation: false,
    phoneVerfifcation: false,
    resetpassword: false,
  })

  async function onSubmit(e) {
    e.preventDefault();

    if (e.target[3].value !== e.target[4].value) {

      console.log("passwords do not match");
      return;
    }
    // make http request
    // { enableEmailFA, enablePhoneFA, newPassword }
    const { data, status } = await updatesecurity({
      enableEmailFA: securityUpdate.emailVerfifcation,
      enablePhoneFA: securityUpdate.phoneVerfifcation,
      newPassword: securityUpdate.resetpassword ? e.target[3].value : null
    })

    if (status !== 200) {
      console.log(data.message);
      return;
    }

    // toast message.
  }




  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl p-4 font-bold ">Security Information</h1>
      <div className="flex flex-col md:w-1/2 px-4">
        <form className="flex flex-1 flex-col space-y-5" method="post" onSubmit={onSubmit}>

          <div className="flex flex-col pt-4 space-y-3 flex-1">
            <label className="text-sm font-bold text-gray-700 pb-3">2 Factor Authentication</label>

            <div className="flex flex-row items-center space-x-4 flex-1 w-full">
              <input onChange={e => setSecurityUpdate(prev => ({ ...prev, emailVerfifcation: e.target.checked }))} value={securityUpdate.emailVerfifcation} type="checkbox" className="bg-white border-2 rounded-md my-2 p-3" />
              <label className="text-sm font-medium  text-gray-500">Enable Email</label>
            </div>

            <div className="flex flex-row items-center space-x-4 flex-1 w-full">
              <input onChange={e => setSecurityUpdate(prev => ({ ...prev, phoneVerfifcation: e.target.checked }))} value={securityUpdate.phoneVerfifcation} type="checkbox" className="bg-white border-2 rounded-md my-2 p-3" />
              <label className="text-sm font-medium  text-gray-500">Enable Phone number</label>
            </div>

          </div>
          <div className="flex flex-row items-center justify-between border-t  pt-5">
            <label className="text-sm font-bold text-gray-700">Reset Password</label>
            <input onChange={e => setSecurityUpdate(prev => ({ ...prev, resetpassword: e.target.checked }))} type="checkbox" className="bg-white border-2 rounded-md my-2 p-3" />
          </div>
          <div className="flex flex-col space-y-5  flex-1 border-t  pt-5">

            <label className="text-sm font-medium text-gray-500">New Password</label>
            <input type="text" disabled={!securityUpdate.resetpassword} className={`border-2 rounded-md my-2 p-3 flex-1 ${securityUpdate.resetpassword ? 'bg-white' : 'bg-gray-100'}`} placeholder="Password" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-500">Confirm password</label>
            <input type="text" disabled={!securityUpdate.resetpassword} className={`border-2 rounded-md my-2 p-3 flex-1 ${securityUpdate.resetpassword ? 'bg-white' : 'bg-gray-100'}`} placeholder="Confirm Password" />
          </div>
          <button type="submit" className="bg-blue-600 p-3 rounded-md text-white w-1/2">update</button>
        </form>
        <div className="border-t mt-5 py-5 md:hidden">
          <p className="text-gray-500 text-sm my-4">Clicking on the logout button will sign you out of your account on this device.</p>
          <button onClick={handleLogout} className="bg-red-600 text-red-50 py-3  w-1/2 items-center justify-center rounded-md ">Logout</button>
        </div>
      </div>

    </div>
  );
}

export default MakePayment;
