import axios from "axios"
import { useAuthContext } from "../context/Auth"

const API_ROUTES = "http://localhost:8080";

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


    return { getExplores, getTopics, getMyCourses ,searchByTag,searchByName,getCourseMedia }
}




export { useServerHook }