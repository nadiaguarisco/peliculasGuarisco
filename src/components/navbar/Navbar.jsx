import React from "react";
import Navbarr from "../../assets/Navbarr.css";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a href="/CartWidget"><CartWidget /></a>
          <a className="title navbar-brand" href="#">Shooting Star</a>
          <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" id="offcanvasDarkNavbar" >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="ListaProducto offcanvas-body">
              <ul className=" justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Total:</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Genero
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item mt-1" href="#">Infantiles</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Acción</a></li>
                    <li><a className="dropdown-item" href="#">Animación</a></li>
                    <li><a className="dropdown-item" href="#">Anime</a></li>
                    <li><a className="dropdown-item" href="#">Aventura</a></li>
                    <li><a className="dropdown-item" href="#">Bélica / Guerra</a></li>
                    <li><a className="dropdown-item" href="#">Ciencia ficción</a></li>
                    <li><a className="dropdown-item" href="#">Comedia</a></li>
                    <li><a className="dropdown-item" href="#">Crimen</a></li>
                    <li><a className="dropdown-item" href="#">Documental</a></li>
                    <li><a className="dropdown-item" href="#">Drama</a></li>
                    <li><a className="dropdown-item" href="#">Familia</a></li>
                    <li><a className="dropdown-item" href="#">Fantasía</a></li>
                    <li><a className="dropdown-item" href="#">Historia</a></li>
                    <li><a className="dropdown-item" href="#">Misterio</a></li>
                    <li><a className="dropdown-item" href="#">Música</a></li>
                    <li><a className="dropdown-item" href="#">Romance</a></li>
                    <li><a className="dropdown-item" href="#">Superhéroes</a></li>
                    <li><a className="dropdown-item" href="#">Suspenso</a></li>
                    <li><a className="dropdown-item" href="#">Terror</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Qué pelicula queres mirar hoy?" aria-label="Search" />
                <button className="btn btn-success" type="submit">buscar</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
