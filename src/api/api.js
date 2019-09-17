import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f041efa9-43ee-4d4e-ad05-4c4b0d1b682c'
    }
})

//--FRIENDS
export const friendsAPI = {
    getFriends: () => {
        return instance.get(`users?count=100&followed=true`)
               .then(response => response.data);
    }
}
//!--FRIENDS

//--USERS
export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
               .then(response => response.data);
    },
    changeFollowing:  (isFollowed, id) => {
        return isFollowed ?
            instance.delete(`follow/${id}`)
            .then(response => response.data) 
        :
            instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}
//!--USERS


//--PROFILE
export const profileAPI = {
    getUserData: (userId) => {
        return instance.get(`profile/${userId}`)
        .then(response => response.data);
    },
    setSomeData: (someData) => {
        const formData = new FormData();
        formData.append("image", someData);
        return instance.put(`profile/photo`, {image: formData})
        .then(response => response.data);
    }
}
//!--PROFILE


//--AUTH
export const authAPI = {
    getUserAuthData: () => {
        return instance.get(`auth/me`, {withCredentials: true})
        .then(response => response.data);
    }
}
//!--AUTH

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
