import React from 'react';
import './ContentPages.css';

export const AllCourses = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">The Comprehensive Catalog</h1>
      <p className="subtitle">Explore our diverse library of elite educational programs designed for modern career trajectories.</p>
    </div>
    <div className="features-grid">
      <div className="feature-card">
        <div className="icon">🚀</div>
        <h3>Engineering</h3>
        <p>From low-level systems to scalable web applications, our technical tracks are second to none.</p>
      </div>
      <div className="feature-card">
        <div className="icon">📊</div>
        <h3>Intelligence</h3>
        <p>Harness the transformative power of Data Science, Machine Learning, and Neural Architectures.</p>
      </div>
      <div className="feature-card">
        <div className="icon">☁️</div>
        <h3>Infrastructure</h3>
        <p>Master the orchestration of complex cloud environments and modern DevOps methodologies.</p>
      </div>
      <div className="feature-card">
        <div className="icon">🎨</div>
        <h3>Design</h3>
        <p>Synthesize aesthetics and utility through rigorous user-centric design and research frameworks.</p>
      </div>
    </div>
  </div>
);

export const WebDevelopment = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Advanced Web Engineering</h1>
      <p className="subtitle">Bridge the gap between frontend aesthetics and distributed backend systems with our industry-aligned curriculum.</p>
    </div>
    <div className="features-grid">
      <div className="feature-card">
        <h3>Reactive Architectures</h3>
        <p>Deep dive into React, Next.js, and modern state management to build highly performant user interfaces.</p>
      </div>
      <div className="feature-card">
        <h3>Distributed Systems</h3>
        <p>Architect resilient backends using Node.js, Go, and Microservices, focusing on scalability and security.</p>
      </div>
    </div>
  </div>
);

export const DataScience = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Intelligence & Analytics</h1>
      <p className="subtitle">Transition from raw data to actionable intelligence through rigorous statistical modeling and machine learning.</p>
    </div>
    <div className="features-grid">
      <div className="feature-card">
        <h3>Predictive Modeling</h3>
        <p>Master Scikit-Learn, TensorFlow, and PyTorch to build models that solve complex real-world problems.</p>
      </div>
      <div className="feature-card">
        <h3>Statistical Integrity</h3>
        <p>Explore Bayesian inference, deep analytics, and the ethics of artificial intelligence in modern society.</p>
      </div>
    </div>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Cloud & Infrastructure</h1>
      <p className="subtitle">Design, deploy, and manage highly available infrastructure across the world's leading cloud platforms.</p>
    </div>
    <div className="features-grid">
      <div className="feature-card">
        <h3>Cloud Orchestration</h3>
        <p>Master AWS, Azure, and Google Cloud through the lens of Infrastructure as Code (Terraform, Pulumi).</p>
      </div>
      <div className="feature-card">
        <h3>DevOps Lifecycle</h3>
        <p>Implement seamless CI/CD pipelines, container orchestration with Kubernetes, and robust observability.</p>
      </div>
    </div>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">User Experience Design</h1>
      <p className="subtitle">Synthesize human psychology and technical constraints to create interfaces that are as functional as they are beautiful.</p>
    </div>
    <div className="features-grid">
      <div className="feature-card">
        <h3>Human-Centric Research</h3>
        <p>Learn to conduct deep user interviews, synthesize personas, and validate hypotheses through rigorous testing.</p>
      </div>
      <div className="feature-card">
        <h3>Systematic Prototyping</h3>
        <p>Master Figma and advanced interaction design to create living design systems that scale across platforms.</p>
      </div>
    </div>
  </div>
);

export const Blog = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">The Insight Hub</h1>
      <p className="subtitle">Explore the latest technical deep-dives, industry analyses, and thought leadership from our expert faculty.</p>
    </div>
    <div className="article-grid">
      <div className="article-entry">
        <h3>The Paradigm Shift: Server-Side Rendering in 2026</h3>
        <p>A comprehensive analysis of how edge computing is redefining the boundaries of web performance.</p>
      </div>
      <div className="article-entry">
        <h3>Beyond the Hype: Ethical AI Architectures</h3>
        <p>Examining the technical frameworks required to build transparent and unbiased machine learning systems.</p>
      </div>
      <div className="article-entry">
        <h3>Zero Trust Infrastructure: The Security Mandate</h3>
        <p>Why modern organizations are abandoning perimeter security for a more granular, identity-based approach.</p>
      </div>
    </div>
  </div>
);

export const Community = () => (
  <div className="page-container glassmorphism text-center">
    <div className="content-header">
      <h1 className="gradient-text">Our Global Network</h1>
      <p className="subtitle">Join an elite community of over 500,000 learners and professionals collaborating to build the future of technology.</p>
    </div>
    <div className="cta-box">
      <p>Ready to contribute to the global discourse? Join our Discord and start collaborating today.</p>
      <button className="primary-btn">Request Access to Community</button>
    </div>
  </div>
);

export const SuccessStories = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">The Impact Gallery</h1>
      <p className="subtitle">Real-world transformations from individuals who leveraged our platform to redefine their professional trajectories.</p>
    </div>
    <div className="testimonial-grid">
      <div className="testimonial-item">
        <p className="quote">"The depth of the curriculum was staggering. Within a year, I transitioned from an analyst role to a Lead Data Scientist at a Fortune 500 firm."</p>
        <span className="author">— Dr. Elena Rodriguez</span>
      </div>
      <div className="testimonial-item">
        <p className="quote">"More than just courses, it's a mentorship network. The Cloud Engineering track provided the technical rigor I needed to launch my own startup."</p>
        <span className="author">— Marcus Thorne</span>
      </div>
    </div>
  </div>
);

export const Documentation = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Technical Knowledge Base</h1>
      <p className="subtitle">Exhaustive documentation for our platform features, API integrations, and student workflow management.</p>
    </div>
    <div className="doc-grid">
      <div className="doc-section">
        <h3>Getting Started</h3>
        <p>Navigate your learning dashboard and set up your development environment for success.</p>
      </div>
      <div className="doc-section">
        <h3>API Reference</h3>
        <p>Integrate our learning management system with your existing tools using our robust REST API.</p>
      </div>
      <div className="doc-section">
        <h3>Workflow Optimization</h3>
        <p>Tips and strategies for managing your time and maximizing your retention while studying.</p>
      </div>
    </div>
  </div>
);

export const Instructors = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Distinguished Faculty</h1>
      <p className="subtitle">Learn from a curated group of industry veterans, research pioneers, and world-class technical educators.</p>
    </div>
    <div className="instructor-grid">
      <div className="instructor-card">
        <div className="card-badge">Lead Faculty</div>
        <h3>Dr. Alexander Sterling</h3>
        <h4>Principal Systems Architect</h4>
        <p>With two decades of experience at organizations like Bell Labs and Google, Dr. Sterling specializes in low-latency systems and distributed networking.</p>
      </div>
      <div className="instructor-card">
        <div className="card-badge">Industry Expert</div>
        <h3>Sophia Varma</h3>
        <h4>Senior Design Director</h4>
        <p>An award-winning designer known for her work in automotive interfaces and accessible design, Sophia leads our Design Experience track.</p>
      </div>
      <div className="instructor-card">
        <div className="card-badge">Research Pioneer</div>
        <h3>Dr. Hiroshi Tanaka</h3>
        <h4>AI Research Scientist</h4>
        <p>Dr. Tanaka's work in generative adversarial networks (GANs) has been cited over 10,000 times, and he brings that same rigor to our Intelligence track.</p>
      </div>
    </div>
  </div>
);
