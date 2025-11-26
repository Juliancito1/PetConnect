import React from "react";
import logo from "../../images/heart-pawprint-svg-file.webp";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export const Footer = () => {
  return (
    <section className="bg-emerald-100">
      <section className="grid grid-cols-1 sm:place-items-center md:flex md:place-items-start md:justify-around lg:grid lg:grid-cols-4 lg:place-items-start">
        <div className="text-center mb-10 md:text-left lg:ms-10">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 md:justify-start"
          >
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Pet Connect</h1>
          </Link>
          <h5 className="text-emerald-500">
            Conectando corazones,<br></br> una mascota a la vez
          </h5>
        </div>
        <div className="text-center mb-10 md:text-left">
          <h2 className="text-2xl bold font-bold">Navegación</h2>
          <ul className="list-none">
            <li className="mt-3">
              <Link>Adoptar</Link>
            </li>
            <li className="my-3">
              <Link>Mascotas Perdidas</Link>
            </li>
            <li className="mb-3">
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Nosotros</Link>
            </li>
          </ul>
        </div>
        <div className="text-center mb-10 md:text-left">
          <h2 className="text-2xl bold font-bold">Legal</h2>
          <ul className="list-none">
            <li className="mt-3">
              <Link>Términos de Servicio</Link>
            </li>
            <li className="my-3">
              <Link>Política de Privacidad</Link>
            </li>
            <li className="mb-3">
              <Link>Contacto</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="text-center mb-10 md:text-left">
          <h2 className="text-2xl bold font-bold">Síguenos</h2>
          <ul className="list-none flex justify-center md:justify-start">
            <li className="mt-3">
              <Link>
                <FaInstagram className="text-3xl" />
              </Link>
            </li>
            <li className="mt-3">
              <Link>
                <FaFacebook className="text-3xl ms-1" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <div className="text-center text-emerald-500 my-5">
        &copy; 2025 PetConnect. Todos los derechos reservados
      </div>
    </section>
  );
};
