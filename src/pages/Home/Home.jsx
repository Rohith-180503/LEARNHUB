import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import Course from "../../Components/Course/Course";
import { filterCourses, getUniqueCategories } from "../../utils/courseFilters";
import "./Home.css";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const categories = useMemo(() => getUniqueCategories(fakeData), []);

  // Update URL when search or categories change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    }
    setSearchParams(params);
  }, [searchQuery, selectedCategories, setSearchParams]);

  // Load categories from URL on mount
  useEffect(() => {
    const categoriesParam = searchParams.get("categories");
    if (categoriesParam) {
      setSelectedCategories(categoriesParam.split(","));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCourses = useMemo(() => {
    return filterCourses(fakeData, {
      categories: selectedCategories.length > 0 ? selectedCategories : categories,
      searchQuery,
    });
  }, [selectedCategories, searchQuery, categories]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategories.length > 0 || searchQuery;

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero__glow" aria-hidden />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Professional courses - Learn at your pace</p>
          <h1 id="home-heading" className="home-hero__title">
            Build skills that{" "}
            <span className="home-hero__title-accent">move your career forward</span>
          </h1>
          <p className="home-hero__lead">
            Expert-led programs in development, data, cloud, and design -
            structured for clarity, depth, and real-world practice. Browse the
            catalog and add courses to your cart to get started.
          </p>
        </div>
      </section>

      <section className="home-catalog" aria-labelledby="catalog-heading">
        <div className="home-catalog__inner">
          <header className="home-catalog__header">
            <h2 id="catalog-heading" className="home-catalog__title">
              Course catalog
            </h2>
            <p className="home-catalog__subtitle">
              {filteredCourses.length} of {fakeData.length} programs available
            </p>
          </header>

          {/* Filter Sidebar */}
          <div className="catalog-with-filters">
            <aside className="filter-sidebar" aria-label="Course filters">
              {/* Search Input */}
              <div className="filter-section">
                <label htmlFor="search-input" className="filter-title">
                  Search Courses
                </label>
                <input
                  id="search-input"
                  type="text"
                  placeholder="e.g., React, Python..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  aria-label="Search courses by title, instructor, or description"
                />
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Filter by Category</h3>
                <div className="filter-categories">
                  {categories.map(category => (
                    <label key={category} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        aria-label={`Filter by ${category.replace("-", " ")}`}
                      />
                      <span className="checkbox-label">
                        {category.replace("-", " ")}
                      </span>
                      <span className="checkbox-count">
                        ({fakeData.filter(c => c.category === category).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button onClick={handleClearFilters} className="btn-clear-filters">
                  Clear Filters
                </button>
              )}
            </aside>

            {/* Courses Grid */}
            <div className="catalog-content">
              {filteredCourses.length > 0 ? (
                <div className="course-grid">
                  {filteredCourses.map((course) => (
                    <Course key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No courses found matching your filters.</p>
                  <button onClick={handleClearFilters} className="btn-reset">
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
