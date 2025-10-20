import React from 'react';
import logo from "./assets/logo.png";
import './App.css';
import CourseInfo from './Components/CourseInfo/CourseInfo.jsx';

function App() {
  return (
    <div className="container-fluid">
      <div className="text-center bg-info p-3 logo-section">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="main-content">
        <CourseInfo />
      </div>
    </div>
  );
}

export default App;
