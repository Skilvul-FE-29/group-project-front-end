import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {

  const [isToggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!isToggle);
  }

  return (
    <nav>
      <Link to='/'>
        <p className="nav-logo">Ajarin</p>
      </Link>
      <ul className={isToggle ? "nav-menu" : "nav-menu active"}>
        <li><Link to="/">Pesan Les</Link></li>
        <li><Link to="/">Daftar Pesanan</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/">Register</Link></li>
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
