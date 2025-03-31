import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
            <NavLink to="/" style={{ marginRight: "15px" }}>Home</NavLink>
            <NavLink to="/rooms" style={{ marginRight: "15px" }}>Rooms</NavLink>
            <NavLink to="/reservations" style={{ marginRight: "15px" }}>Reservations</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    );
};

export default Navbar;
