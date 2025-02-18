// PostCard.jsx
import React, { useState } from 'react';
import LikeButton from './LikeButton';

const PostCard = ({ profileImage, username, content, initialIsLiked }) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <img
        src={profileImage}
        alt={`${username}'s profile`}
        style={{
          maxWidth: '50px',
          height: 'auto',
          borderRadius: '50%',
          marginRight: '12px'
        }}
      />
      <div>
        <h3 style={{ margin: '0', fontSize: '1.2em' }}>{username}</h3>
        <p style={{ margin: '4px 0' }}>{content}</p>
        <LikeButton isLiked={isLiked} onToggle={toggleLike} />
      </div>
    </div>
  );
};

export default PostCard;
