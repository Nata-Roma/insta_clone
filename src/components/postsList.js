import React from 'react';
import Post from './post';

const PostsList = ({ posts }) => {
  return (
    <div>
      posts list
      {posts
        ? posts.map((post, index) => <Post key={index} post={post} />)
        : null}
    </div>
  );
};

export default PostsList;
