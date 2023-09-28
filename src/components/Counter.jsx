import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,incrementByValue} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(increment())} >Increment</button> <br />
      <button className="border" onClick={()=> dispatch(incrementByValue(5))} >Increment 5</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
