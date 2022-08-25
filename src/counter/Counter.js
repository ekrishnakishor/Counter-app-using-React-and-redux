import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  resetCount,
} from "./counterSlice";
import "./Counter.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="flex">
   <div className="inc">
   <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
   </div>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Count
      </button>
      <button
        aria-label="Reset"
        onClick={() => dispatch(resetCount())}
      >
        Reset
      </button>
      {/* <button
        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
      >
        Add auto with Delay
      </button> */}
    </div>
  );
}
