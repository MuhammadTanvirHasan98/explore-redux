import { createStore} from 'redux'
import cakeReducer from './Cakes/cakeReducer'
import burgerReducer from './Burger/burgerReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  cake: cakeReducer,
  burger: burgerReducer
})

const store = createStore(rootReducer)

export default store;