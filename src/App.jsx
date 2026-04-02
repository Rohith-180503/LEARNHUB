import "./App.css";
import CourseInfo from "./Components/CourseInfo/CourseInfo";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="container-fluid">
      <div className="text-center bg-info p-3">
        <img src={logo} alt="logo" className="logo" />
        <h2>Online Learning Platform</h2>
      </div>

      <CourseInfo />
    </div>
  );
}

export default App;
