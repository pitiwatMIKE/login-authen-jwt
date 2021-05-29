import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS } from "../../constans"
import { httpClient } from "../../utils/HttpClient"

export const setStateToFetching = () => ({
    type: LOGIN_FETCHING,
})


export const setStateToSucess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const setStateToFailed = (payload) => ({
    type: LOGIN_FAILED,
    payload
})


export const changeLogin=(result)=>{
    return dispatch =>{
        dispatch(setStateToFetching())
        if(result.data.status === true){
            dispatch(setStateToSucess(result.data))
        }else{
            dispatch(setStateToFailed(result.data))
        }
    }
}

export const login =(user, history)=>{
    return async dispatch=>{
        dispatch(setStateToFetching())
        const result = await httpClient.post("/login",user)
        if(result.data.status){
            dispatch(setStateToSucess(result.data))
            localStorage.setItem('tokenAccess', result.data.token)
            history.replace("/profile")
        }else{
            dispatch(setStateToFailed(result.data))
        }
    }
}