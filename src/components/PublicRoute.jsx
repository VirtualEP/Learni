import React, { useEffect } from 'react'
import { useAuthContext } from '../context/Auth'
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {

    const { isAuthenticated ,user} = useAuthContext();

    

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};