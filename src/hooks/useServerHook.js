import axios from "axios"
import { useAuthContext } from "../context/Auth"

export const API_ROUTES = "https://api.devtray.net";
// export const API_ROUTES = "http://localhost:8080";

function useServerHook() {

    const { user } = useAuthContext()

    const getExplores = () => {
        return axios.get(`${API_ROUTES}/api/course`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const createCourse = (course) => {
        return axios.post(`${API_ROUTES}/api/course`,
            { ...course, action: 'upload_course_cover' }, {
            headers: {
                'authorization': `token ${user.token}`,
                'Content-Type': 'multipart/form-data',
            },
        }
        )
    }


    const uploadMedia = (media) => {
        return axios.post(`${API_ROUTES}/api/upload`,
            { ...media, type: 'video', action: 'upload_courses_video' }, {
            headers: {
                'authorization': `token ${user.token}`,
                'Content-Type': 'multipart/form-data',
            },
        }
        )
    }


    const getTopics = (courseId) => {
        return axios.get(`${API_ROUTES}/api/topic/${courseId}`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }


    const getMyCourses = () => {
        return axios.get(`${API_ROUTES}/api/course/mycourses`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const getSingleCourses = (courseId) => {
        return axios.get(`${API_ROUTES}/api/course/single/${courseId}`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }


    const searchByTag = (tag) => {
        return axios.get(`${API_ROUTES}/api/course/search?tag=${tag}`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }


    const searchByName = (query) => {
        return axios.get(`${API_ROUTES}/api/course/search?q=${query}`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const searchEnrolled = (query) => {
        return axios.get(`${API_ROUTES}/api/course/search/enquery?q=${query}`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const getTopselling = () => {
        return axios.get(`${API_ROUTES}/api/course/top-selling`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const getCourseMedia = (courseID) => {
        return axios.get(`${API_ROUTES}/api/topic/${courseID}`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const getEnrolled = (courseID) => {
        return axios.get(`${API_ROUTES}/api/course/${courseID}/enrolled`,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    const purchaseCourse = (data) => {

        return axios.post(`${API_ROUTES}/api/course/paid`, data,
            {
                headers: {
                    'authorization': `token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            }
        )
    }



    const updateprofile = (data) => {
        return axios.post(`${API_ROUTES}/api/settings/user`,data, {
            headers: {
                'authorization': `token ${user.token}`,
                'Content-Type': 'application/json',
            },
        }
        )
    }

    const updatesecurity = (data) => {
        return axios.post(`${API_ROUTES}/api/settings/security`,data, {
            headers: {
                'authorization': `token ${user.token}`,
                'Content-Type': 'application/json',
            },
        }
        )
    }


    return { getEnrolled, updatesecurity,updateprofile, getExplores, createCourse, uploadMedia, getTopselling, getTopics, getMyCourses, searchByTag, searchByName, getSingleCourses, searchEnrolled, getCourseMedia, purchaseCourse }
}




export { useServerHook }