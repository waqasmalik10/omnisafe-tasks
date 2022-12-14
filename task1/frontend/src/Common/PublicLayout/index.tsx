import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props{
    children: React.ReactNode
}

const PublicLayout = ({children}: Props) => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            return;
        }
        navigate('/')
    },[navigate])

    return(
        <>
            {children}
        </>
    )
}

export default PublicLayout;