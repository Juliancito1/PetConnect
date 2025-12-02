import React, { useState } from "react";

export const ImageGallery = ({ images, defaultImageIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultImageIndex);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const handleThumbnailHover = (index) => {
    setHoverIndex(index);
  };

  const handleThumbnailLeave = () => {
    setHoverIndex(null);
  };

  const getImageUrl = (image) => {
    if (typeof image === "string") {
      return image;
    }
    if (typeof image === "object" && image !== null) {
      return image.url || image.src || image.image || "";
    }
    return "";
  };


  const getImageKey = (image, index) => {
    if (typeof image === "object" && image !== null && image.id) {
      return image.id;
    }
    return index;
  };

  const displayIndex = hoverIndex !== null ? hoverIndex : selectedIndex;

  return (
    <div className="w-full">
      <div className="w-full mb-4 overflow-hidden rounded-t-3xl aspect-square sm:aspect-video lg:aspect-video bg-gray-100">
        <img
          src={getImageUrl(images[displayIndex])}
          alt={`Imagen ${displayIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={getImageKey(image, index)}
            onClick={() => handleThumbnailClick(index)}
            onMouseEnter={() => handleThumbnailHover(index)}
            onMouseLeave={handleThumbnailLeave}
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 aspect-square ${
              index === selectedIndex
                ? "ring-4 ring-emerald-500 ring-offset-2 scale-105"
                : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <img
              src={getImageUrl(image)}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-300 ${
                index === selectedIndex || index === hoverIndex
                  ? "brightness-100"
                  : "brightness-75"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
