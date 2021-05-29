import React, {useEffect} from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import {checkToken} from "../utils/checkToken"
export default function Profile() {
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('tokenAccess') == false) {
            history.replace("/")
        }
    }, [])

    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}
