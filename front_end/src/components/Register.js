import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import {register} from "../redux/actions/register.action"

const initUser = {
  username: "",
  password: "",
};

export default function Register() {
  const [user, setUser] = useState(initUser);
  const history = useHistory();
  const registerReducer = useSelector(state => state.registerReducer)
  const dispatch = useDispatch()


  const submit = async(e) => {
    e.preventDefault();
    dispatch(register(user, history))
  };

  return (
    <div>
      <h1>Register</h1>
      <p style={{color:"red"}}>{registerReducer.status? "" : registerReducer.message}</p>
      <form onSubmit={submit}>
        <div>
          username :{" "}
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            required
          />
        </div>
        <div>
          password :{" "}
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            required
          />
        </div>
        <button type="submit" disabled={registerReducer.isFetching}>submit</button>
      </form>
    </div>
  );
}
