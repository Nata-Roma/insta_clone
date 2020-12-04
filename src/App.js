import React, { createContext, useEffect, useReducer, useState } from 'react';
import CreatePost from './components/create-post';
import Header from './components/header';
import Login from './components/login';
import PostsList from './components/postsList';
import './styles.css';

export const userContext = createContext();
export const postsContext = createContext();

const initialState = [];

const postsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const newPost = action.payload;
      return [newPost, ...state];
    case 'DELETE_POST':
      const deletePost = state.filter((post) => post.id !== action.id);
      return deletePost;
    default:
      return state;
  }
};

export default function App() {
  const [user, setUser] = useState('qq');
  const [posts, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <postsContext.Provider value={dispatch}>
      <userContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost addNewPost={1} user={user} dispatch={dispatch} />
        <PostsList posts={posts} dispatch={dispatch} />
      </userContext.Provider>
    </postsContext.Provider>
  );
}
