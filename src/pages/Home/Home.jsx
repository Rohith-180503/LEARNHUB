import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import Course from "../../Components/Course/Course";
import { filterCourses, getUniqueCategories } from "../../utils/courseFilters";
import "./Home.css";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const categories = useMemo(() => getUniqueCategories(fakeData), []);

  // Keep search state in sync when the query string changes externally
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

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
        <div className="home-hero__backdrop" aria-hidden>
          <div className="home-hero__glow home-hero__glow--amber" />
          <div className="home-hero__glow home-hero__glow--teal" />
          <div className="home-hero__grid" />
          <div className="home-hero__silhouette home-hero__silhouette--left" />
          <div className="home-hero__silhouette home-hero__silhouette--center" />
          <div className="home-hero__silhouette home-hero__silhouette--right" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">Professional courses for ambitious learners</p>
            <h1 id="home-heading" className="home-hero__title">
              Learn from bold ideas,
              <span className="home-hero__title-accent"> built into real careers</span>
            </h1>
            <p className="home-hero__lead">
              A richer learning experience for engineering, data, cloud, design,
              and modern tech paths. Explore curated programs, standout mentors,
              and immersive course journeys designed to feel premium from the
              first click.
            </p>

            <div className="home-hero__actions">
              <a href="#catalog-heading" className="home-hero__cta home-hero__cta--primary">
                Explore programs
              </a>
              <Link to="/instructors" className="home-hero__cta home-hero__cta--secondary">
                Meet instructors
              </Link>
            </div>

            <div className="home-hero__metrics" aria-label="Platform highlights">
              <div className="home-hero__metric">
                <strong>44+</strong>
                <span>Specialized courses</span>
              </div>
              <div className="home-hero__metric">
                <strong>12k+</strong>
                <span>Learners reached</span>
              </div>
              <div className="home-hero__metric">
                <strong>4.8/5</strong>
                <span>Average satisfaction</span>
              </div>
            </div>
          </div>

          <aside className="home-hero__panel glassmorphism" aria-label="Featured learning tracks">
            <div className="home-hero__panel-badge">Curated paths</div>
            <h2 className="home-hero__panel-title">Designed like a modern academy, not a plain catalog.</h2>
            <div className="home-hero__tracks">
              <div className="home-hero__track">
                <span className="home-hero__track-dot home-hero__track-dot--amber" />
                <div>
                  <h3>AI Systems</h3>
                  <p>LLMs, MLOps, evaluation, and production workflows.</p>
                </div>
              </div>
              <div className="home-hero__track">
                <span className="home-hero__track-dot home-hero__track-dot--teal" />
                <div>
                  <h3>Cloud Engineering</h3>
                  <p>Kubernetes, IaC, architecture, and resilient deployment.</p>
                </div>
              </div>
              <div className="home-hero__track">
                <span className="home-hero__track-dot home-hero__track-dot--coral" />
                <div>
                  <h3>Product Design</h3>
                  <p>Research-informed UI, systems thinking, and polished execution.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-signature" aria-label="Platform signatures">
        <div className="home-signature__item">
          <span className="home-signature__icon">01</span>
          <div>
            <h2>Editorial visual identity</h2>
            <p>Warm gradients, layered silhouettes, and a more premium first impression.</p>
          </div>
        </div>
        <div className="home-signature__item">
          <span className="home-signature__icon">02</span>
          <div>
            <h2>Focused discovery</h2>
            <p>Filters, search, and category grouping that help learners orient quickly.</p>
          </div>
        </div>
        <div className="home-signature__item">
          <span className="home-signature__icon">03</span>
          <div>
            <h2>Career-shaped learning</h2>
            <p>Programs framed around outcomes, mentors, and practical skill building.</p>
          </div>
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
