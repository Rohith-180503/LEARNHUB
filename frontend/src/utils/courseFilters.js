/**
 * Course filtering and search utilities
 */

/**
 * Get all unique categories from courses
 * @param {Array} courses - Array of course objects
 * @returns {Array} Sorted array of unique category strings
 */
export function getUniqueCategories(courses) {
  const categories = [...new Set(courses.map(course => course.category))];
  return categories.sort();
}

/**
 * Get courses filtered by category
 * @param {Array} courses - Array of course objects
 * @param {string|Array} category - Single category string or array of categories
 * @returns {Array} Filtered courses
 */
export function getCoursesByCategory(courses, category) {
  if (!category || (Array.isArray(category) && category.length === 0)) {
    return courses;
  }

  const categories = Array.isArray(category) ? category : [category];
  return courses.filter(course => categories.includes(course.category));
}

/**
 * Search courses by title, instructor, or description
 * @param {Array} courses - Array of course objects
 * @param {string} query - Search query string
 * @returns {Array} Filtered courses matching the search query
 */
export function searchCourses(courses, query) {
  if (!query || query.trim() === "") {
    return courses;
  }

  const lowerQuery = query.toLowerCase();
  return courses.filter(course => {
    const matchTitle = course.title.toLowerCase().includes(lowerQuery);
    const matchInstructor = course.instructor.toLowerCase().includes(lowerQuery);
    const matchDescription = course.description?.toLowerCase().includes(lowerQuery);

    return matchTitle || matchInstructor || matchDescription;
  });
}

/**
 * Get a single course by ID
 * @param {Array} courses - Array of course objects
 * @param {number} id - Course ID
 * @returns {Object|null} Course object or null if not found
 */
export function getCourseById(courses, id) {
  return courses.find(course => course.id === Number(id)) || null;
}

/**
 * Get courses from the same category (excluding the given course ID)
 * @param {Array} courses - Array of course objects
 * @param {string} category - Category to filter by
 * @param {number} excludeId - Course ID to exclude from results
 * @param {number} limit - Maximum number of related courses to return
 * @returns {Array} Related courses
 */
export function getRelatedCourses(courses, category, excludeId, limit = 4) {
  return getCoursesByCategory(courses, category)
    .filter(course => course.id !== excludeId)
    .slice(0, limit);
}

/**
 * Filter courses by multiple criteria
 * @param {Array} courses - Array of course objects
 * @param {Object} filters - Filter object with optional keys: categories (array), searchQuery (string), level (string)
 * @returns {Array} Filtered courses
 */
export function filterCourses(courses, filters = {}) {
  let filtered = [...courses];

  // Apply category filter
  if (filters.categories && filters.categories.length > 0) {
    filtered = getCoursesByCategory(filtered, filters.categories);
  }

  // Apply search filter
  if (filters.searchQuery) {
    filtered = searchCourses(filtered, filters.searchQuery);
  }

  // Apply level filter (optional)
  if (filters.level) {
    filtered = filtered.filter(course => course.level === filters.level);
  }

  return filtered;
}

/**
 * Get course statistics
 * @param {Array} courses - Array of course objects
 * @returns {Object} Statistics object
 */
export function getCourseStatistics(courses) {
  return {
    totalCourses: courses.length,
    totalEnrolled: courses.reduce((sum, course) => sum + course.studentsEnrolled, 0),
    averageRating: (courses.reduce((sum, course) => sum + course.rating, 0) / courses.length).toFixed(1),
    categoriesCount: getUniqueCategories(courses).length,
    averagePrice: (courses.reduce((sum, course) => sum + course.price, 0) / courses.length).toFixed(2),
  };
}
