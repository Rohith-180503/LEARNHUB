import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';


describe('Online Learning App', () => {

  test('renders CART heading', () => {
    render(<App />);
    const cartHeading = screen.getByText(/CART/i);
    expect(cartHeading).toBeInTheDocument();
  });

  test('renders at least one course', () => {
    render(<App />);
    // Check if a course title from fakeData is rendered
    const courseTitle = screen.getByText(/Complete Linux Training/i);
    expect(courseTitle).toBeInTheDocument();
  });

  test('Enroll button is clickable', () => {
    render(<App />);
    const enrollButton = screen.getAllByText(/Enroll/i)[0];
    expect(enrollButton).toBeInTheDocument();
  });

});
