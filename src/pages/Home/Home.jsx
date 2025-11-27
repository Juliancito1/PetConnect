import React from "react";
import { Link } from "react-router";
import Banner from "../../images/Banner.jpg";
import { HomeCards } from "../../components/HomeCards/HomeCards";
import { LostPetCard } from "../../components/LostPetCard/LostPetCard";
import { TestimonialCard } from "../../components/TestimonialCard/TestimonialCard";
import HomeCard from "../../images/HomeCard.jpg";

const mascotasAdoptables = [
  {
    nombre: "Max",
    genero: "Macho",
    edad: "2 años",
    tamaño: "Grande",
  },
  {
    nombre: "Max",
    genero: "Macho",
    edad: "2 años",
    tamaño: "Grande",
  },
  {
    nombre: "Max",
    genero: "Macho",
    edad: "2 años",
    tamaño: "Grande",
  },
  {
    nombre: "Max",
    genero: "Macho",
    edad: "2 años",
    tamaño: "Grande",
  },
];

const mascotasPerdidas = [
  {
    nombre: "Thor",
    imagen: HomeCard,
    ubicacion: "Palermo",
  },
  {
    nombre: "Milo",
    imagen: HomeCard,
    ubicacion: "Caballito",
  },
  {
    nombre: "Odie",
    imagen: HomeCard,
    ubicacion: "Belgrano",
  },
];

const testimonios = [
  {
    foto: HomeCard,
    texto:
      "¡Encontramos a nuestro querido Roco gracias a esta plataforma! El proceso fue súper sencillo y el equipo muy amable. ¡No podríamos estar más felices!",
    autor: "Familia Gómez",
  },
  {
    foto: HomeCard,
    texto:
      "Adoptar a Nala fue la mejor decisión. La información en su perfil era muy completa y nos ayudó a saber que era la indicada para nosotros.",
    autor: "Carlos y Sofía",
  },
  {
    foto: HomeCard,
    texto:
      "Perder a mi gato fue una pesadilla, pero gracias a un reporte en PetConnect, una vecina lo encontró y pudimos reunirnos. ¡Eternamente agradecida!",
    autor: "Juana Pérez",
  },
];

export const Home = () => {
  return (
    <>
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Mujer abrazando un golden retriever"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-emerald-900/60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl">
            Encuentra a tu amigo fiel
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 md:mb-12 max-w-3xl px-4">
            Conectamos mascotas con familias amorosas. Adopta una mascota o
            reporta una mascota perdida para ayudarla a volver a casa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-md px-4">
            <Link
              to="/adoptar"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-4xl transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              Quiero Adoptar
            </Link>
            <Link
              to="/mascotas-perdidas"
              className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-4xl transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Buscar Mascota Perdida
            </Link>
          </div>
        </div>
      </section>
      {/* Sección: Esperando un hogar */}
      <section className="bg-emerald-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Esperando un hogar
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mascotasAdoptables.map((mascota, index) => (
              <HomeCards key={index} mascota={mascota} />
            ))}
          </div>
          <div className="text-center">
            <button className="bg-emerald-100 hover:bg-emerald-200 text-gray-800 font-bold py-3 px-6 rounded-2xl cursor-pointer transition-colors duration-300">
              Ver todos los adoptables
            </button>
          </div>
        </div>
      </section>

      {/* Sección: Ayúdalos a volver a casa */}
      <section className="bg-emerald-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Ayúdalos a volver a casa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mascotasPerdidas.map((mascota, index) => (
              <LostPetCard key={index} mascota={mascota} />
            ))}
          </div>
          <div className="text-center">
            <button className="bg-emerald-100 hover:bg-emerald-200 text-gray-800 font-bold py-3 px-6 rounded-2xl cursor-pointer transition-colors duration-300">
              Ver todos los reportes
            </button>
          </div>
        </div>
      </section>

      {/* Sección: Historias que cambian vidas */}
      <section className="bg-emerald-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Historias que cambian vidas
          </h2>
          <p className="text-emerald-600 text-center mb-8 max-w-3xl mx-auto">
            Vea cómo PetConnect ha ayudado a unir a mascotas con sus nuevas
            familias para siempre.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((testimonio, index) => (
              <TestimonialCard key={index} testimonio={testimonio} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
