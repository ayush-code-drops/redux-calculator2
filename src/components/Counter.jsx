import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, addValue, divideValue, multiplyValue, reduceCounter, subValue } from "../redux/action";

function Counter() {
  const [value, setValue] = useState(15);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(addCounter(1))}>Add</button>
      <button onClick={() => dispatch(reduceCounter(1))}>Reduce</button>
      <br />
      <input
        type="number"
        placeholder="value of x eg:15"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!counter && <div>It is not divisible by {value}</div>}
      <h1>Operations</h1>
      <button onClick={()=>dispatch(addValue(value))}>Add</button>
      <button onClick={()=>dispatch(subValue(value))}>Subtract</button>
      <button onClick={()=>dispatch(multiplyValue(value))}>Multiply</button>
      <button onClick={()=>dispatch(divideValue(value))}>Divide</button>
    </div>
  );
}

export default Counter;
