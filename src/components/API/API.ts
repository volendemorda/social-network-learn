import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {"API-KEY": "95e2747c-ac00-46b2-b2d4-e56b2e7f2a69"}
})



