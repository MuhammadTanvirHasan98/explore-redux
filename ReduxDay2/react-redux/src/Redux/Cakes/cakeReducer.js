import { BUY_CAKE } from "./cakeTypes"

const initialState = {
   numOfCakes: 10
}

const cakeReducer = (state=initialState, action) =>{
    if(action.type === BUY_CAKE){
       return {
         ...state,
         numOfCakes: state.numOfCakes - 1
       }
    }
    return state
}

export default cakeReducer;