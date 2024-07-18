import "./Navbar.css";

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user_profile.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ setSidebar }) => {
  const [animation, setAnimation] = useState(false);

  const handleClick = () => {
    setSidebar((prev) => (prev === false ? true : false));
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 700);
  };

  const btnRef = useRef();
  useEffect(() => {});
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <div className={`menu ${animation ? "active" : ""}`}>
          <img
            className="menu-icon"
            onClick={handleClick}
            src={menu_icon}
            alt=""
          />
        </div>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
