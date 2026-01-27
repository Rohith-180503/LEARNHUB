<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Online Learning Website - Full Explanation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #333;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    h3 {
      margin-top: 20px;
    }
    pre {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 10px;
      overflow-x: auto;
      border-radius: 6px;
    }
    code {
      font-family: 'Courier New', monospace;
      color: #e74c3c;
    }
    section {
      margin-bottom: 50px;
    }
    ul {
      margin-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <h1>Online Learning Website - Full Project Explanation</h1>

  <section>
    <h2>1. Overview of the Project</h2>
    <p>This project is an <strong>Online Learning Platform</strong> built using <strong>React</strong>. Users can view courses, enroll in them, and see the enrolled courses in a cart panel. It demonstrates modern React concepts such as <code>useState</code>, component-based architecture, props, and conditional rendering. The UI is built with <strong>CSS Flexbox and Grid</strong> for responsive layout and has hover effects and animations.</p>
    <p>Main features include:</p>
    <ul>
      <li>Course display with images, titles, instructor names, and prices</li>
      <li>Cart panel showing enrolled courses, total price, and ability to remove courses</li>
      <li>Dynamic updating of cart and buttons using React state</li>
      <li>Responsive design for desktop and mobile</li>
      <li>Testing with Vitest and React Testing Library</li>
    </ul>
  </section>

  <section>
    <h2>2. index.html</h2>
    <p>This is the main HTML file. In React, we usually only have one HTML file because React dynamically renders the UI. Key points:</p>
    <ul>
      <li><code>&lt;div id="root"&gt;&lt;/div&gt;</code>: Placeholder for React app.</li>
      <li><code>&lt;script type="module"&gt;</code>: Loads the main JSX entry point as a module.</li>
      <li>Meta tags ensure correct character encoding and responsive layout.</li>
      <li>Title is displayed on the browser tab.</li>
    </ul>
    <pre>
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;link rel="icon" type="image/svg+xml" href="/vite.svg" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;online-learning-website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;
    &lt;script type="module" src="/src/main.jsx"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </pre>
  </section>

  <section>
    <h2>3. fakeData.js</h2>
    <p>This file contains mock data representing courses. It's like a fake database.</p>
    <ul>
      <li>Each course is an object with <code>id</code>, <code>title</code>, <code>instructor</code>, <code>price</code>, and <code>img</code>.</li>
      <li>Images are hosted online via URLs to display logos.</li>
      <li>The array is exported using <code>export default</code> to be imported into other components.</li>
      <li>Using a separate file allows easier maintenance and scalability.</li>
    </ul>
    <pre>
const fakeData = [
  { id: 1, title: "Complete Linux Training", instructor: "Jason Cannon", price: 49.99, img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/linux.png" },
  { id: 2, title: "Modern JavaScript from Scratch", instructor: "Jonas Schmedtmann", price: 39.99, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 3, title: "HTML & CSS Bootcamp", instructor: "Colt Steele", price: 29.99, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  ...
];
export default fakeData;
    </pre>
  </section>

  <section>
    <h2>4. Course.jsx</h2>
    <p>This component renders a single course card. Key points:</p>
    <ul>
      <li>Receives <code>course</code>, <code>addToCart</code>, and <code>cart</code> as props from parent.</li>
      <li>Uses <strong>destructuring</strong> to extract course details.</li>
      <li>Checks if the course is already in the cart with <code>some()</code>.</li>
      <li>Button text and disabled state are conditional based on enrollment.</li>
      <li>Image, title, instructor, and price are displayed using JSX.</li>
      <li>Hover effect and styling come from CSS classes.</li>
    </ul>
    <pre>
const Course = ({ course, addToCart, cart }) =&gt; {
  const { title, instructor, price, img } = course;
  const isEnrolled = cart.some(item =&gt; item.id === course.id);

  return (
    &lt;div className="course-card"&gt;
      &lt;img src={img} alt={title} /&gt;
      &lt;h3&gt;{title}&lt;/h3&gt;
      &lt;p&gt;Instructor: {instructor}&lt;/p&gt;
      &lt;p&gt;${price}&lt;/p&gt;
      &lt;button onClick={() =&gt; addToCart(course)} disabled={isEnrolled}&gt;
        {isEnrolled ? "Enrolled" : "Enroll"}
      &lt;/button&gt;
    &lt;/div&gt;
  );
};
export default Course;
    </pre>
  </section>

  <section>
    <h2>5. Cart.jsx</h2>
    <p>This component displays the enrolled courses and total price.</p>
    <ul>
      <li>Calculates total using <code>reduce()</code>.</li>
      <li>Displays each enrolled course with a remove button.</li>
      <li><code>removeFromCart</code> filters out the course by <code>id</code>.</li>
      <li>Updates automatically when the <code>cart</code> state changes.</li>
      <li>CSS dark theme with contrast for readability.</li>
    </ul>
    <pre>
const Cart = ({ cart, removeFromCart }) =&gt; {
  const total = cart.reduce((sum, course) =&gt; sum + course.price, 0);

  return (
    &lt;div className="cart-panel"&gt;
      &lt;h2&gt;CART&lt;/h2&gt;
      &lt;hr /&gt;
      &lt;h5&gt;Enrolled Courses: {cart.length}&lt;/h5&gt;
      {cart.map(course =&gt; (
        &lt;div key={course.id} className="course-item"&gt;
          &lt;span&gt;{course.title}&lt;/span&gt;
          &lt;span&gt;
            ${course.price}
            &lt;button onClick={() =&gt; removeFromCart(course.id)} style={{ marginLeft: "8px" }}&gt;❌&lt;/button&gt;
          &lt;/span&gt;
        &lt;/div&gt;
      ))}
      &lt;hr /&gt;
      &lt;h5&gt;Total: ${total.toFixed(2)}&lt;/h5&gt;
    &lt;/div&gt;
  );
};
export default Cart;
    </pre>
  </section>

  <section>
    <h2>6. CourseInfo.jsx</h2>
    <p>Main component combining course cards and cart panel.</p>
    <ul>
      <li><strong>useState:</strong> Maintains cart state: <code>const [cart, setCart] = useState([])</code>.</li>
      <li><strong>addToCart:</strong> Adds course if not already enrolled.</li>
      <li><strong>removeFromCart:</strong> Removes course from cart using <code>filter()</code>.</li>
      <li>Passes <code>cart</code> and functions as props to child components.</li>
      <li>Uses CSS grid/flex for responsive layout: cart on left, courses on right.</li>
    </ul>
    <pre>
import { useState } from "react";
import fakeData from "../../fakeData/fakeData";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const CourseInfo = () =&gt; {
  const [cart, setCart] = useState([]);

  const addToCart = (course) =&gt; {
    if (!cart.find(item =&gt; item.id === course.id)) setCart([...cart, course]);
  };

  const removeFromCart = (id) =&gt; setCart(cart.filter(item =&gt; item.id !== id));

  return (
    &lt;div className="row p-4"&gt;
      &lt;div className="col-md-4"&gt;
        &lt;Cart cart={cart} removeFromCart={removeFromCart} /&gt;
      &lt;/div&gt;
      &lt;div className="col-md-8"&gt;
        &lt;div className="course-grid"&gt;
          {fakeData.map(course =&gt; (
            &lt;Course key={course.id} course={course} addToCart={addToCart} cart={cart} /&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};
export default CourseInfo;
    </pre>
  </section>

  <section>
    <h2>7. App.jsx</h2>
    <p>The root component of the application.</p>
    <ul>
      <li>Renders the top header with logo and title.</li>
      <li>Renders <code>CourseInfo</code> to show courses and cart.</li>
      <li>CSS classes used for spacing, layout, and styling.</li>
    </ul>
    <pre>
import "./App.css";
import CourseInfo from "./Components/CourseInfo/CourseInfo";
import logo from "./assets/logo.png";

function App() {
  return (
    &lt;div className="container-fluid"&gt;
      &lt;div className="text-center bg-info p-3"&gt;
        &lt;img src={logo} alt="logo" className="logo" /&gt;
        &lt;h2&gt;Online Learning Platform&lt;/h2&gt;
      &lt;/div&gt;
      &lt;CourseInfo /&gt;
    &lt;/div&gt;
  );
}
export default App;
    </pre>
  </section>

  <section>
    <h2>8. index.jsx</h2>
    <p>Entry point for rendering React app to the DOM.</p>
    <ul>
      <li><code>createRoot(document.getElementById("root"))</code>: Mounts React app into root div.</li>
      <li><code>StrictMode</code>: Helps detect potential issues in development.</li>
      <li>Imports global CSS for styling.</li>
    </ul>
    <pre>
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);
    </pre>
  </section>

  <section>
    <h2>9. CSS Explanation (App.css & index.css)</h2>
    <p>The CSS styles the layout and appearance of the entire app:</p>
    <ul>
      <li>Global body styles: font, color, background, padding.</li>
      <li>Logo: hover shadow effect and optional spin animation.</li>
      <li>Course card: shadow, hover animation, rounded corners, spacing.</li>
      <li>Buttons: background, hover color, padding, rounded corners, disabled state.</li>
      <li>Cart panel: dark background, white text, spacing between items, border-radius.</li>
      <li>Responsive grid layout for courses using <code>flex-wrap</code> and <code>gap</code>.</li>
      <li>Media queries for light/dark mode using <code>prefers-color-scheme</code>.</li>
    </ul>
  </section>

  <section>
    <h2>10. Testing (Vitest + React Testing Library)</h2>
    <ul>
      <li>Ensures the CART panel renders correctly.</li>
      <li>Ensures at least one course is displayed.</li>
      <li>Ensures Enroll buttons are rendered and clickable.</li>
      <li>Testing provides confidence that UI and state updates work correctly.</li>
    </ul>
  </section>

  <section>
    <h2>11. Key Concepts and Best Practices</h2>
    <ul>
      <li><strong>Component-based Architecture:</strong> Each UI element is modular and reusable.</li>
      <li><strong>React Props:</strong> Pass data/functions from parent to child.</li>
      <li><strong>useState:</strong> Manages dynamic state, triggers re-render on update.</li>
      <li><strong>Array Methods:</strong>
        <ul>
          <li><code>map()</code>: Render a list of components.</li>
          <li><code>some()</code>: Check if an item exists.</li>
          <li><code>reduce()</code>: Calculate total price.</li>
          <li><code>filter()</code>: Remove item from array.</li>
        </ul>
      </li>
      <li><strong>Conditional Rendering:</strong> Dynamically change button text and disable it if already enrolled.</li>
      <li><strong>CSS Flexbox & Grid:</strong> Responsive layouts, card alignment, spacing.</li>
      <li><strong>Event Handling:</strong> <code>onClick</code> for adding/removing courses.</li>
      <li><strong>Testing:</strong> Ensures app functions correctly under different scenarios.</li>
      <li><strong>Code Maintainability:</strong> Separate files for data, components, and CSS makes the app modular and easy to update.</li>
      <li><strong>Accessibility:</strong> Alt text for images, buttons accessible for screen readers.</li>
      <li><strong>Future Improvements:</strong> Add search, filters, sorting, login, user authentication, backend integration.</li>
    </ul>
  </section>

</body>
</html>
