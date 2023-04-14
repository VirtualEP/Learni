import React from "react";
import { upcomingTest } from "../../data/upcomingTest";
import UpcomingTestCard from "../card/UpcomingTestCard";
import { useAuthContext } from "../../context/Auth";

export default function Overview() {
  const { user } = useAuthContext();

  return (
    <div className="flex-1 flex border-t -mx-5">
      <div className="w-3/4 border-r bg-white-50 flex flex-col  space-y-8 border-gray-100 px-5">
        <h1 className="text-2xl pt-5 font-bold">Overview</h1>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Courses in Progress</div>
            <div className="stat-value text-primary">25</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Certificates Earned</div>
            <div className="stat-value text-secondary">2</div>
          </div>

          <div className="stat">
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
 

        {/* Course table */}
        <div className="mt-5">
          <h1 className="text-2xl pt-5 font-bold">Courses you are taking</h1>
          <div className="overflow-x-auto mt-5 bg-grey shadow-lg  rounded-md">
            <table className=" w-full text-black ">
              {/* head */}
              <thead>
                <tr className="p-8">
                  <th>Course Title</th>
                  <th>Lesson Completed</th>
                  <th>Duration</th>
                  <th>Instructor</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="p-8 border-b-2 bg-blue-50">
                  <th>UX design certificate</th>
                  <td className="p-8 text-center">18/40 (48%)</td>
                  <td className="text-center">24h 13m 28s</td>
                  <td className="text-center">Ricky</td>
                </tr>
                {/* row 2 */}
                <tr className="p-8 border-b-2 ">
                  <th>SEO Expert from Zero</th>
                  <td className="p-8 text-center">18/40 (48%)</td>
                  <td className="text-center">24h 13m 28s</td>
                  <td className="text-center">Ricky</td>
                </tr>
                {/* row 3 */}
                <tr className="bg-blue-50">
                  <th className="p-8">Project Management</th>
                  <td className="p-8 text-center">18/40 (48%)</td>
                  <td className="text-center">24h 13m 28s</td>
                  <td className="text-center">Ricky</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upcoming tests and community groups */}
      <div className="w-1/4 flex flex-col">
        <div className="bg-white shadow-lg p-4 mx-4 rounded-md mt-5">
          <h1 className="text-2xl font-bold px-4">Upcoming Tests</h1>
          <div className="mt-5">
            {upcomingTest.map((test, i) => (
              <div key={i}>
                <UpcomingTestCard
                  title={test.title}
                  desc={test.testCount}
                  date={test.date}
                />
              </div>
            ))}
          </div>
          <div>
            <button className="rounded-3xl justify-center px-4 py-3 my-4 font-bold w-full mx-auto flex items-center bg-blue-600 text-white">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
