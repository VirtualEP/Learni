import React from 'react'
import { Line } from 'react-chartjs-2';
import Chart from "react-apexcharts";

export default function Overview() {
  return (
    <div className="flex-1 flex flex-col space-y-5 overflow-hidden">
      <div className="w-full flex flex-row  min-h-[20vh] space-x-5 shrink-0">
        <div className="w-1/3 bg-white">
          <div className="flex items-center border">
            <div className="bg-white px-10 flex-1 py-10">
              <h3 className="font-medium text-gray-500 text-sm">Courses</h3>
              <p className="text-3xl font-bold">2</p>
            </div>
            <div className="bg-white px-10 flex-1 py-10 border-l">
              <h3 className="font-medium text-gray-500 text-sm">Enrollments</h3>
              <p className="text-3xl font-bold">20</p>
            </div>
          </div>
          <div className='bg-white py-5 px-5 border-l border-r  border-b'>
            <h3 className="font-light text-sm">Account Balance</h3>
            <p className="font-bold text-2xl mt-1">GHS 2003.00</p>
          </div>
        </div>
        {/* analytics */}
        <div className='w-2/3'>
          <Chart
            options={{
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
              }
            }}
            series={[
              {
                name: "89343",
                data: [30, 23, 13, 10, 90, 12, 10, 3]
              },
              {
                name: "09344",
                data: [10, 40, 13, 22, 20, 81, 15, 13]
              }
            ]}
            type="bar"
            width="100%"
            height='100%'
          />
        </div>
      </div>
      <div className='flex-1 h-[100%] flex flex-row space-x-5'>
        {/* recent enrollment */}
        <div className='w-1/3 h-full flex flex-col overflow-hidden'>
          <h3 className='py-5 px-1 font-medium text-gray-600'>Recent Enrollments</h3>

          <div className="w-full flex-1 flex flex-col overflow-y-auto hide-scrollbar">

            {/* list of recent enrollment */}
            <div className=" overflow-y-auto">
              {/* recent card */}
              {
                [1, 2, 3, 4, 5, 6, 0].map((data, index) => <div className="my-2">
                  <div className="flex flex-row space-x-3">
                    <img className="h-10 w-10 rounded-full shrink-0" src={'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'} />
                    <div className="items-center h-full flex-1">
                      <h4 className="text-sm font-bold">Jannet Heganan</h4>
                      <p className="text-xs font-medium text-gray-400">jannethegann@gmail.com</p>
                    </div>
                    <div className=''>
                      <p className="text-xs text-gray-600 font-medium">3 mins ago</p>
                    </div>
                  </div>
                  <div className='border-b border-gray-50 py-5 pl-5'>
                    <p className='text-green-700 text-sm font-medium'>+ GHS 200.00</p>
                  </div>
                </div>)
              }

            </div>
            <div className='py-[120px]'></div>

          </div>
        </div>


        {/* analytics */}
        <div className='w-2/3   h-[100%] flex flex-col'>

        </div>
      </div>
    </div>
  )
}
