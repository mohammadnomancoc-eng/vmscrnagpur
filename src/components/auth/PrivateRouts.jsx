
import { Navigate } from "react-router-dom";

function PrivateRouts({children}) {

    const Token = JSON.parse(localStorage.getItem('Token')) || null;

    if(Token != null)
        return children;
    else 
        return <Navigate to={"/login"} />
} 

export  default PrivateRouts