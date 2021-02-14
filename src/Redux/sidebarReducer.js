import {authAPI} from './../components/Users/API'
const setProfileUser = 'setProfileUser'

const initState = {
    id: null,
    email: null,
    login: null,
}

export const sidebarReducer = (state = initState,action)=>{

    switch (action.type){
        case setProfileUser:
            return{
                ...state,
                ...action.data
            }
        default:
            return state
    }

}
const setProfileDataAC = (id,email,login) =>{
    return{
        type: setProfileUser,
        data:{
            id,
            email,
            login
        }
    }
}

export const setProfileDataThunkCreator = ()=>(dispatch)=>{
    authAPI.getUserAuth()
        .then(data=>{
            if (data.resultCode === 0){
                const {id,email,login} = data.data
                dispatch(setProfileDataAC(id,email,login))
        }
    })
}
export default sidebarReducer