const redux = require('redux');

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');


const initialState = {
   loading: false,
   users:[],
   error:'',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//  actions creators
const fetchUsersRequest = ()=>{
   return{
     type: FETCH_USERS_REQUEST   //these are actions
   }
}

const fetchUsersSuccess = (users)=>{
   return{
     type: FETCH_USERS_REQUEST  ,  //these are actions
     payload: users
   }
}

const fetchUsersFailure = (error)=>{
   return{
     type: FETCH_USERS_FAILURE,      //these are actions
     payload: error,
    }
}

const reducer = (state= initialState, action) => {
   
  if(action.type === FETCH_USERS_REQUEST){
    return {
      ...state,
      loading: true
    }
  }
 if(action.type === FETCH_USERS_SUCCESS){
    return {
      ...state,
      users: action.payload
    }
  }

 if(action.type === FETCH_USERS_FAILURE){
    return {
      ...state,
      error: action.payload
    }
  }
   
}


const fetchUsers = () => {
    return function(dispatch){
      dispatch(fetchUsersRequest())
       axios.getAdapter('https://jsonplaceholder.typicode.com/users')
       .then(res=>{
          const users = res.data
           dispatch(fetchUsersSuccess(users))
       })
       .catch(err => {
          dispatch(fetchUsersFailure(err.message))
       })
      
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=> console.log(store.getState()))

store.dispatch(fetchUsers())


