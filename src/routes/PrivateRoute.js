import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage"


export default function PrivateRoute({children}) {

    const {auth} = useSelector((state) => state.userReducer)

    if(auth) {
        return children
    }
    return <LoginPage/>
}