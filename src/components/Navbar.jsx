import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
                <span>John Doe</span>
            </Link>

            <div className="menu-icon" onClick={toggleMenu}>
                <i className={menuOpen ? "bi bi-x-lg" : "bi bi-justify"}></i>
            </div>


            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMenu}>Services</Link>
                </li>

                <li className="nav-item">
                    <Link to="/portfolio" className="nav-links" onClick={closeMenu}>Portfolio</Link>
                </li>

                <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMenu}>Contact</Link>
                </li>

                <li className="nav-item">
                    <Link to="/mentionslegales" className="nav-links" onClick={closeMenu}>Mentions légales</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;