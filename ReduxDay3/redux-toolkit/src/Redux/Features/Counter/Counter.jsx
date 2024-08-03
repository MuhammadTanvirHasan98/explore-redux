import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
    
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
       <div>
          <button
          onClick={()=>dispatch(increment())}
           className="btn btn-sm btn-primary">+</button>
           <span className="mx-10">{count}</span>
         
          <button
          onClick={()=>dispatch(decrement())}
          className="btn btn-sm btn-secondary">-</button>
       </div>
        <div>
           <button
            onClick={()=> dispatch(incrementByAmount(5))}
            className="btn btn-sm mt-2 btn-accent">Incrementby5</button>
        </div>
    </div>
  );
};

export default Counter;