import React, { useState, useEffect, useCallback } from 'react';
import './Modal.css';

const Modal = ({ type, title, content, buttons, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const close = useCallback(() => {
    setIsVisible(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    setIsVisible(true);

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [close]);

  const handleOverlayClick = () => {
    close();
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content" tabIndex={-1}>
        <h2>{title}</h2>
        <div className="modal-body">
          {content}
        </div>
        <div className="modal-footer">
          {buttons}
        </div>
      </div>
    </div>
  );
};

export default Modal;
