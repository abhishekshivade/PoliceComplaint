import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
import { ADMIN_LOGIN_ROUTE, BASE_ROUTE, CUSTOMER_LOGIN_ROUTE } from '../../constants/AppRoutes'
import {useAuth} from '../../services/AuthContext'

export const PrivateRoute = ({role}) => {
    const {user}=useAuth();
        if(user){
        return <Outlet/>
    }else{
        return <Navigate to={BASE_ROUTE}/>
    }
}