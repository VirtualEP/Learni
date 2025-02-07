import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { encryptKey } from "../main";
import { API_ROUTES } from "./useServerHook";

export default function useAuthHook() {

    const encryptData = (text) => {
        const data = CryptoJS.AES.encrypt(
            JSON.stringify(text),
            encryptKey
        ).toString();

        return data;
    };

    const decryptData = (text) => {
        try {
            const bytes = CryptoJS.AES.decrypt(text, encryptKey);
            const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return data;
        } catch (error) {

            return null;
        }

    };

    const [user, setUser] = useState(null)

    useEffect(() => {
        loadLocalUser()
    }, [])

    useEffect(() => {
        if (user) {
            setLocalUser(user)
        }
    }, [user])

    const clearLocalUser = () => {
        localStorage.clear();
    }

    const setLocalUser = async (user) => {
        const encryptUserData = encryptData(JSON.stringify(user))
        localStorage.setItem('@auth-virtual-edu', encryptUserData)
    }

    const loadLocalUser = () => {
        const decryptedUserData = decryptData(localStorage.getItem('@auth-virtual-edu'))
        const user_ = JSON.parse(decryptedUserData)
        // authenticate if user is token is valid or expired
        if (user_) {
            axios.post(`${API_ROUTES}/api/auth/tokens`, {
                token: user_.token
            }).then(({ status }) => {
                if (status !== 200) {
                    setUser(null)
                    return
                }
                setUser(user_ || null)
            }).catch(err => {
                setUser(null)
            })
        } else {
            setUser(null)
        }


    }



    return { localUser: user, clearLocalUser, setUser }
}