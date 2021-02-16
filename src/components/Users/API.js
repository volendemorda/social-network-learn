const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {"API-KEY" : "95e2747c-ac00-46b2-b2d4-e56b2e7f2a69"}
})


export const userAPI = {
    getUsers (currentPage = 1,pageSize = 9){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> response.data)
    },
    follow (id){
        return instance.post(`/follow/${id}`)
            .then(response=> response.data)
    },
    unFollow(id){
        return instance.delete(`/follow/${id}`)
            .then(response=> response.data)
    }
}

export const authAPI = {
    getUserAuth(){
        return instance.get(`/auth/me`)
            .then(response=> response.data)
    }
}

export const profileAPI = {
    getProfileUser(id){
      return instance.get(`/profile/${id}`)
          .then(response=>response.data)
    },
    updateStatus(status){
        return instance.put('/profile/status',{status})
            .then(response=>response.data)
    },
    getStatus(userId){
        return instance.get(`/profile/status/${userId}`)
            .then(response=> response.data)
    }

}

