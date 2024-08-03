import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
       <Navbar/>
       
       <div className="max-w-7xl mx-auto border-2 py-10 my-10">
           <Outlet/>  
       </div>
    </div>
  );
};

export default MainLayout;