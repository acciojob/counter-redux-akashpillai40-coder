
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
