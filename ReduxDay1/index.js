const redux = require('redux');

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const incCounter = 'incCounter'
const decCounter = 'decCounter'
const incSells = 'incSells'
const decSells = 'decSells'


const initialCounterState = {
   counter: 10,
}

const initialSellState = {
   sells: 0,
}

// action creator

const incrementCounter =()=>{
   return {
     type: incCounter
   }
}
const decrementCounter =()=>{
   return {
     type: decCounter
   }
}
const incrementSells =()=>{
  return {
    type: incSells
  }
}
const decrementSells =()=>{
  return {
    type: decSells
  }
}

// reducers

const counterReducer = (state= initialCounterState, action)=>{
  
   if(action.type === incCounter){
     return{
           ...state,
           counter: state.counter + 1
        }
   }
   else if(action.type === decCounter){
    return{
      ...state,
      counter: state.counter - 1
    }
   }
   return state;
  // switch (action.type){
    //   case INCREMENT: return{
    //      ...state,
    //      counter: state.counter + 1
    //   }
    //   case  DECREMENT: return{
    //     ...state,
    //     counter: state.counter - 1
    //  }
    //  default: state;
    // }
}

const sellsReducer = (state= initialSellState, action)=>{
  
  if(action.type === incSells){
    return{
          ...state,
          sells: state.sells + 1
       }
  }
  else if(action.type === decSells){
   return{
     ...state,
     sells: state.sells - 1
   }
  }
  return state;
}


// root reducers
const rootReducers = combineReducers({
    counter: counterReducer,
    sells: sellsReducer 
})

// global store 

const store = createStore(rootReducers)
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(()=>{
   console.log("Updated state", store.getState())
})
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())

store.dispatch(incrementSells())
store.dispatch(incrementSells())
store.dispatch(incrementSells())
store.dispatch(incrementSells())
store.dispatch(decrementSells())


unsubscribe();