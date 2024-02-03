import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <NavLink to="/" className='container2 button rounded'>
          <span className='icon-home'></span>
          Home
        </NavLink>
        <NavLink to="/posts" className='container3 button rounded'>
          News
        </NavLink>
        {/* <NavLink to="/projects" className='container3 button rounded'>
          AboutMe
        </NavLink> */}
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<ProjectsPage />} />
          <Route path='/posts/:id' element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
