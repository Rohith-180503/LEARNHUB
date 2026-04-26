import { PageHeader } from "../ContentComponents";

export const WebDevelopment = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Advanced Web Stack Engineering"
      subtitle="A focused curriculum for building resilient, high-performance web applications."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Module 1: Modern Frontend Systems</h2>
        <p>
          Study React 19 patterns, rendering strategies, and performance
          optimization for real-world interfaces.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">1.1</div>
            <div className="step-content">
              <h3>React Server Components</h3>
              <p>
                Design data-heavy apps with smaller client bundles and clearer
                server boundaries.
              </p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">1.2</div>
            <div className="step-content">
              <h3>State Management at Scale</h3>
              <p>
                Compare Context, Zustand, and TanStack Query for synchronization
                and caching tradeoffs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Module 2: Backend Architecture</h2>
        <p>
          Learn Node.js internals, asynchronous system design, and scalable data
          access patterns.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">2.1</div>
            <div className="step-content">
              <h3>Microservices and gRPC</h3>
              <p>
                Split services cleanly and implement typed communication with
                protobuf-based contracts.
              </p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">2.2</div>
            <div className="step-content">
              <h3>Database Optimization</h3>
              <p>
                Work through PostgreSQL indexing, Redis caching, and NoSQL
                modeling for mixed workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="cta-box text-center">
      <h3>Ready to Build the Future of the Web?</h3>
      <p>Enroll today and get lifetime access to our community and mentor network.</p>
      <button className="primary-btn">Begin Your Engineering Journey</button>
    </div>
  </div>
);
