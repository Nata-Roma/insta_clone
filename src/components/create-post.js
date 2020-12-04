import React, { useRef, useState } from 'react';

const CreatePost = ({ addNewPost, user, dispatch }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const contentRef = useRef();
  const imageRef = useRef();

  const submitPostHandler = (e) => {
    e.preventDefault();
    const post = { image, content, user, id: Date.now() };
    // addNewPost(post);
    dispatch({ type: 'ADD_POST', payload: post });
    contentRef.current.value = '';
    imageRef.current.value = null;
    if (!contentRef.current.value && !imageRef.current.value) {
      setContent('');
      setImage(null);
    }
  };

  return (
    <div>
      <h2>Create post</h2>
      <form onSubmit={submitPostHandler}>
        <input
          type="text"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
          ref={contentRef}
        />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          ref={imageRef}
        />
        <br />
        <button>Submit the post</button>
      </form>
      <br />
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt="cover"
        />
      )}
    </div>
  );
};

export default CreatePost;
