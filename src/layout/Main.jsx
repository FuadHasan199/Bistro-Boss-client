import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer";
import Navbar from "../pages/shared/Navbar";


const Main = () =>{
    return (
        <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );   
};
export default Main