import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { PostPage } from './pages/PostPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="posts/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
