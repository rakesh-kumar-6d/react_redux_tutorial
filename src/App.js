import React from 'react';
import './App.css';
import PostForm from './PostForm';
import AllPost from './AllPost';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-content">
          <PostForm />
          <AllPost />
        </div>
      </header>
    </div>
  );
}

export default App;
