import { createContext, useEffect, useState } from "react"

import { jwtDecode } from "jwt-decode";

export const AuthContext=createContext()


export function AuthContextProvider( {children}) {


    
    const [token, settoken] = useState(null);
    const [usarDate, setusarDate] = useState(null);

    useEffect(() => {
        const val =localStorage.getItem(`tkn`)
        if(val!=null){

        settoken(val)
        // getUserdata()
        setusarDate(jwtDecode(val))
        }

        
    }, [])
    function getUserdata() {
        
      const userData = jwtDecode(localStorage.getItem('tkn'));
      
      console.log("fff",userData);
      setusarDate(userData);
    }
    
    
    return<AuthContext.Provider value={{token ,settoken,usarDate,setusarDate, getUserdata}}>
    {children}
    
    </AuthContext.Provider>
}