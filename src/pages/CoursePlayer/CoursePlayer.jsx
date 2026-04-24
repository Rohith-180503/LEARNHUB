import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getCourseById } from "../../utils/courseFilters";
import fakeData from "../../fakeData/fakeData";
import "./CoursePlayer.css";

// Generate mock curriculum data if not present
const generateMockCurriculum = () => {
  return [
    {
      id: "m1",
      title: "Module 1: Introduction",
      lectures: [
        { id: "l1", title: "Course Overview", duration: "05:20", completed: true },
        { id: "l2", title: "Environment Setup", duration: "12:45", completed: true },
        { id: "l3", title: "Basic Concepts", duration: "18:10", completed: false }
      ]
    },
    {
      id: "m2",
      title: "Module 2: Core Fundamentals",
      lectures: [
        { id: "l4", title: "Deep Dive into Basics", duration: "25:30", completed: false },
        { id: "l5", title: "Best Practices", duration: "14:15", completed: false },
        { id: "l6", title: "Common Pitfalls", duration: "09:50", completed: false }
      ]
    },
    {
      id: "m3",
      title: "Module 3: Advanced Topics",
      lectures: [
        { id: "l7", title: "Advanced Architecture", duration: "32:10", completed: false },
        { id: "l8", title: "Performance Optimization", duration: "28:40", completed: false },
        { id: "l9", title: "Final Project Overview", duration: "10:00", completed: false }
      ]
    }
  ];
};

export default function CoursePlayer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeLecture, setActiveLecture] = useState("l1");

  const course = getCourseById(fakeData, courseId);
  const curriculum = course?.curriculum || generateMockCurriculum();

  if (!course) {
    return <div className="course-player-error">Course not found.</div>;
  }

  // Find the active lecture details
  let currentLectureTitle = "";
  curriculum.forEach(mod => {
    const found = mod.lectures.find(l => l.id === activeLecture);
    if (found) currentLectureTitle = found.title;
  });

  return (
    <div className="course-player-layout">
      {/* Main Content Area */}
      <div className="course-player-main">
        {/* Video Area (Mock) */}
        <div className="video-player-container">
          <div className="video-placeholder">
            <span className="play-icon">▶</span>
            <h2>{currentLectureTitle}</h2>
            <p>Video player integration would go here</p>
          </div>
        </div>

        {/* Course Info & Tabs */}
        <div className="course-player-content">
          <h1>{course.title}</h1>
          
          <div className="player-tabs">
            <button 
              className={`player-tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button 
              className={`player-tab ${activeTab === "qa" ? "active" : ""}`}
              onClick={() => setActiveTab("qa")}
            >
              Q&A
            </button>
            <button 
              className={`player-tab ${activeTab === "notes" ? "active" : ""}`}
              onClick={() => setActiveTab("notes")}
            >
              Notes
            </button>
          </div>

          <div className="player-tab-content">
            {activeTab === "overview" && (
              <div className="tab-pane">
                <h3>About this course</h3>
                <p>{course.description}</p>
                
                <div className="instructor-info">
                  <h4>Instructor</h4>
                  <p>{course.instructor}</p>
                </div>
              </div>
            )}
            
            {activeTab === "qa" && (
              <div className="tab-pane">
                <h3>Questions & Answers</h3>
                <p>No questions asked for this lecture yet. Be the first!</p>
                <button className="btn-ask">Ask a Question</button>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="tab-pane">
                <h3>My Notes</h3>
                <textarea 
                  className="notes-textarea" 
                  placeholder="Create a new note at current time..."
                  rows="4"
                ></textarea>
                <button className="btn-save-note">Save Note</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Curriculum Sidebar */}
      <div className="course-player-sidebar">
        <div className="sidebar-header">
          <h3>Course Content</h3>
          <Link to="/" className="back-to-dash">Exit Course</Link>
        </div>
        
        <div className="curriculum-list">
          {curriculum.map((mod) => (
            <div key={mod.id} className="curriculum-module">
              <div className="module-header">
                <h4>{mod.title}</h4>
                <span>{mod.lectures.length} lectures</span>
              </div>
              <ul className="module-lectures">
                {mod.lectures.map(lecture => (
                  <li 
                    key={lecture.id} 
                    className={`lecture-item ${activeLecture === lecture.id ? "active" : ""}`}
                    onClick={() => setActiveLecture(lecture.id)}
                  >
                    <div className="lecture-status">
                      <input type="checkbox" checked={lecture.completed} readOnly />
                    </div>
                    <div className="lecture-info">
                      <span className="lecture-title">{lecture.title}</span>
                      <span className="lecture-duration">▶ {lecture.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
