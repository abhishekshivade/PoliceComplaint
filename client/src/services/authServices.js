import { ADMIN_TOKEN_STORAGE_KEY,USER_TYPE_STORAGE_KEY,CUSTOMER_ID_STORAGE_KEY } from "../constants/AuthConstants"


export const storeToken=token=>sessionStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token)

export const removeToken=()=>sessionStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)

export const getToken=()=>sessionStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)

export const storeUserType=userType=>sessionStorage.setItem(USER_TYPE_STORAGE_KEY,userType)

export const removeUserType=()=>sessionStorage.removeItem(USER_TYPE_STORAGE_KEY)

export const getUserType=()=>sessionStorage.getItem(USER_TYPE_STORAGE_KEY)

export const storeCustomerId=customerId=>sessionStorage.setItem(CUSTOMER_ID_STORAGE_KEY,customerId)

export const removeCustomerId=()=>sessionStorage.removeItem(CUSTOMER_ID_STORAGE_KEY)

export const getCustomerId=()=>sessionStorage.getItem(CUSTOMER_ID_STORAGE_KEY)