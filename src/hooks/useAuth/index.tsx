import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('You must use useAuth hook inside AuthProvider')
    }
    return context;
}

export default useAuth;