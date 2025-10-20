import React from 'react';
import logo from "./logo.png";
import './App.css';
import CourseInfo from './Components/CourseInfo';

function App() {
  return (
    <div className="container-fluid">
      <div className="text-center bg-info p-3">
        <img src={logo} alt="logo" />
      </div>
      <CourseInfo />
    </div>
  );
}

export default App;
