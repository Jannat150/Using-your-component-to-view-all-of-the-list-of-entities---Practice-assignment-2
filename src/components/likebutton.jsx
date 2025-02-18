// LikeButton.jsx
import React, { useState } from 'react';


const LikeButton = ({ isLiked, onToggle }) => {
  return (
    <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={onToggle}>
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
