import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./CoursePlayer.css";

const API = "http://localhost:3001/api";

export default function CoursePlayer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeLecture, setActiveLecture] = useState(null);
  const [course, setCourse] = useState(null);
  const [curriculum, setCurriculum] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourseAndProgress = useCallback(async () => {
    setIsLoading(true);
    try {
      // 1. Fetch course details (includes curriculum)
      const cRes = await fetch(`${API}/courses/${courseId}`);
      const cData = await cRes.json();
      if (cRes.ok) {
        setCourse(cData);
        setCurriculum(cData.curriculum || []);
        if (cData.curriculum?.length > 0 && cData.curriculum[0].lessons?.length > 0) {
          setActiveLecture(cData.curriculum[0].lessons[0]);
        }
      }

      // 2. Fetch progress
      const pRes = await fetch(`${API}/progress/${courseId}`, { credentials: "include" });
      const pData = await pRes.json();
      if (pRes.ok) {
        setCompletedLessons(pData); // Array of IDs
      }
    } catch (e) {
      console.error("Failed to load player data:", e);
    } finally {
      setIsLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    fetchCourseAndProgress();
  }, [fetchCourseAndProgress]);

  const toggleComplete = async (lessonId) => {
    const isCompleted = completedLessons.includes(lessonId);
    try {
      const res = await fetch(`${API}/progress/${lessonId}`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: isCompleted ? 0 : 1 }),
      });
      if (res.ok) {
        setCompletedLessons(prev => 
          isCompleted ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
        );
      }
    } catch (e) {
      console.error("Progress update failed:", e);
    }
  };

  if (isLoading) return <div className="course-player-layout loading">Loading learning environment...</div>;
  if (!course) return <div className="course-player-error">Course not found.</div>;

  const currentLecture = activeLecture;

  return (
    <div className="course-player-layout">
      {/* Main Content Area */}
      <div className="course-player-main">
        {/* Video Area */}
        <div className="video-player-container">
          {currentLecture?.video_url ? (
            <video 
              key={currentLecture.id}
              className="main-video"
              controls
              autoPlay
              src={currentLecture.video_url}
            />
          ) : (
            <div className="video-placeholder">
              <span className="play-icon">▶</span>
              <h2>{currentLecture?.title}</h2>
              <p>Video not available</p>
            </div>
          )}
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
                <span>{mod.lessons?.length || 0} lessons</span>
              </div>
              <ul className="module-lectures">
                {mod.lessons.map(lesson => (
                  <li 
                    key={lesson.id} 
                    className={`lecture-item ${activeLecture?.id === lesson.id ? "active" : ""}`}
                    onClick={() => setActiveLecture(lesson)}
                  >
                    <div className="lecture-status">
                      <input 
                        type="checkbox" 
                        checked={completedLessons.includes(lesson.id)} 
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleComplete(lesson.id);
                        }}
                      />
                    </div>
                    <div className="lecture-info">
                      <span className="lecture-title">{lesson.title}</span>
                      <span className="lecture-duration">▶ {lesson.duration}</span>
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
