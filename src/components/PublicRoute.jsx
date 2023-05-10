import React, { useEffect } from 'react'
import { useAuthContext } from '../context/Auth'
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {

    const { isAuthenticated ,user} = useAuthContext();

    

    if (isAuthenticated) {
        if (user.user.accountType === 'learner'){

            return <Navigate to="/dashboard" replace />;

        }
        if (user.user.accountType === 'instructor'){
            
            return <Navigate to="/creator" replace />;

        }
    }

    return children;
};