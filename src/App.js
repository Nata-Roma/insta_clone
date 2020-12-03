import React, { useEffect, useState } from 'react';
import CreatePost from './components/create-post';
import Header from './components/header';
import Login from './components/login';
import PostsList from './components/postsList';
import './styles.css';

export default function App() {
  const [user, setUser] = useState('qq');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  if(!user) {
    return <Login setUser={setUser} />
  }
  return (
    <div> 
          <Header user={user} setUser={setUser} />
          <CreatePost addNewPost={addNewPost} user={user} />
         <PostsList posts={posts} />
    </div>
  );
}
