import React from "react";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a class="btn-home" href="/">Home</a></li>
                <li><a href="/produtos">Scania</a></li>
                <li><a href="/volvo">Volvo</a></li>
                <li><a href="/mercedes-benz">Mercedes-Benz</a></li>
                <li><a href="/carretas">Carretas</a></li>
            </ul>
            <a class="btn-login" href="/Login">Login</a>
        </nav>
    )
}

export default NavBar;