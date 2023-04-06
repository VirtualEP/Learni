import React from "react";
import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <div className="flex-1 flex border-t -mx-5 ">
      <div className="mx-auto w-7/12 bg-white-50 flex space-y-8 border-gray-100 px-5">
        <div className="w-full flex flex-col space-y-6 ">
          <h1 className="text-xl pt-5 font-bold ">Edit Profile</h1>
          <div className="pt-8 grid md:grid-cols-2 gap-8">
            <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4">
              <div className="p-4">
                <form method="POST">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex justify-center items-center ">
                      <div className="avatar online">
                        <div className="w-24 rounded-full">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
               
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm uppercase py-2">Name</label>
                      <input
                        className="border-2 rounded-lg bg-white  p-3 flex border-blue-100"
                        name="name"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm uppercase py-2">
                        Phone number
                      </label>
                      <input
                        className="border-2 rounded-lg bg-white  p-3 flex border-blue-100"
                        name="number"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-sm uppercase py-2">Email</label>
                    <input
                      className="border-2 rounded-lg bg-white  p-3 flex border-blue-100"
                      name="email"
                      required
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-sm uppercase py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg bg-white   p-3 flex border-blue-100"
                      required
                      type="text"
                    />
                  </div>

                  <button className="border-2 border-blue-600 rounded-md px-4 py-2 my-2 mx-auto flex items-center">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
