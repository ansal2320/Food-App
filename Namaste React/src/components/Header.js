import { useState } from "react";
import { Link } from "react-router-dom";
import { CART_URL, LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header=()=>{
   
    const [btnName,setBtnName]=useState("Login");

    const onlineStatus=useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        Online Status : {onlineStatus?"❤️":"💔"}
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About"> About Us </Link> 
                    </li>
                    <li>
                       <Link to="/Contact"> Contact Us </Link> 
                    </li>
                    <li>
                       <Link to="/grocery"> Grocery </Link> 
                    </li>
                    <li>
                        <img className="cart" src={CART_URL}></img>
                    </li>
                    <button 
                        className="log-btn" 
                        onClick={()=>{
                           btnName==="Login"? setBtnName("Logout"):setBtnName("Login");
                            console.log(btnName);
                        }
                    }>
                        {btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;