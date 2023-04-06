import axios from "axios";
import { useEffect, useState } from "react";


export default function useAuthHook() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        loadLocalUser()
    }, [])

    useEffect(() => {
        if(user){
            setLocalUser(user)
        }
    }, [user])

    const clearLocalUser = () => {
        localStorage.clear();
    }

    const setLocalUser = async (user) => {
        localStorage.setItem('@auth-virtual-edu', JSON.stringify(user))
    }

    const loadLocalUser = () => {
        const user_ = JSON.parse(localStorage.getItem('@auth-virtual-edu'))
        setUser(user_ || null)
    }



    return { localUser: user, clearLocalUser,setUser }
}