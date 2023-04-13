import React from "react";
import {BsCashStack} from "react-icons/bs"

function MakePayment() {
  return (
      <div className="w-full flex flex-col space-y-6  ">
            <h1 className="text-2xl pt-5 font-bold ">Billing Information</h1>
            <div className="pt-8 grid md:grid-cols-2 gap-8">
              <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4">
              <div class="w-full pt-1 pb-5">
            <div class="bg-blue-600 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <BsCashStack size={35} />
            </div>
            <div className="p-4">
                <form method="POST">
                <div className="flex flex-col py-2">
                    <label className="text-sm uppercase py-2">Number</label>
                    <input
                      className="border-2 rounded-lg bg-white  p-3 flex border-blue-100"
                      name="number"
                      required
                      type="text"
                      onChange=""
                    />
                  </div>
                </form>

            </div>
               
              </div>
            </div>
          </div>
      </div>
  );
}

export default MakePayment;
