import React from 'react'
import { useAuthContext } from '../../context/Auth'
import { Outlet } from 'react-router-dom';
import LearnerSideBar from '../../components/LearnerSideBar';
import Topbar from '../../components/learner/Topbar';

export default function DashboardScreen() {
  const { user } = useAuthContext();
  return (
    <div className="w-screen h-screen flex flex-col  md:flex-row   bg-white">
      <LearnerSideBar />
      <div className="flex-1 flex flex-col overflow-x-hidden p-5">
        <Topbar/>
        <Outlet />
      </div>
    </div>
  )
}
