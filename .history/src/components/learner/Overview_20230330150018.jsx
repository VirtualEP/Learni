import React from "react";
import { overviewData } from "../../data/overviewData";
import { upcomingTest } from "../../data/upcomingTest";
import OverviewCard from "../card/OverviewCard";
import UpcomingTestCard from "../card/UpcomingTestCard";

export default function Overview() {
  return (
    <div className="flex-1 flex border-t -mx-5 ">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
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
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        {/* <div className="w-full  grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewData.map((overview, i) => (
            <div key={i}>
              <OverviewCard
                title={overview.title}
                color={overview.color}
                desc={overview.count}
              />
            </div>
          ))}
        </div> */}

        {/* Course table */}
        <div className="mt-5">
          <h1 className="text-2xl pt-5 font-bold">Courses you are taking</h1>
          <div className="overflow-x-auto mt-5">
            <table className="table table-zebra w-full text-white bg-white">
              {/* head */}
              <thead className="">
                <tr>
                  <th>Course Title</th>
                  <th>Lesson Completed</th>
                  <th>Duration</th>
                  <th>Instructor</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>UX design certificate</th>
                  <td>18/40 (48%)</td>
                  <td>24h 13m 28s</td>
                  <td>Ricky</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>SEO Expert from Zero</th>
                  <td>18/40 (48%)</td>
                  <td>24h 13m 28s</td>
                  <td>Ricky</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Project Management</th>
                  <td>18/40 (48%)</td>
                  <td>24h 13m 28s</td>
                  <td>Ricky</td>
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
              See All Upcoming Tests
            </button>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg p-4 mx-4 rounded-md mt-5">
            <h1 className="text-2xl pt-5 font-bold px-4">Community Groups</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
}
