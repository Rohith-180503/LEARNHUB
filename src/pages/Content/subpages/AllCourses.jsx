import { PageHeader, DetailCard } from "../ContentComponents";

export const AllCourses = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Academic Catalog 2026"
      subtitle="A broad collection of professional learning tracks designed to build practical engineering depth."
    />

    <div className="catalog-sections">
      <section className="catalog-group">
        <h2 className="group-title">Software Engineering</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Full-Stack Mastery"
            body="A 24-week journey from JavaScript fundamentals to distributed application design with React, Go, and PostgreSQL."
            tags={["React 19", "Node.js", "Distributed Systems"]}
          />
          <DetailCard
            title="Systems Programming"
            body="Learn memory management, concurrency, and performance tuning with Rust and C++ through production-style projects."
            tags={["Rust", "Low-level IO", "Concurrency"]}
          />
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Artificial Intelligence</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Generative AI and LLMs"
            body="Build modern AI applications with transformer models, retrieval workflows, and evaluation pipelines."
            tags={["PyTorch", "Transformers", "Vector DBs"]}
          />
          <DetailCard
            title="Computer Vision"
            body="Study image segmentation, object detection, and navigation models using CNNs and vision transformers."
            tags={["OpenCV", "Deep Learning", "CNNs"]}
          />
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Cloud and Cybersecurity</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Cloud Solutions Architect"
            body="Design resilient infrastructure across AWS, GCP, and Azure with a focus on networking, recovery, and scaling."
            tags={["AWS", "Terraform", "Networking"]}
          />
          <DetailCard
            title="Ethical Hacking and Defense"
            body="Cover penetration testing, digital forensics, and zero-trust architecture for modern enterprise systems."
            tags={["Kali Linux", "Pen Testing", "Zero Trust"]}
          />
        </div>
      </section>
    </div>

    <section className="content-section stats-bar">
      <div className="stat-item">
        <span className="stat-value">120+</span>
        <span className="stat-label">Total Courses</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">500k+</span>
        <span className="stat-label">Active Learners</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">98%</span>
        <span className="stat-label">Placement Rate</span>
      </div>
    </section>
  </div>
);
