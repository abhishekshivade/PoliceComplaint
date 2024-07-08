
export const API_BASE_URL="http://localhost:5000"
export const CUSTOMERS=`${API_BASE_URL}/customers`
export const ADMIN=`${API_BASE_URL}/admin`

export const REGISTER_CUSTOMER=`${CUSTOMERS}/createAccount`
export const CUSTOMER_LOGIN=`${CUSTOMERS}/Login`

export const CUSTOMER_TR_DETAILS=`${CUSTOMERS}/getTransactions`
export const CUSTOMER_PR_DETAILS=`${CUSTOMERS}/getPersonalDetails`
export const CUSTOMER_AC_DETAILS=`${CUSTOMERS}/getAccountDetails`
export const GET_ALL_ACCOUNTS=`${CUSTOMERS}/listAllAccounts`

export const GET_ALL_CUSTOMERS=`${CUSTOMERS}/getAllCustomers`
export const REGISTER_ADMIN=`${ADMIN}/addAdmin`
export const ADMIN_LOGIN=`${ADMIN}/login`