import React, { useRef, useState } from 'react';

const CreatePost = ({ posts, setPosts, user }) => {
  const [createPost, setCreatePost] = useState({ user: user });
  const contentRef = useRef();
  const imageRef = useRef();

  const submitPostHandler = (e) => {
    e.preventDefault();
    setPosts([createPost, ...posts]);
    contentRef.current.value = '';
    imageRef.current.value = null;
  };

  return (
    <div>
      <h2>Create post</h2>
      <form onSubmit={submitPostHandler}>
        <input
          type="text"
          placeholder="content"
          onChange={(e) =>
            setCreatePost({ ...createPost, content: e.target.value })
          }
          ref={contentRef}
        />
        <input
          type="file"
          onChange={(e) =>
            setCreatePost({
              ...createPost,
              image: URL.createObjectURL(e.target.files[0])
            })
          }
          ref={imageRef}
        />
        <br />
        <button>Submit the post</button>
      </form>
      <br />
    </div>
  );
};

export default CreatePost;
