# LearnHub

LearnHub is a React + Vite demo for browsing technical courses, adding them to a cart, and navigating supporting content pages for resources and instructors.

## Tech Stack

- React 19
- React Router 7
- React Toastify
- Bootstrap 5
- Vitest + React Testing Library

## Current Features

- Responsive navigation with desktop dropdowns and a mobile drawer
- Keyboard-accessible route navigation
- Shared cart state through React context
- Cart persistence in `localStorage`
- Safe theme persistence with fallback behavior when browser storage is blocked
- Consistent pricing between the main cart and the cart flyout
- Static content pages for catalog, resources, and instructors

## Project Structure

```text
src/
  Components/
    Cart/
    Course/
    Navbar/
  context/
    CartContext.jsx
  fakeData/
    fakeData.js
  pages/
    Content/
    Home/
  styles/
    App.css
    index.css
  utils/
    cartPricing.js
    storage.js
```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates the production bundle
- `npm test -- --run` runs the test suite once
- `npm run lint` runs ESLint

## Testing Focus

The test suite currently covers:

- home page rendering
- keyboard-accessible navigation to nested routes
- add-to-cart behavior and price calculations
- safe rendering when storage access throws

## Notes

- Course data is static and stored in `src/fakeData/fakeData.js`.
- Checkout and "save for later" are intentionally placeholder interactions.
- Images are loaded from external CDNs, so offline rendering will not show course artwork.
