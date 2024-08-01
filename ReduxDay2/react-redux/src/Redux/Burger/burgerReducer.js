import { BUY_BURGER, RETURN_BURGER } from "./burgerTypes"

const initialState = {
   numOfBurger: 15
}

const burgerReducer = (state=initialState, action) =>{
    if(action.type === BUY_BURGER){
       return {
         ...state,
         numOfBurger: state.numOfBurger - 1
       }
    }
    if(action.type === RETURN_BURGER){
       return {
         ...state,
         numOfBurger: state.numOfBurger + 1
       }
    }
    return state
}

export default burgerReducer;