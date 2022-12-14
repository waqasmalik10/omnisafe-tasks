import { setUser } from "App/reducers/authSlice";
import Header from "Common/Header";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "utils/setAuthToken";

interface Props{
    children: React.ReactNode
}

const ProtectedLayout = ({children}: Props) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login');
            return;
        }

        setAuthToken(token);
        const {user} = jwtDecode(token) as any;
        dispatch(setUser(user));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[navigate])

    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default ProtectedLayout;