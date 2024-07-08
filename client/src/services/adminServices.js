import axios from "axios";
import { ADMIN_LOGIN, REGISTER_ADMIN } from '../constants/ApiRputes'
import {ADMIN_TOKEN_STORAGE_KEY} from '../constants/AuthConstants'

export const registerAdmin=adminData=>axios.post(REGISTER_ADMIN,adminData)

export const adminLogin=loginCredentials=>axios.post(ADMIN_LOGIN,loginCredentials)