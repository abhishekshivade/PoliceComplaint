import axios from "axios";
import { ADMIN_LOGIN, REGISTER_ADMIN } from '../constants/ApiRputes'
import {ADMIN_TOKEN_STORAGE_KEY} from '../constants/AuthConstants'

export const adminLogin=loginCredentials=>
    // axios.post(ADMIN_LOGIN,loginCredentials)

fetch('http://localhost:5292/api/AdminLogin/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        // Add any other required headers
    },
    body: JSON.stringify({ email: 'admin@gmail.com', password: 'admin@123' })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});