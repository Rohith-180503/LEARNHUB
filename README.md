<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Online Learning Platform - Project Documentation</title>
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f6f8;
  color: #222;
  line-height: 1.6;
}

.header {
  background: linear-gradient(90deg, #0077ff, #00c6ff);
  color: white;
  text-align: center;
  padding: 40px 20px;
}

.subtitle {
  opacity: 0.9;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 30px 20px;
}

section {
  margin-bottom: 40px;
}

h2 {
  border-bottom: 2px solid #0077ff;
  padding-bottom: 6px;
  margin-bottom: 15px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.component {
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-left: 5px solid #0077ff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.grid-item {
  background: #0077ff;
  color: white;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
}

ul {
  padding-left: 20px;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #111;
  color: white;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #e0e0e0;
  }

  .card, .component {
    background: #1e1e1e;
  }

  h2 {
    border-color: #00c6ff;
  }

  .grid-item {
    background: #00c6ff;
  }
}
</head>
<body>

  <header class="header">
    <h1>Online Learning Platform</h1>
    <p class="subtitle">Full Project Documentation</p>
  </header>

  <main class="container">

    <section>
      <h2>1. Project Overview</h2>
      <p>
        This is a React-based Online Learning Platform where users can browse courses,
        enroll in them, and manage enrolled courses inside a dynamic cart panel.
      </p>

      <h3>Main Features</h3>
      <ul>
        <li>Course listing with image, title, instructor, and price</li>
        <li>Cart panel with enrolled courses and total price calculation</li>
        <li>Dynamic state updates using React</li>
        <li>Conditional button rendering (Enroll / Enrolled)</li>
        <li>Responsive layout using Flexbox and Grid</li>
        <li>Unit testing with Vitest & React Testing Library</li>
      </ul>
    </section>

    <section>
      <h2>2. Architecture</h2>
      <div class="card">
        <p><strong>Component-Based Design:</strong> Each UI section is modular and reusable.</p>
        <p><strong>State Management:</strong> Managed using <code>useState</code>.</p>
        <p><strong>Props:</strong> Data and functions passed from parent to child components.</p>
      </div>
    </section>

    <section>
      <h2>3. Core Components</h2>

      <div class="component">
        <h3>Course.jsx</h3>
        <ul>
          <li>Displays single course card</li>
          <li>Uses <code>some()</code> to check enrollment</li>
          <li>Conditional button rendering</li>
        </ul>
      </div>

      <div class="component">
        <h3>Cart.jsx</h3>
        <ul>
          <li>Displays enrolled courses</li>
          <li>Uses <code>reduce()</code> to calculate total</li>
          <li>Uses <code>filter()</code> to remove course</li>
        </ul>
      </div>

      <div class="component">
        <h3>CourseInfo.jsx</h3>
        <ul>
          <li>Main state container</li>
          <li>Handles addToCart & removeFromCart</li>
          <li>Renders Course and Cart components</li>
        </ul>
      </div>

      <div class="component">
        <h3>App.jsx</h3>
        <ul>
          <li>Root component</li>
          <li>Header and main layout</li>
        </ul>
      </div>

    </section>

    <section>
      <h2>4. React Concepts Used</h2>
      <div class="grid">
        <div class="grid-item">useState</div>
        <div class="grid-item">Props</div>
        <div class="grid-item">Conditional Rendering</div>
        <div class="grid-item">Array.map()</div>
        <div class="grid-item">Array.filter()</div>
        <div class="grid-item">Array.reduce()</div>
        <div class="grid-item">Array.some()</div>
        <div class="grid-item">Event Handling</div>
      </div>
    </section>

    <section>
      <h2>5. Styling</h2>
      <ul>
        <li>CSS Flexbox & Grid for layout</li>
        <li>Hover animations and shadows</li>
        <li>Responsive design</li>
        <li>Dark mode support using prefers-color-scheme</li>
      </ul>
    </section>

    <section>
      <h2>6. Testing</h2>
      <ul>
        <li>Tested with Vitest</li>
        <li>React Testing Library used for UI validation</li>
        <li>Ensures cart rendering and button interactions</li>
      </ul>
    </section>

    <section>
      <h2>7. Future Improvements</h2>
      <ul>
        <li>Search & Filter functionality</li>
        <li>Sorting by price or instructor</li>
        <li>User Authentication</li>
        <li>Backend Integration</li>
      </ul>
    </section>

  </main>

  <footer>
    <p>Developed by Rohith Nidumolu</p>
  </footer>

</body>
</html>
