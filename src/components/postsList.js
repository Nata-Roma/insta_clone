import React from 'react';
import Post from './post';

const PostsList = ({ posts }) => {
  return (
    <div>
      <h2>Posts list:</h2>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};

export default PostsList;
