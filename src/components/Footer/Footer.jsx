import React from 'react';
import { NavLink } from 'react-router-dom';
import "bootswatch/dist/lux/bootstrap.min.css";
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <div className="container-fluid  text-center margin">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <nav className="navbar navbar-expand-lg ">
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
                        </nav>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row justify-content-center">
                    @Tienda Calzado - Todos los derechos reservados
                </div>
            </div>
        </div>
    );
}

export default Footer;
