import Logo from "../helpers/Logo";
import { CiSearch } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={`${styles.contain}`}>   

          <div className="flex items-center gap-4">   
            <Logo/>  

            <div className="flex items-center gap-4 bg-[#f9f9f9] p-2 rounded-[50px]">
            <CiSearch/>   
            <input type="text" placeholder="Search" className="outline-none"/>   
            </div>

          </div>

           <div className="flex items-center gap-6">   

             <div className="flex items-center gap-2"> 
                <FaRegPenToSquare className="w-6 h-6"/>
                <p className="text-base capitalize font-[100]">write</p>
             </div>

             <IoIosNotificationsOutline className="h-6 w-6"/>    

           </div>
           
        </div>
    )
}

export default Navbar;