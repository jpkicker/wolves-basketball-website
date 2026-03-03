import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: var(--navy);
  border-radius: 12px;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--gold);
  }

  @media (max-width: 768px) {
    top: -40px;
    right: -10px;
    font-size: 1.25rem;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1rem;
  color: var(--white);
  
  h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--gold);
  }
  
  p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0.75rem;
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`;

const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!video) return null;

  const embedUrl = `https://www.youtube.com/embed/${video.youtubeVideoId}?autoplay=1&rel=0`;

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <VideoFrame
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {(video.title || video.description) && (
          <VideoInfo>
            {video.title && <h3>{video.title}</h3>}
            {video.description && <p>{video.description}</p>}
          </VideoInfo>
        )}
      </ModalContent>
    </Overlay>
  );
};

export default VideoModal;