import React from 'react';

const Post = ({ post }) => {
  const {image, content, user} = post;

  return (
    <div>
      <img 
        style={{height: 100, width: 200, objectFit: 'cover'}}
        src={URL.createObjectURL(image)}
        alt="cover"
      />
      <p>Content: {content}</p>
      <p>created by: {user}</p>
    </div>
  );
};

export default Post;
