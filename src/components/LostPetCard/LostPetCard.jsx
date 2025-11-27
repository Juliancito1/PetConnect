import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const LostPetCard = ({ mascota }) => {
  return (
    <div className="bg-emerald-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Imagen de la mascota */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={mascota.imagen}
          alt={mascota.nombre}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{mascota.nombre}</h3>
        <div className="flex items-center text-emerald-600">
          <FaMapMarkerAlt className="mr-2" />
          <p className="text-sm">Visto por última vez en {mascota.ubicacion}</p>
        </div>
      </div>
    </div>
  );
};

