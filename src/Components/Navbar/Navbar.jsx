import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo-img" />
        <p>SHOPPER</p>
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link
            to="/women"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kid" style={{ textDecoration: "none", color: "inherit" }}>
            kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={cartIcon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
