import React from "react";
import Navbarr from "../../assets/Navbarr.css";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div className="barraPrincipal">
      {/* Nombre de la pagina */}
      <h1>Shooting Star</h1>
      {/* Buscador */}
      <div className="buscadorNavbar">
        <input type="text" />
      </div>
      <CartWidget />

      {/* Menu */}
      <nav class="menuPrincipal flex justify-end">
        <div>
          <div class="block lg:hidden">
            {/* hacerlo boton */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Menu de lista */}
          {/* diseño en laptop */}
          <div className="responsiveLaptop">
            <ul>
              <li>
                <div className="sm:hidden lg:block ">
                  <a href="..\home\Home.jsx">Home</a>
                </div>
              </li>
              <li>
                <a href="#">Total:</a>
              </li>
              <li>
                <select name="select">
                  <option value="">Acción</option>
                  <option value="">Animación</option>
                  <option value="">Animes</option>
                  <option value="">Aventura</option>
                  <option value="">Bélica / Guerra</option>
                  <option value="">Ciencia ficción</option>
                  <option value="">Comedia</option>
                  <option value="">Crimen</option>
                  <option value="">Documental</option>
                  <option value="">Drama</option>
                  <option value="">Familia</option>
                  <option value="">Fantasía</option>
                  <option value="">Historia</option>
                  <option value="">Infantil</option>
                  <option value="">Misterio</option>
                  <option value="">Música</option>
                  <option value="">Romance</option>
                  <option value="">Superhéroes</option>
                  <option value="">Suspenso</option>
                  <option value="">Terror</option>
                </select>
              </li>
            </ul>
          </div>

          {/* diseño mobile (640px) y tablet */}
          <div className="responsiveMobile">
            <div className="block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
