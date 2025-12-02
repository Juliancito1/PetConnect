import React, { useState } from "react";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import PetDetailImage from "../../images/HomeCard.jpg";
import {
  FaHeart,
  FaRegHeart,
  FaShare,
  FaHome,
  FaSmile,
  FaPaw,
} from "react-icons/fa";
import { Link } from "react-router";

export const PetDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    {
      id: 1,
      url: PetDetailImage,
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/2623968/pexels-photo-2623968.jpeg",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          {/* Columna izquierda - Galería */}
          <div>
            <ImageGallery images={images} defaultImageIndex={0} />
          </div>

          {/* Columna derecha - Información */}
          <div className="flex flex-col">
            {/* Header con nombre, raza y botones */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                  Buddy
                </h1>
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mt-2">
                  Golden Retriever
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Agregar a favoritos"
                >
                  {isFavorite ? (
                    <FaHeart className="text-red-500 text-xl" />
                  ) : (
                    <FaRegHeart className="text-gray-600 text-xl" />
                  )}
                </button>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Compartir"
                >
                  <FaShare className="text-gray-600 text-xl" />
                </button>
              </div>
            </div>

            {/* Badges de características */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              <div className="bg-emerald-500 text-white px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base flex items-center gap-2">
                <FaSmile className="text-sm" />
                <span>Bueno con niños</span>
              </div>
              <div className="bg-emerald-500 text-white px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base flex items-center gap-2">
                <FaHome className="text-sm" />
                <span>Entrenado en casa</span>
              </div>
              <div className="bg-emerald-500 text-white px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base flex items-center gap-2">
                <FaPaw className="text-sm" />
                <span>Bueno con otros perros</span>
              </div>
            </div>

            {/* Grid de información */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-5 bg-gray-100 rounded-3xl p-4 sm:p-5">
              <div className="text-center">
                <h5 className="text-xs sm:text-sm font-light text-gray-600 mb-1">
                  Edad
                </h5>
                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  2 años
                </h5>
              </div>
              <div className="text-center">
                <h5 className="text-xs sm:text-sm font-light text-gray-600 mb-1">
                  Tamaño
                </h5>
                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  Grande
                </h5>
                <p className="text-xs text-gray-500">(65 lbs)</p>
              </div>
              <div className="text-center">
                <h5 className="text-xs sm:text-sm font-light text-gray-600 mb-1">
                  Género
                </h5>
                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  Macho
                </h5>
              </div>
              <div className="text-center">
                <h5 className="text-xs sm:text-sm font-light text-gray-600 mb-1">
                  Color
                </h5>
                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  Dorado
                </h5>
              </div>
            </div>

            {/* Sección "Sobre Buddy" */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Sobre Buddy
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Buddy es un Golden Retriever alegre y cariñoso que fue
                encontrado como perro callejero. Está buscando una familia
                activa que pueda darle el ejercicio, amor y estabilidad que se
                merece. Es muy juguetón, le encanta estar al aire libre y es
                excelente con niños y otros animales. Buddy está completamente
                entrenado y listo para encontrar su hogar para siempre.
              </p>
            </div>

            {/* Sección de adopción */}
            <div className="p-5 sm:p-6 bg-gray-100 rounded-3xl my-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                ¿Listo para un nuevo hogar?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                Toma los primeros pasos para adoptar a Buddy en tu vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/adoptar"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-2xl text-center transition-colors duration-300 shadow-sm"
                >
                  Comenzar proceso de adopción
                </Link>
                <Link
                  to="/contacto"
                  className="flex-1 sm:flex-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 sm:px-8 py-3 rounded-2xl text-center transition-colors duration-300 shadow-sm"
                >
                  Haznos una pregunta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
