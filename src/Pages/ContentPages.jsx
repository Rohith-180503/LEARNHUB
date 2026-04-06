import React from 'react';
import './ContentPages.css';

export const WebDevelopment = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Web Development</h1>
    <p>Master the modern web. Learn React, Node.js, and build full-stack interactive applications.</p>
    <div className="features-grid">
      <div className="feature-card"><h3>Frontend</h3><p>React, HTML/CSS, JS</p></div>
      <div className="feature-card"><h3>Backend</h3><p>Node.js, Express, databases</p></div>
    </div>
  </div>
);

export const DataScience = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Data Science & AI</h1>
    <p>Unlock the power of data. From machine learning algorithms to neural networks and generative AI.</p>
    <div className="features-grid">
      <div className="feature-card"><h3>Python & ML</h3><p>Pandas, Scikit-Learn, TensorFlow</p></div>
      <div className="feature-card"><h3>Data Analysis</h3><p>Visualization, Statistics, SQL</p></div>
    </div>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Cloud Computing</h1>
    <p>Build scalable infrastructure. Master AWS, Azure, and Google Cloud platforms.</p>
    <div className="features-grid">
      <div className="feature-card"><h3>AWS Solutions</h3><p>EC2, S3, Lambda, Architecture</p></div>
      <div className="feature-card"><h3>DevOps</h3><p>Docker, Kubernetes, CI/CD</p></div>
    </div>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">UI/UX Design</h1>
    <p>Create stunning user experiences. Learn Figma, prototyping, and user psychology.</p>
    <div className="features-grid">
      <div className="feature-card"><h3>Figma Mastery</h3><p>Component systems, Auto-layout</p></div>
      <div className="feature-card"><h3>UX Research</h3><p>User testing, Wireframing, Personas</p></div>
    </div>
  </div>
);

export const Blog = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Blog & Articles</h1>
    <p>Insights, tutorials, and latest news from the tech world.</p>
    <ul className="article-list">
      <li>The Future of React in 2026</li>
      <li>How to Land Your First Tech Job</li>
      <li>Demystifying Machine Learning Models</li>
    </ul>
  </div>
);

export const Community = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Student Community</h1>
    <p>Join thousands of learners worldwide. Connect, collaborate, and grow together.</p>
    <button className="primary-btn">Join our Discord</button>
  </div>
);

export const SuccessStories = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Success Stories</h1>
    <p>Read about students who transformed their careers.</p>
    <div className="testimonial-card">
      <p>"I went from zero coding knowledge to a Senior Frontend Developer in 18 months."</p>
      <span>- Sarah J.</span>
    </div>
  </div>
);

export const Instructors = () => (
  <div className="page-container glassmorphism">
    <h1 className="gradient-text">Meet Our Expert Instructors</h1>
    <p className="section-description">
      Learn from a diverse group of industry professionals who bring years of real-world experience directly to your screen. Our instructors are passionate about sharing their knowledge and committed to guiding you through every step of your educational journey.
    </p>
    <div className="instructor-grid">
      <div className="instructor-card">
        <h3>John Doe</h3>
        <h4>Lead Frontend Developer</h4>
        <p>Formerly a Senior Engineer at Google, John specializes in modern JavaScript frameworks with a strong focus on React and performance optimization.</p>
      </div>
      <div className="instructor-card">
        <h3>Jane Smith</h3>
        <h4>Principal Data Scientist</h4>
        <p>Jane has spent over a decade leading artificial intelligence research and has spearheaded major machine learning initiatives at top-tier tech firms.</p>
      </div>
      <div className="instructor-card">
        <h3>Michael Lee</h3>
        <h4>Cloud Solutions Architect</h4>
        <p>With an extensive background in scalable infrastructure, Michael helps students master AWS and Kubernetes, bridging the gap between development and operations.</p>
      </div>
      <div className="instructor-card">
        <h3>Sarah Jenkins</h3>
        <h4>UI/UX Design Director</h4>
        <p>Sarah is an award-winning designer whose curriculum focuses on user-centric design principles, accessibility, and high-fidelity prototyping using Figma.</p>
      </div>
      <div className="instructor-card">
        <h3>Dr. Emily Watson</h3>
        <h4>Cybersecurity Expert</h4>
        <p>Emily has served as a consultant for numerous Fortune 500 companies, educating students on ethical hacking, network defense, and cryptography.</p>
      </div>
      <div className="instructor-card">
        <h3>David Chen</h3>
        <h4>Full-Stack Engineering Lead</h4>
        <p>A veteran in the startup ecosystem, David provides practical, hands-on tutorials for building scalable web applications from the ground up using Node.js and MongoDB.</p>
      </div>
    </div>
  </div>
);
