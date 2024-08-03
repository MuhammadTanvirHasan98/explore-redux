import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const cart = useSelector((state)=> state.cart.cart)
  console.log(cart)

  return (
    <div className="flex justify-center gap-10 mt-10">
      <NavLink  to="/">
       <button className="btn btn-primary btn-outline text-xl">Home</button>
      </NavLink>

      <NavLink  to="/counter">
       <button className="btn btn-primary btn-outline text-xl">Counter App</button>
      </NavLink>

      <NavLink to="/cart">
       <button className="btn btn-primary btn-outline text-xl">Cart {cart.length}</button>
      </NavLink>
      
    </div>
  );
};

export default Navbar;