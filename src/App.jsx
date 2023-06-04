
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { SignupOptions } from "./components"
import LoginPage from "./pages/login"
import SignupPage from "./pages/signup"
import PrivateRoute from "./components/PrivateRoute"
import DashboardScreen from "./pages/dashboard"
import PublicRoute from "./components/PublicRoute"
import { gapi } from "gapi-script"
import { useEffect } from "react"
import Overview from "./components/instructor/Overview"
import Courses from "./components/learner/Courses"
import Messages from "./components/learner/Messages"
import Settings from "./components/learner/Settings"
import CoursesList from "./components/learner/CoursesList"
import CourseInfo from "./components/learner/CourseInfo"
import Explore from "./components/learner/Explore"
import CourseSummary from "./components/learner/CourseSummary"
import CourseLessons from "./components/learner/CourseLessons"
import CourseExercise from "./components/learner/CourseExercise"
import CourseQna from "./components/learner/CourseQna"
import Channel from "./components/learner/Channel"
import Landings from "./pages/landings"
import InstructorCourseInfo from "./components/instructor/CourseInfo"
import InstructorLessons from "./components/instructor/instructorLessons"
import InstructorEnrolment from "./components/instructor/InstructorEnrolment"
import Courselo from "./pages/courselo"


export const VITE_CLIENT_ID = "1065813839939-vp30ql16pu5nbatco90snth2b6sr8b41.apps.googleusercontent.com";


export default function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: VITE_CLIENT_ID,
        scope: ''
      })
    }

    gapi.load('client:auth', start)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landings />} />
          <Route path="/signin" element={<PublicRoute children={<LoginPage />} />} />
          <Route path="/signup" element={<PublicRoute children={<SignupPage />} />} />
          <Route path="/dashboard" element={<PrivateRoute children={<DashboardScreen />} />} >
            <Route path="" element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="explore" element={<Explore />} />
            <Route path="courses" element={<Courses />} >
              <Route path="" element={<CoursesList />} />
              <Route path=":id" element={<CourseInfo />} >
                <Route path="summary" element={<CourseSummary />} />
                <Route path="channel" element={<Channel />} />
                <Route path="lessons" element={<CourseLessons />} />
                <Route path="exercises" element={<CourseExercise />} />
                <Route path="qna" element={<CourseQna />} />
              </Route>
            </Route>
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* ... */}
          <Route path="/creator" element={<PrivateRoute children={<DashboardScreen />} />} >
            <Route path="" element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="courses" element={<div className="flex flex-1 overflow-hidden "><Outlet /></div>} >
              <Route path="" element={<CoursesList />} />
              <Route path=":id" element={<InstructorCourseInfo />} >
                <Route path="lessons" element={<InstructorLessons />} />
                <Route path="x" element={<InstructorLessons />} />
                <Route path="enrollments" element={<InstructorEnrolment />} />
              </Route>
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

