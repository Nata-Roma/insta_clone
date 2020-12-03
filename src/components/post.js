import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <div>User: {post.user}</div>
      <img
        style={{ height: 100, width: 200, objectFit: 'cover' }}
        scr={post.image}
        alt={post.image}
      />
      <div>Post content: {post.content}</div>
      <br />
    </div>
  );
};

export default Post;
