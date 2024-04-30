

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CircleLoader, ClipLoader } from "react-spinners";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><CircleLoader color="#36d7b7" /></div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default PrivateRoutes;