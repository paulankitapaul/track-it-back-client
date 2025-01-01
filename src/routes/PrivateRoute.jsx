import React from 'react';;
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading></Loading>;
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;