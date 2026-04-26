/**
 * Centralized API configuration.
 * Uses environment variable VITE_API_URL if present, otherwise defaults to localhost.
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const ENDPOINTS = {
  COURSES: `${API_BASE_URL}/courses`,
  AUTH: `${API_BASE_URL}/auth`,
  CART: `${API_BASE_URL}/cart`,
  PROGRESS: `${API_BASE_URL}/progress`,
  PAYMENTS: `${API_BASE_URL}/payments`,
  ENROLLMENTS: `${API_BASE_URL}/enrollments`,
};
