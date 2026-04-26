import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "../ContentComponents";
import Course from "../../../Components/Course/Course";
import fakeData from "../../../fakeData/fakeData";
import "./AllCourses.css";

export const AllCourses = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [maxPrice, setMaxPrice] = useState(100);

  // Sync state with URL if user searches from navbar
  useEffect(() => {
    if (initialQuery !== searchQuery) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "web-development", label: "Web Development" },
    { value: "backend", label: "Backend & Systems" },
    { value: "data-science", label: "Data Science & AI" },
    { value: "cloud-computing", label: "Cloud & DevOps" },
    { value: "mobile", label: "Mobile Dev" },
    { value: "blockchain", label: "Blockchain" },
    { value: "database", label: "Databases" }
  ];

  const levels = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];

  const filteredCourses = useMemo(() => {
    return fakeData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesPrice = course.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedLevel, maxPrice]);

  return (
    <div className="page-container glassmorphism all-courses-page">
      <PageHeader
        title="Full Course Catalog"
        subtitle="Explore our comprehensive collection of technical courses designed to accelerate your career."
      />

      <div className="catalog-layout">
        {/* Filter Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-group">
            <h3>Search</h3>
            <input 
              type="text" 
              className="filter-input"
              placeholder="Search courses or instructors..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <h3>Category</h3>
            <div className="radio-list">
              {categories.map(cat => (
                <label key={cat.value} className="radio-label">
                  <input 
                    type="radio" 
                    name="category" 
                    value={cat.value}
                    checked={selectedCategory === cat.value}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Level</h3>
            <div className="radio-list">
              {levels.map(level => (
                <label key={level.value} className="radio-label">
                  <input 
                    type="radio" 
                    name="level" 
                    value={level.value}
                    checked={selectedLevel === level.value}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  />
                  <span>{level.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Max Price: ${maxPrice}</h3>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="price-slider"
            />
            <div className="price-labels">
              <span>Free</span>
              <span>$100</span>
            </div>
          </div>

          <button 
            className="btn-clear-filters"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedLevel("all");
              setMaxPrice(100);
            }}
          >
            Clear Filters
          </button>
        </aside>

        {/* Results Grid */}
        <main className="catalog-results">
          <div className="results-header">
            <h2>Showing {filteredCourses.length} result{filteredCourses.length !== 1 ? 's' : ''}</h2>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <Course key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="no-results glassmorphism">
              <h3>No courses found</h3>
              <p>Try adjusting your filters or search query to find what you're looking for.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
