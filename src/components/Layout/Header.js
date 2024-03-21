import logo from "../../../public/assets/chicken-station.png";
import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {

    const user = useContext(UserContext);

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
    }, [btnName]);

    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Boy" width="100" height="100"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>{onlineStatus ? <span>&#128994;</span> : <span>&#128308;</span>}</li>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/contact`}>Contact</Link></li>
                        <li><Link to={`/grocery`}>Grocery</Link></li>
                        <li>Cart</li>
                        <button className="login-btn" onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }}> {btnName} </button>

                        <li>{user.loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;