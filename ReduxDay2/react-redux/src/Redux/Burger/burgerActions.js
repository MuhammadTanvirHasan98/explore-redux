import { BUY_BURGER, RETURN_BURGER } from "./burgerTypes";

const buyBurger = () => {
   return {
    type: BUY_BURGER
   }
}

 const returnBurger = () => {
   return {
    type: RETURN_BURGER
   }
}

export {buyBurger, returnBurger }