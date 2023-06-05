import React, { createContext, useContext, useEffect, useState } from 'react'
import useAuthHook from '../hooks/authHook';
import useNotifyHook from '../hooks/notifyHook';
import useApiHook from '../hooks/useApiHook';

const AuthContext = createContext();


export const useAuthContext = () => useContext(AuthContext);


export default function AuthContextProvider({ children }) {

    const toast = useNotifyHook()

    const { signin, signup, editProfile } = useApiHook()

    const { localUser, setUser } = useAuthHook();

    const [loading, setLoading] = useState(false)

    const [isAuthenticated, setIsAuthenticated] = useState(localUser ? true : false);

    const login = (email, password) => {
        setLoading(true)
        if (!email || !password || email === '' || password === '') return toast("Email and password fields cannot be empty.", "Authentication Error", { leading: false, color: 'red' });
        signin({ email, password }).then((data) => {
            console.log(data);
            setUser(data);
            return toast("Signing in completed successfully.", "Authentication Complete", { leading: false });
        })
            .catch((error) => {
                console.log(error);
                setUser(null);
                return toast("Signin could not be completed. " + error?.response?.data.message, "Authentication Failled", { leading: false, color: 'red' });
            })
            .finally(() => setLoading(false))
    }

    const register = ({ email, password, firstName, lastName, country, type }) => {
        setLoading(true)
        if (!email || !password || !firstName || !lastName || !country || !type || email === '' || password === '' || firstName === '' || lastName === '' || country === '' || type === '') return toast("Can't have any field empty.", "Form Error", { leading: false });
        signup({ email, password, firstName, lastName, country, type })
            .then((data) => {  return toast("Account registration completed successfully.", "Authentication Complete", { leading: false }); })
            .catch((error) => { setUser(null); return toast("Signin could not be completed. " + error.response.data.message, "Authentication Failed", { leading: false, color: 'red' }); })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        setIsAuthenticated(localUser ? true : false)
    }, [localUser])

    const updateProfile = ({email, firstName, lastName}) => {
        setLoading(true)
        if(!firstName, !lastName, !email){

        }

    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, user: localUser, login, register, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
