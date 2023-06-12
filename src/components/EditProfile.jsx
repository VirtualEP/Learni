import React, { useState } from "react";
import { useAuthContext } from "../context/Auth";
import LoadingIcon from "./LoadingIcon";
import { useServerHook } from "../hooks/useServerHook";

function EditProfile() {
  const { user } = useAuthContext();
  const [updateinfo, setUpdateInfo] = useState({ firstName: user.user.firstName, lastName: user.user.lastName, phoneNumber: user.user.phoneNumber })
  const { updateprofile } = useServerHook();

  async function submitUpdateInfo(e) {
    e.preventDefault();
    // make server request

    if (updateinfo.firstName === '' || updateinfo.lastName === '') {
      console.log("fields are empty");
      return;
    }

    const { data, status } = await updateprofile({ firstName: updateinfo.firstName, lastName: updateinfo.lastName, phoneNumber: updateinfo.phoneNumber, email: user.user.email });


    if (status !== 200) {
      console.log(data.message);
      return;
    }

    // toast message.
  }

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl p-4 font-bold ">Personal Information</h1>
      <div className="flex flex-col md:w-1/2 px-4">
        <form className="flex flex-1 flex-col space-y-5" method="post" onSubmit={submitUpdateInfo}>
          <div className="flex flex-1 md:flex-row  items-center space-x-3">
            <div className="flex flex-col flex-1 w-full">
              <label className="text-sm font-medium text-gray-500">First Name</label>
              <input onChange={e => setUpdateInfo(prev => ({ ...prev, firstName: e.target.value }))} value={updateinfo.firstName} type="text" className="bg-white border-2 w-full rounded-md my-2 p-3" placeholder="First name" />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium text-gray-500">First Name</label>
              <input onChange={e => setUpdateInfo(prev => ({ ...prev, lastName: e.target.value }))} value={updateinfo.lastName} type="text" className="bg-white border-2 w-full rounded-md my-2 p-3" placeholder="First name" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-500">Email Address</label>
            <input value={user.user.email} type="text" disabled={true} className="border-2 rounded-md my-2 p-3 flex-1 bg-gray-100" placeholder="First name" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-500">Phone Number</label>
            <input onChange={e => setUpdateInfo(prev => ({ ...prev, phoneNumber: e.target.value }))} value={updateinfo.phoneNumber} type="tel" className="border-2 rounded-md my-2 p-3 flex-1 bg-white" placeholder="Phone number" />
          </div>
          <button className="bg-blue-600 p-3 rounded-md text-white w-1/2">update</button>
        </form>
      </div>

    </div>
  );
}

export default EditProfile;
