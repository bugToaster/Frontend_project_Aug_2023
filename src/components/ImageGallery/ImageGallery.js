import React, { useState } from 'react';
import './ImageGallery.css'; // Import your CSS styles
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the styles

const ImageGallery = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="thumbnail" onClick={() => openLightbox(index)}>
          <img src={image.thumbnailSrc} alt={`Thumbnail ${index + 1}`} />
          <div className="thumbnail-details">
            <p>{image.title}</p>
          </div>
        </div>
      ))}
  
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[selectedImageIndex].fullSrc}
          nextSrc={images[(selectedImageIndex + 1) % images.length].fullSrc}
          prevSrc={images[(selectedImageIndex - 1 + images.length) % images.length].fullSrc}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;