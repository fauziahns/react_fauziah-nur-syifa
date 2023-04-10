import { Navigate, Outlet } from "react-router"

const PrivateRoute = ({user}) => {
    const token = localStorage.getItem('token')
    token ? user = true : user = false
    if(!user){
        return <Navigate to={'/login'} replace/>
    } else {
        <Outlet/>
    }
}
export default PrivateRoute