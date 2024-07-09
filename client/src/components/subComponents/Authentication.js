import React, { useEffect } from 'react'
import { ADMIN_LOGIN_ROUTE, USER_LOGIN_ROUTE, USER_SIGNUP_ROUTE } from '../../constants/AppRoutes';
import { red } from '@mui/material/colors';

const Authentication = ({role}) => {
    
  useEffect(() => {
    // console.log(role)
  }, [role]);
  return (
    <div>{
    role === "User" ? <div className='space-x-5'>
        <span className="px-6 py-1 rounded-xl bg-white font-semibold hover:text-white hover:bg-blue-700"><a href={USER_LOGIN_ROUTE}>LogIn</a></span>
        <span className="px-4 py-1 rounded-xl bg-white font-semibold hover:text-white hover:bg-blue-700"><a href={USER_SIGNUP_ROUTE}>Sign Up</a></span>
    </div> : <div className='space-x-2'>
        <span className="px-6 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white"><a href={ADMIN_LOGIN_ROUTE}>LogIn</a></span>
        </div>
        }
        </div>
  )
}

export default Authentication