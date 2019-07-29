import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f041efa9-43ee-4d4e-ad05-4c4b0d1b682c'
    }
})

//--USERS
export const getUsers = (currentPage, pageSize) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
}
//!--USERS


//--PROFILE
export const getUserData = (userId) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => response.data);
}
//!--PROFILE


//--AUTH
export const getUserAuthData = () => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(response => response.data);
}
//!--AUTH

//--USER
export const changeFollowing = (isFollowed, id) => {
    return isFollowed ?
        instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(response => response.data) 
    :
        instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(response => response.data)
}
//!--USER

// //--USERS
// export const getUsers = (currentPage, pageSize) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {})
//     .then(response => response.data);
// }
// //!--USERS


// //--PROFILE
// export const getUserData = (userId) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//     .then(response => response.data);
// }
// //!--PROFILE


// //--AUTH
// export const getUserAuthData = () => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
//     .then(response => response.data);
// }
// //!--AUTH
