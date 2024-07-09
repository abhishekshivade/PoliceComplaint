
export const API_BASE_URL="http://localhost:5000"
export const USERS=`${API_BASE_URL}/users`
export const ADMIN=`${API_BASE_URL}/admin`

export const REGISTER_USER=`${USERS}/createAccount`
export const USER_LOGIN=`${USERS}/Login`

export const USER_CP_DETAILS=`${USERS}/getComplaint`
export const USER_PR_DETAILS=`${USERS}/getPersonalDetails`
export const GET_ALL_COMPLAINTS=`${USERS}/listAllComplaints`

export const GET_ALL_USERS=`${USERS}/getAllUsers`
export const REGISTER_ADMIN=`${ADMIN}/addAdmin`
export const ADMIN_LOGIN=`${ADMIN}/login`