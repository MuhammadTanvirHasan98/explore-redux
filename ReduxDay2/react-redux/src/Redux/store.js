import { createStore , applyMiddleware} from 'redux'
import cakeReducer from './Cakes/cakeReducer'
import burgerReducer from './Burger/burgerReducer';
import {combineReducers} from 'redux'
import logger from 'redux-logger'


const rootReducer = combineReducers({
  cake: cakeReducer,
  burger: burgerReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store;