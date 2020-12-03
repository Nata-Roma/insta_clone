import React, { useState } from 'react';
import CreatePost from './components/create-post';
import Header from './components/header';
import Login from './components/login';
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
          <CreatePost posts={posts} setPosts={setPosts} />
          {posts
            ? posts.map((post, index) => (
                <div key={index}>
                  <img
                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                    scr={post.image}
                    alt={post.image}
                  />
                  <div>Post content: {post.content}</div>
                  <br />
                </div>
              ))
            : null}
        </>
      )}
    </div>
  );
}
