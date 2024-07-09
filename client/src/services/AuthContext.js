import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAdminToken, getUserToken, removeAdminToken, removeUserToken } from '../services/authServices'
import{adminLogin} from '../services/adminServices'
import{userLogin}from '../services/userServices'

const AuthContext=createContext();

export const AuthProvider=({Children})=>{
    const [user, setUser]=useState(null);
    const [error,setError]=useState(null)

    const login= async(userData,userType)=>{
        setError(null);
        try{
            let response;

            if(userType==='User'){
                response=await userLogin(userData)
            }else if(userType==='Admin'){
                response=await adminLogin(userData)
            }

            setUser(response.data)
        }catch(error){
            setError('Invalid userName or Password')
        }
    }

    const logout=()=>{
        if(user?.type==='User'){
            removeUserToken()
        }else if(user?.type === 'Admin'){
            removeAdminToken()
        }

        setUser(null)
    }

    const isAuthenticated=()=> {
        return !user
    }

    return(
        <AuthContext.Provider value={{user,login,logout,isAuthenticated,error}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)