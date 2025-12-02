import React from "react";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import PetDetailImage from "../../images/HomeCard.jpg";

export const PetDetail = () => {
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda - Galería de imágenes */}
          <div>
            <ImageGallery images={images} defaultImageIndex={0} />
          </div>

          {/* Columna derecha - Información de la mascota */}
          <div>{/* Aquí puedes agregar el contenido del lado derecho */}</div>
        </div>
      </div>
    </>
  );
};
