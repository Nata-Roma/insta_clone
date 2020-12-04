import React, { useContext } from 'react';
import { userContext, postsContext } from '../App';

const Post = ({ image, content, user, id }) => {
  const currentUser = useContext(userContext);
  const dispatch = useContext(postsContext);

  const isCurrentUser = currentUser === user;

  const deletePostHandler = () => {
    dispatch({ type: 'DELETE_POST', id });
  };

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
      {/* <p>{currentUser}</p> */}
      <div>
        {isCurrentUser && (
          <button onClick={deletePostHandler}>Delete Post</button>
        )}
      </div>
    </div>
  );
};

export default Post;
