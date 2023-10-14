import React, { useEffect, useState ,useRef} from 'react';
import VideoCard from './VideoCard';
import PhotoCard from './PhotoCard';
import './VideoGallery.css'; // Import the CSS file for VideoGallery

const VideoGallery = () => {
    const [autoplayVideo, setAutoplayVideo] = useState(null);

    useEffect(() => {
      // Load the autoplay video when the component mounts.
      setAutoplayVideo('/VideoGallery/assets/videos/v3.mp4');
    }, []);
  
    const handleVideoChange = (videoUrl) => {
      setAutoplayVideo(videoUrl);
    };
  

  const videoUrls = [
     
    '/VideoGallery/assets/videos/v1.mov',
    '/VideoGallery/assets/videos/v2.mov', 
  ];
  
  const photoUrls = [
    '/VideoGallery/assets/photos/a1.png',
    '/VideoGallery/assets/photos/a2.png',
    '/VideoGallery/assets/photos/a3.png', // New photo from the "assets" folder in "public"
    '/VideoGallery/assets/photos/a4.png', // New photo from the "assets" folder in "public"
    '/VideoGallery/assets/photos/a5.png',
    '/VideoGallery/assets/photos/a6.png',
    '/VideoGallery/assets/photos/a7.png',
    '/VideoGallery/assets/photos/a8.png',
    '/VideoGallery/assets/photos/a9.png',
    '/VideoGallery/assets/photos/a10.png',
    '/VideoGallery/assets/photos/a12.png',
    '/VideoGallery/assets/photos/a13.png',
    '/VideoGallery/assets/photos/a14.png',
    '/VideoGalleryrm/assets/photos/a15.png',
    // Add more photo URLs here
  ];
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef();

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  return (
    <div className="video-gallery">
      <div className="fullscreen-video">
      <video autoPlay playsInline loop ref={videoRef} muted={isMuted} onClick={toggleMute}>
        <source src='/VideoGallery/assets/videos/v3.mp4' type="video/mp4" />
      </video>
     
      </div>
      <div className="card-grid">
        {videoUrls.map((videoUrl, index) => (
          <VideoCard key={index} videoUrl={videoUrl} onVideoChange={handleVideoChange} />
        ))}
        {photoUrls.map((photoUrl, index) => (
          <PhotoCard key={index} photoUrl={photoUrl} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
