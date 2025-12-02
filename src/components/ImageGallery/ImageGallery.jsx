import React, { useState } from "react";

export const ImageGallery = ({ images, defaultImageIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultImageIndex);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  // Función helper para obtener la URL de la imagen (soporta strings y objetos)
  const getImageUrl = (image) => {
    if (typeof image === "string") {
      return image;
    }
    if (typeof image === "object" && image !== null) {
      return image.url || image.src || image.image || "";
    }
    return "";
  };

  // Función helper para obtener el ID o índice como key
  const getImageKey = (image, index) => {
    if (typeof image === "object" && image !== null && image.id) {
      return image.id;
    }
    return index;
  };

  return (
    <div className="w-full">
      {/* Imagen principal */}
      <div className="w-full mb-4 overflow-hidden rounded-t-3xl">
        <img
          src={getImageUrl(images[selectedIndex])}
          alt={`Imagen ${selectedIndex + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={getImageKey(image, index)}
            onClick={() => handleThumbnailClick(index)}
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
              index === selectedIndex
                ? "ring-4 ring-emerald-500 ring-offset-2 scale-105"
                : "opacity-60 hover:opacity-80"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <img
              src={getImageUrl(image)}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                index === selectedIndex ? "brightness-100" : "brightness-75"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
