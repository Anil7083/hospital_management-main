import { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigateTo = useNavigate();

    const handleLogout=async()=>{
        await axios.get("https://hospital-management-main-1xbz.onrender.com/api/v1/user/patient/logout",{
            withCredentials:true,
        })
        .then((res)=>{
            toast.success(res.data.message);
            setIsAuthenticated(false);
        })
        .catch((err)=>{
            toast.error(err.response.data.message);
        })
    }

    const gotoLogin=()=>{
        navigateTo("/login");
    }
    return (
        <nav className="constainer">
            <div className="logo"><img src="/public/logo.png" alt="logo" className="logo-img"/></div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    <Link to={"/"} onClick={()=>setShow(!show)}>HOME</Link>
                    <Link to={"/appointment"} onClick={()=>setShow(!show)}>APPOINTMENT</Link>
                    <Link to={"/about"} onClick={()=>setShow(!show)}>ABOUT US</Link>
                </div>
                {isAuthenticated ? (
                    <button className="logoutBtn btn" onClick={handleLogout}>LOGOUT</button>
                ) : (
                    <button className="loginBtn btn" onClick={gotoLogin}>LOGIN</button>
                )}
            </div>
            <div className="hamburger" onClick={()=>setShow(!show)}>
                <GiHamburgerMenu/>
            </div>

        </nav>
    )
}

export default Navbar;