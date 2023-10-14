import React from 'react';
import './VideoCard.css';    // Import the CSS file for VideoCard

const VideoCard = ({ videoUrl, onVideoChange }) => {
  return (
    <div className="card" onClick={() => onVideoChange(videoUrl)}>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCard;
