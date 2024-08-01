import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./usersTypes"
import axios from "axios";



const fetchUsersRequest = ()=>{
  return{
    type: FETCH_USERS_REQUEST  
  }
}

const fetchUsersSuccess = (users)=>{
  return{
    type: FETCH_USERS_SUCCESS  ,  //these are actions
    payload: users
  }
}

const fetchUsersFailure = (error)=>{
  return{
    type: FETCH_USERS_FAILURE,      //these are actions
    payload: error,
   }
}

// export {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure}

export const fetchUsers = () => {
   return (dispatch) => {
       dispatch(fetchUsersRequest())
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
         const users = res.data;
        dispatch(fetchUsersSuccess(users))
      })
      .catch(err => {
         const errMsg = err.message
         dispatch(fetchUsersFailure(errMsg))
      })
   }
}