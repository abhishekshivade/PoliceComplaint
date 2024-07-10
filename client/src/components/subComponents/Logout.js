import React from 'react'
import { removeAdminToken, removeUserToken } from '../../services/authServices'
import { useAuth } from '../../services/AuthContext'

const Logout = ({ role }) => {

  const { logout } = useAuth()

  const handleLogout = () => role === 'User' ? removeUserToken() : removeAdminToken()

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout