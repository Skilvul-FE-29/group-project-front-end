import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {

  const [isToggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!isToggle);
    console.log(isToggle)
  }

  const resetToggle = () => {
    setToggle(true);
    console.log(isToggle);
  }

  return (
    <nav>
      <Link to='/'>
        <p className="nav-logo">Ajarin</p>
      </Link>
      <ul className={isToggle ? "nav-menu" : "nav-menu active"}>
        <li><Link to="/" onClick={() => resetToggle()}>Pesan Les</Link></li>
        <li><Link to="/" onClick={resetToggle}>Daftar Pesanan</Link></li>
        <li><Link to="/login" onClick={resetToggle}>Login</Link></li>
        <li><Link to="/regis" onClick={resetToggle}>Register</Link></li>
      </ul>
      <div onClick={handleToggle} className={isToggle ? "hamburger" : "hamburger active"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar;
