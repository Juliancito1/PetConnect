import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../images/heart-pawprint-svg-file.webp";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <section className="flex justify-between items-center bg-gray-100 py-4 px-4 md:px-0">
        <div className="lg:ms-10">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Pet Connect</h1>
          </Link>
        </div>

        {/* Menú de navegación - Oculto en móvil/tablet, visible en desktop */}
        <div className="hidden lg:flex items-center">
          <Link className="text-gray-700 hover:text-gray-900">Inicio</Link>
          <Link className="text-gray-700 hover:text-gray-900 mx-4">
            Adoptar Mascota
          </Link>
          <Link className="text-gray-700 hover:text-gray-900 me-4">
            Mascotas Perdidas
          </Link>
          <Link className="text-gray-700 hover:text-gray-900">Nosotros</Link>
        </div>

        {/* Botones de acción - Ocultos en móvil/tablet, visibles en desktop */}
        <div className="hidden lg:flex items-center">
          <Link className="bg-gray-300 hover:bg-gray-400 transition-colors px-5 py-2 rounded-2xl text-gray-800 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
            Iniciar Sesión
          </Link>
          <Link className="mx-3 bg-emerald-400 hover:bg-emerald-600 transition-colors px-5 py-2 rounded-2xl text-black font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300">
            Registrarse
          </Link>
        </div>

        {/* Botón hamburguesa - Visible solo en móvil/tablet */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </section>

      {/* Menú móvil desplegable */}
      <div
        className={`lg:hidden bg-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4 sm:text-center md:text-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Adoptar Mascota
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Mascotas Perdidas
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-300">
            <Link
              className="bg-gray-300 hover:bg-gray-400 transition-colors px-5 py-2 rounded-2xl text-gray-800 font-semibold shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar Sesión
            </Link>
            <Link
              className="bg-emerald-400 hover:bg-emerald-600 transition-colors px-5 py-2 rounded-2xl text-black font-semibold shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
