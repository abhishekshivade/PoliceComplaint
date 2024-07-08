import React from 'react'
import { removeAdminToken, removeCustomerToken } from '../../services/authServices'
import { useAuth } from '../../services/AuthContext'

const Logout = ({role}) => {

const {logout} = useAuth()

   const handleLogout=()=> role==='Customer' ? removeCustomerToken() : removeAdminToken()

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout