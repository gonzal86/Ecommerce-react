import React from 'react'
import "./NavBar.css"
import "bootswatch/dist/lux/bootstrap.min.css";
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">TIENDA CALZADO</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="navbar-collapse collapse" id="navbarColor02" style={{}}>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hombres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mujeres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Niños</a>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>

                </div>

            </nav>

        </div>
    )
}
