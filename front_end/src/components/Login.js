import React, { useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useHistory } from 'react-router-dom'
import { login } from '../redux/actions/login.action'
const initUser = {
    username:"",
    password:""
}

export default function Login() {
    const [user, setUser] = useState(initUser)
    const history = useHistory()
    const dispatch = useDispatch()
    const loginReducer = useSelector(state => state.loginReducer)
    const submit=(e)=>{
        e.preventDefault()
        dispatch(login(user,history))
    }
    return (
        <div>
            <h1>Login</h1>
            <p style={{color:"red"}}>{loginReducer.status? "":loginReducer.message}</p>
            <form onSubmit={submit}>
                <div>
                    username: <input tyep="text" onChange={(e)=>{setUser({...user, username:e.target.value})}} required/>
                </div>
                <div>
                    passord: <input type="password" onChange={(e)=>setUser({...user, password:e.target.value})} required/>
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}
