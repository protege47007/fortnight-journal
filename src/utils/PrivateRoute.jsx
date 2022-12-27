import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoutes(){
    const auth = { token: true }

    return(
        auth.token ? <Outlet/> : <Navigate to="/auth2/login" replace/> 
    )
}