import React from "react";
import { Link } from "react-router";
import logo from "../../images/heart-pawprint-svg-file.webp";
export const Navbar = () => {
  return (
    <nav>
      <section className="flex justify-between items-center bg-gray-100 py-4">
        <div className="md: ms-10">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Pet Connect</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="text-gray-700 hover:text-gray-900 ">Inicio</Link>
          <Link className="text-gray-700 hover:text-gray-900 mx-4">
            Adoptar Mascota
          </Link>
          <Link className="text-gray-700 hover:text-gray-900 me-4">
            Mascotas Perdidas
          </Link>
          <Link className="text-gray-700 hover:text-gray-900">Nosotros</Link>
        </div>
        <div className="flex items-center">
          <Link className="bg-gray-300 hover:bg-gray-400 transition-colors px-5 py-2 rounded-2xl text-gray-800 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
            Iniciar Sesión
          </Link>
          <Link className="mx-3 bg-emerald-400 hover:bg-emerald-600 transition-colors px-5 py-2 rounded-2xl text-black font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300">
            Registrarse
          </Link>
        </div>
      </section>
    </nav>
  );
};
