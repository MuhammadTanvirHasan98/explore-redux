import { useEffect } from "react";
import { fetchUsers } from "../Redux/Users/usersActions";
import { useDispatch, useSelector } from "react-redux";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);
  console.log(loading, users, error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <>
    {loading ? <h1 style={{color:'blue'}}>Loading.....</h1> : error ?  <p>This error occurs: <span style={{color:'red'}}>{error}</span> </p>: <div>
      <h1>All Users: {users.length}</h1>
      {
        users.map(user=>(
          <div key={user?.id}>
             <h1>User Name: {user?.name}</h1>
              <h3>User email: {user?.email}</h3>
          </div>
        ))
      }
    </div>}
    </>;
};

export default UsersContainer;
