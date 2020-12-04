import React, { useContext } from 'react';
import { userContext } from '../App';

const Post = ({ image, content, user }) => {
  const currentUser = useContext(userContext);
  const isCurrentUser = currentUser === user;

  return (
    <div>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt="cover"
        />
      )}
      <p>Content: {content}</p>
      <p style={{ color: isCurrentUser ? 'green' : null }}>
        created by: {user}
      </p>
      <p>{currentUser}</p>
    </div>
  );
};

export default Post;
