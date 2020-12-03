import React, { useState } from 'react';
import CreatePost from './components/create-post';
import Header from './components/header';
import Login from './components/login';
import PostsList from './components/postsList';
import './styles.css';

export default function App() {
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);

  return (
    <div>
      {!user && <Login setUser={setUser} />}

      {user && (
        <>
          <Header user={user} setUser={setUser} />
          <CreatePost posts={posts} setPosts={setPosts} user={user} />
          <PostsList posts={posts} />
        </>
      )}
    </div>
  );
}
