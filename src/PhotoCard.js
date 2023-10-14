
import React from 'react';
import './PhotoCard.css';    // Import the CSS file for PhotoCard

const PhotoCard = ({ photoUrl }) => {
  return (
    <div className="card">
      <a href={photoUrl} target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <img src={photoUrl} alt="Photo" />
        </div>
      </a>
    </div>
  );
};

export default PhotoCard;
