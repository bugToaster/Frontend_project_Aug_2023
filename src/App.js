import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery'; // Add this line
import './App.css'; // Import your global styles

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [
    {
      thumbnailSrc: 'assets/photo-thumb-1.jpeg',
      fullSrc: 'assets/photo-1.jpg',
      title: 'Image 1 Title',
    },
    {
      thumbnailSrc: 'assets/photo-thumb-2.jpeg',
      fullSrc: 'assets/photo-2.jpg',
      title: 'Image 2 Title',
    },
    {
      thumbnailSrc: 'assets/photo-thumb-3.jpeg',
      fullSrc: 'assets/photo-3.jpg',
      title: 'Image 3 Title',
    },
    {
      thumbnailSrc: './assets/photo-thumb-4.jpeg',
      fullSrc: './assets/photo-4.jpg',
      title: 'Image 4 Title',
    },
    {
      thumbnailSrc: './assets/photo-thumb-5.jpeg',
      fullSrc: './assets/photo-5.jpeg',
      title: 'Image 4 Title',
    }
  ];

  return (
    <div className="app-container">
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal
          type="alert"
          title="Alert Modal"
          content="This is an example of an alert modal."
          buttons={<button onClick={closeModal}>Close</button>}
          onClose={closeModal}
        />
      )}

      <ImageGallery images={images} /> {/* Add this line */}
    </div>
  );
};

export default App;
