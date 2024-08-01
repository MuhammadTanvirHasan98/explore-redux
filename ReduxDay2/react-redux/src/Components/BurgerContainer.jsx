import { useDispatch, useSelector } from "react-redux";
import {buyBurger , returnBurger} from "../Redux/Burger/burgerActions";

const BurgerContainer = () => {

   const numOfBurger = useSelector(state => state.burger.numOfBurger);
   const dispatch = useDispatch();
  return (
    <div>
       <h2>Number of Burger - {numOfBurger}</h2>
        <button onClick={()=>dispatch(buyBurger())}>Buy Burger</button>
        <button onClick={()=>dispatch(returnBurger())}>Return Burger</button>
    </div>
  );
};

export default BurgerContainer;