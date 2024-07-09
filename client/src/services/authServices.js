import { ADMIN_TOKEN_STORAGE_KEY,USER_TYPE_STORAGE_KEY,USER_ID_STORAGE_KEY } from "../constants/AuthConstants"


export const storeToken=token=>sessionStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token)

export const removeToken=()=>sessionStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)

export const getToken=()=>sessionStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)

export const storeUserType=userType=>sessionStorage.setItem(USER_TYPE_STORAGE_KEY,userType)

export const removeUserType=()=>sessionStorage.removeItem(USER_TYPE_STORAGE_KEY)

export const getUserType=()=>sessionStorage.getItem(USER_TYPE_STORAGE_KEY)

export const storeUserId=userId=>sessionStorage.setItem(USER_ID_STORAGE_KEY,userId)

export const removeUserId=()=>sessionStorage.removeItem(USER_ID_STORAGE_KEY)

export const getUserId=()=>sessionStorage.getItem(USER_ID_STORAGE_KEY)