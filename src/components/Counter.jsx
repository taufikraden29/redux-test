import { useDispatch, useSelector } from "react-redux";
import { addByAmount, decrement, increment } from "../store/slices/createSlice";

function Counter() {
  const { counter } = useSelector((state) => state.counterSlice);
  //   console.log(counter, "Counter");
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Counter : {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(addByAmount(5))}>Add Fives</button>
    </div>
  );
}

export default Counter;
