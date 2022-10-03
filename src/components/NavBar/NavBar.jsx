import React from 'react'
import "./NavBar.css"
import "bootswatch/dist/lux/bootstrap.min.css";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="nav-link logo" to="/home">TIENDA CALZADO</NavLink>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="navbar-collapse collapse" id="navbarColor02" style={{}}>
                        <ul className="navbar-nav me-auto links">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/categoria/Hombre" className="nav-link">Hombres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/categoria/Mujer" className="nav-link">Mujeres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/categoria/Kids" className="nav-link">Kids</NavLink>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    )
}
