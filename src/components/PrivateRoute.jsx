import React from 'react'
import { useAuthContext } from '../context/Auth'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};