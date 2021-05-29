import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcount } from "../redux/actions/count.action";

export default function Home() {
  const countReducer = useSelector((state) => state.countReducer);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Home</h1>
      <p>cout:{countReducer.count}</p>
      <button onClick={() => dispatch(addcount())}>count</button>
    </div>
  );
}
