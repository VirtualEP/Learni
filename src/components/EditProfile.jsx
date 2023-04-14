import React from "react";
import { useAuthContext } from "../context/Auth";
import LoadingIcon from "./LoadingIcon";

function EditProfile() {
  const { user, loading } = useAuthContext();

  return (
    <div>
      <div className="w-full flex flex-col space-y-6 ">
        <h1 className="text-2xl pt-5 font-bold ">Edit Profile</h1>
        <div className="pt-8 grid md:grid-cols-2 gap-8">
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form method="POST">
                <div className="flex justify-center items-center my-4 ">
                  <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-20 cursor-pointer">
                      <span className="text-xl">
                        {user.user.firstName
                          .match(/(\b\S)?/g)
                          .join("")
                          .match(/(^\S|\S$)?/g)
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm uppercase py-2">First Name</label>
                    <input
                      className="border-2 rounded-lg bg-white  p-3 flex border-blue-100"
                      name="name"
                      required
                      type="text"
                      value={`${user.user.firstName}`}
                      onChange=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm uppercase py-2">Last Name</label>
                    <input
                      className="border-2 rounded-lg bg-white  p-3 flex border-blue-100"
                      name="number"
                      required
                      type="text"
                      value={`${user.user.lastName}`}
                      onChange=""
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
                    value={`${user.user.email}`}
                    onChange=""
                  />
                </div>

                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 my-2 mx-auto flex items-center">
                  Update
                </button>
                {loading && <LoadingIcon />}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
