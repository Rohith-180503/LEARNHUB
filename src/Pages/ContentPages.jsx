import React from 'react';
import './ContentPages.css';

export const AllCourses = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Master the Modern Tech Stack</h1>
      <p className="subtitle">From fundamental systems programming to the bleeding edge of Generative AI, our catalog is curated by industry leaders to ensure you remain at the forefront of the digital revolution.</p>
    </div>
    
    <section className="content-section">
      <h2 className="section-title">Core Disciplines</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Full-Stack Engineering</h3>
          <p>Go beyond syntax. Master React, Next.js, and high-performance backends with Node.js and Go. Build distributed systems that handle millions of concurrent users.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🧠</div>
          <h3>Intelligence Systems</h3>
          <p>Deep dive into LLMs, RAG architectures, and neural networks. Learn to deploy production-grade AI models using PyTorch and TensorFlow.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🛠️</div>
          <h3>DevOps & Cloud</h3>
          <p>Architect global-scale infrastructure on AWS and Azure. Master Terraform, Kubernetes, and automated GitOps workflows for seamless deployments.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>Cybersecurity</h3>
          <p>Defend modern enterprises with zero-trust architectures, ethical hacking, and advanced network defense strategies.</p>
        </div>
      </div>
    </section>

    <section className="content-section stats-bar">
      <div className="stat-item">
        <span className="stat-value">50+</span>
        <span className="stat-label">Specialized Tracks</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">1,200+</span>
        <span className="stat-label">Hands-on Labs</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">15k+</span>
        <span className="stat-label">Industry Mentors</span>
      </div>
    </section>
  </div>
);

export const WebDevelopment = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Modern Web Stack Engineering</h1>
      <p className="subtitle">Master the art of building scalable, accessible, and high-performance web applications using the most in-demand technologies in the industry.</p>
    </div>
    
    <div className="curriculum-preview">
      <div className="curriculum-item">
        <div className="step-num">01</div>
        <div className="step-content">
          <h3>Advanced React & Next.js</h3>
          <p>Deep dive into Server Components, hydration strategies, and optimistic UI patterns. Learn to build applications that feel instantaneous.</p>
        </div>
      </div>
      <div className="curriculum-item">
        <div className="step-num">02</div>
        <div className="step-content">
          <h3>Distributed Backend Systems</h3>
          <p>Master microservices architecture, gRPC, and event-driven data layers with Kafka and Redis for real-time data processing.</p>
        </div>
      </div>
      <div className="curriculum-item">
        <div className="step-num">03</div>
        <div className="step-content">
          <h3>Full-Cycle Web Testing</h3>
          <p>Implement comprehensive testing suites with Playwright and Vitest, ensuring 100% reliability from unit to E2E.</p>
        </div>
      </div>
    </div>

    <div className="info-grid">
      <div className="info-card">
        <h3>Prerequisites</h3>
        <p>Basic JS/HTML/CSS knowledge. Familiarity with CLI and Git fundamentals is recommended but not mandatory.</p>
      </div>
      <div className="info-card">
        <h3>Career Paths</h3>
        <p>Frontend Engineer, Full-Stack Developer, Web Architect, Performance Specialist, UX Engineer.</p>
      </div>
    </div>
  </div>
);

export const DataScience = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">AI & Neural Systems Architecture</h1>
      <p className="subtitle">Transition from data analysis to building autonomous systems. Our AI track covers everything from statistical foundations to Large Language Models.</p>
    </div>

    <section className="content-section">
      <div className="features-grid">
        <div className="feature-card highlight">
          <h3>Generative AI & LLMs</h3>
          <p>Master the architecture of Transformers, Fine-tuning strategies, and RAG (Retrieval-Augmented Generation) systems for production-grade AI applications.</p>
        </div>
        <div className="feature-card">
          <h3>MLOps & Deployment</h3>
          <p>Learn to monitor, version, and deploy models at scale. Focus on model drift, latency optimization, and automated retraining pipelines.</p>
        </div>
        <div className="feature-card">
          <h3>Data Engineering</h3>
          <p>Build robust data pipelines using Apache Spark and Airflow. Focus on data integrity, feature stores, and real-time streaming analytics.</p>
        </div>
      </div>
    </section>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Cloud & DevOps Operations</h1>
      <p className="subtitle">Master the infrastructure that powers the world. From zero-downtime deployments to global-scale orchestration.</p>
    </div>

    <div className="content-section">
      <div className="curriculum-preview">
        <div className="curriculum-item">
          <div className="step-num">AWS</div>
          <div className="step-content">
            <h3>Architectural Mastery</h3>
            <p>Design multi-region, fault-tolerant systems using Lambda, EC2, and S3. Master VPC networking and IAM security protocols.</p>
          </div>
        </div>
        <div className="curriculum-item">
          <div className="step-num">K8s</div>
          <div className="step-content">
            <h3>Container Orchestration</h3>
            <p>Master Kubernetes internals, Helm charts, and service meshes. Learn to manage complex microservice clusters with ease.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Experience Architecture</h1>
      <p className="subtitle">Where cognitive psychology meets aesthetic excellence. Learn to build design systems that scale and experiences that resonate.</p>
    </div>

    <div className="features-grid">
      <div className="feature-card">
        <h3>Systematic Design</h3>
        <p>Master Figma variables, auto-layout, and component properties to build living design systems that align perfectly with engineering workflows.</p>
      </div>
      <div className="feature-card">
        <h3>User Psychology</h3>
        <p>Deep dive into Gestalt principles, cognitive load theory, and accessibility standards to ensure your designs are inclusive and intuitive.</p>
      </div>
    </div>
  </div>
);

export const Blog = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Tech Intelligence Hub</h1>
      <p className="subtitle">Critical analysis of the technologies shaping our future. Our editorial team covers everything from systems programming to AI ethics.</p>
    </div>

    <div className="article-list-detailed">
      <article className="article-card-rich">
        <div className="article-meta">Published April 2026 • 12 min read</div>
        <h3>The Rise of Edge AI: Why Local LLMs are the Future</h3>
        <p>Exploring the shift from centralized cloud-based AI to high-performance local inference and what it means for privacy and latency.</p>
        <span className="read-more">Read Full Analysis →</span>
      </article>
      <article className="article-card-rich">
        <div className="article-meta">Published March 2026 • 15 min read</div>
        <h3>Rust vs Go: Choosing the Right Tool for Systems Engineering</h3>
        <p>A deep dive into memory safety, concurrency models, and the developer experience in modern systems-level programming.</p>
        <span className="read-more">Read Full Analysis →</span>
      </article>
    </div>
  </div>
);

export const Community = () => (
  <div className="page-container glassmorphism text-center">
    <div className="content-header">
      <h1 className="gradient-text">The Developer Peer Network</h1>
      <p className="subtitle">You don't just learn here; you grow within a global ecosystem of 500,000+ engineers, designers, and innovators.</p>
    </div>

    <div className="community-benefits">
      <div className="benefit-item">
        <h3>Weekly Hackathons</h3>
        <p>Collaborate on real-world projects and win prizes from our industry partners.</p>
      </div>
      <div className="benefit-item">
        <h3>Peer Code Reviews</h3>
        <p>Get constructive feedback from senior engineers to accelerate your learning curve.</p>
      </div>
      <div className="benefit-item">
        <h3>Job Board</h3>
        <p>Exclusive access to openings at top-tier tech firms looking for our graduates.</p>
      </div>
    </div>

    <div className="cta-box">
      <h3>Ready to Elevate Your Network?</h3>
      <button className="primary-btn">Apply for Community Access</button>
    </div>
  </div>
);

export const SuccessStories = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Career Transitions</h1>
      <p className="subtitle">Evidence of our pedagogical impact. These are the stories of individuals who transformed their lives through technical mastery.</p>
    </div>

    <div className="story-grid">
      <div className="story-card">
        <div className="story-header">
          <div className="user-info">
            <h3>Sarah Jenkins</h3>
            <span>Frontend → Senior Full-Stack @ Vercel</span>
          </div>
        </div>
        <p>"The Web Stack Engineering track wasn't just about React; it taught me how to think like an architect. I moved from building components to building systems."</p>
      </div>
      <div className="story-card">
        <div className="story-header">
          <div className="user-info">
            <h3>David Chen</h3>
            <span>Analyst → AI Engineer @ Anthropic</span>
          </div>
        </div>
        <p>"Transitioning to AI felt impossible until I joined the Neural Systems track. The hands-on labs with PyTorch were the turning point for my career."</p>
      </div>
    </div>
  </div>
);

export const Documentation = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Student Playbook</h1>
      <p className="subtitle">Everything you need to maximize your learning efficiency. From API guides to time-management strategies.</p>
    </div>

    <div className="doc-sections">
      <div className="doc-group">
        <h3>Platform Guides</h3>
        <ul>
          <li>Setting up your dev environment</li>
          <li>Integrating the LearnHub API</li>
          <li>Submitting advanced labs for review</li>
        </ul>
      </div>
      <div className="doc-group">
        <h3>Technical Support</h3>
        <ul>
          <li>Troubleshooting container environments</li>
          <li>Accessing GPU-accelerated Jupyter labs</li>
          <li>API Rate limits and authentication</li>
        </ul>
      </div>
    </div>
  </div>
);

export const Instructors = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">World-Class Mentorship</h1>
      <p className="subtitle">Our instructors aren't just teachers; they are active pioneers at the forefront of their respective fields.</p>
    </div>

    <div className="instructor-rich-grid">
      <div className="instructor-profile">
        <div className="profile-header">
          <h3>Dr. Alexander Sterling</h3>
          <h4>Principal Systems Architect</h4>
        </div>
        <p>A former lead at Google Cloud and Bell Labs, Dr. Sterling has spent 20 years architecting low-latency distributed systems that power global internet traffic.</p>
      </div>
      <div className="instructor-profile">
        <div className="profile-header">
          <h3>Sophia Varma</h3>
          <h4>Design Director</h4>
        </div>
        <p>An award-winning designer with a portfolio spanning automotive UI to fintech accessibility, Sophia leads our Experience Architecture track with a focus on human-centric systems.</p>
      </div>
    </div>
  </div>
);
