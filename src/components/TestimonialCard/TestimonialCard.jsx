import React from "react";

export const TestimonialCard = ({ testimonio }) => {
  return (
    <div className="bg-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Foto de perfil circular */}
      <div className="flex justify-center mb-4">
        <img
          src={testimonio.foto}
          alt={testimonio.autor}
          className="w-20 h-20 rounded-full object-cover border-4 border-emerald-200"
        />
      </div>

      {/* Texto del testimonio */}
      <p className="text-gray-700 text-center mb-4 flex-grow leading-relaxed">
        "{testimonio.texto}"
      </p>

      {/* Autor */}
      <p className="text-emerald-600 font-semibold text-center">
        - {testimonio.autor}
      </p>
    </div>
  );
};

