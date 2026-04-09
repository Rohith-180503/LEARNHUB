import "./ContentPages.css";

function PageHeader({ title, subtitle }) {
  return (
    <div className="content-header">
      <h1 className="gradient-text">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

function DetailCard({ title, body, tags = [] }) {
  return (
    <div className="course-card-detailed">
      <h3>{title}</h3>
      <p>{body}</p>
      {tags.length > 0 && (
        <ul className="tag-list">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoCard({ title, body, highlight = false }) {
  return (
    <div className={highlight ? "feature-card highlight" : "feature-card"}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function InstructorCard({ name, title, body, tags }) {
  return (
    <div className="instructor-hero-card">
      <div className="hero-content">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
        <div className="expertise-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

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

export const DataScience = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Intelligence Systems and Neural Science"
      subtitle="From raw telemetry to production ML systems, build the foundations behind modern AI."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Phase 1: Deep Learning and Neural Architectures</h2>
        <p>
          Start with mathematical foundations, then move into transformer and
          diffusion model implementation with PyTorch.
        </p>
        <div className="features-grid">
          <InfoCard
            title="Generative AI Mastery"
            body="Build LLM pipelines, domain adaptation flows, and retrieval-augmented generation systems."
            highlight
          />
          <InfoCard
            title="Natural Language Processing"
            body="Cover tokenization, embeddings, attention mechanisms, and classic text tasks."
          />
        </div>
      </div>

      <div className="module-box">
        <h2>Phase 2: Data Engineering and MLOps</h2>
        <p>
          Learn how data platforms, feature pipelines, and monitoring systems
          support reliable production ML.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Real-time Streaming</h3>
            <p>
              Use Spark and Kafka to process high-volume event streams and feed
              inference systems.
            </p>
          </div>
          <div className="info-card">
            <h3>Model Observability</h3>
            <p>
              Track drift, bias, and retraining signals so deployed models stay
              accurate over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Cloud and Infrastructure Engineering"
      subtitle="Understand how modern teams design, secure, and operate large-scale infrastructure."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Infrastructure as Code</h2>
        <p>
          Define infrastructure declaratively with Terraform, OpenTofu, and AWS
          tooling to reduce manual configuration drift.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">TF</div>
            <div className="step-content">
              <h3>Terraform Mastery</h3>
              <p>
                Manage state safely, write reusable modules, and support team
                workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Kubernetes and GitOps</h2>
        <p>
          Learn orchestration, service-to-service networking, and declarative
          deployment workflows.
        </p>
        <div className="features-grid">
          <InfoCard
            title="Service Meshes"
            body="Use tools like Istio and Linkerd for observability, traffic control, and policy enforcement."
          />
          <InfoCard
            title="Cloud Security"
            body="Apply zero-trust networking, secret management, and runtime security controls."
          />
        </div>
      </div>
    </section>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Experience Architecture and Strategy"
      subtitle="Blend research, visual systems, and technical constraints into product decisions that hold up in production."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>The Science of User Experience</h2>
        <p>
          Build strong UX habits through research, requirement synthesis, and
          measurable validation.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Cognitive Psychology</h3>
            <p>
              Use attention, memory, and perception principles to reduce user
              friction.
            </p>
          </div>
          <div className="info-card">
            <h3>UX Research Methods</h3>
            <p>
              Practice interviews, card sorting, and remote usability studies to
              generate actionable findings.
            </p>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Design Systems and Handover</h2>
        <p>
          Learn how scalable component systems improve consistency across design
          and engineering.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">DS</div>
            <div className="step-content">
              <h3>Living Design Systems</h3>
              <p>
                Build Figma libraries and documentation that can serve as a
                practical source of truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Blog = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Tech Intelligence Hub"
      subtitle="A stream of analysis on the systems, tooling, and product shifts shaping modern engineering work."
    />

    <div className="article-list-detailed">
      <article className="article-card-rich">
        <div className="article-meta">April 2026 - Engineering - 12 min read</div>
        <h3>The Rise of Edge AI: Why Local LLMs Are Growing Fast</h3>
        <p>
          Privacy, latency, and hardware improvements are pushing more inference
          workloads onto local devices. This piece covers the tradeoffs.
        </p>
        <span className="read-more">Read Full Analysis -&gt;</span>
      </article>
      <article className="article-card-rich">
        <div className="article-meta">March 2026 - Infrastructure - 15 min read</div>
        <h3>Rust vs Go: Performance Tradeoffs in 2026</h3>
        <p>
          A practical comparison of memory overhead, concurrency throughput, and
          developer experience across real service workloads.
        </p>
        <span className="read-more">Read Full Analysis -&gt;</span>
      </article>
      <article className="article-card-rich">
        <div className="article-meta">February 2026 - Design - 10 min read</div>
        <h3>Spatial UI: Designing Beyond Flat Screens</h3>
        <p>
          A primer on depth, focus, and feedback patterns for immersive
          interfaces as AR and VR tooling matures.
        </p>
        <span className="read-more">Read Full Analysis -&gt;</span>
      </article>
    </div>
  </div>
);

export const Community = () => (
  <div className="page-container glassmorphism text-center">
    <PageHeader
      title="The Developer Peer Network"
      subtitle="Learn inside a community built around collaboration, review, and deliberate practice."
    />

    <div className="community-detailed">
      <div className="benefit-grid">
        <div className="benefit-card">
          <h3>Open Source Incubator</h3>
          <p>
            Get paired with maintainers, contribute to meaningful projects, and
            build a stronger public portfolio.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Expert-Led Hackathons</h3>
          <p>
            Join monthly sprints focused on practical problem solving, teamwork,
            and feedback loops.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Private Job Board</h3>
          <p>
            Access curated opportunities and network introductions connected to
            technical learning paths.
          </p>
        </div>
      </div>

      <div className="cta-box">
        <h3>Join a High-Signal Learning Community</h3>
        <p>Applications help keep the environment focused and collaborative.</p>
        <button className="primary-btn">Submit Your Application</button>
      </div>
    </div>
  </div>
);

export const SuccessStories = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Career Transitions and Outcomes"
      subtitle="Stories from learners who used focused practice to move into deeper technical roles."
    />

    <div className="detailed-stories">
      <div className="story-card-full">
        <div className="story-main">
          <h3>From Retail to Senior Systems Engineer</h3>
          <p className="story-body">
            "I started with no coding background. The systems track was hard,
            but the mentor feedback and project work helped me grow quickly. In
            just over a year, I moved into infrastructure engineering."
          </p>
          <div className="story-footer">
            <strong>Sarah Jenkins</strong>
            <span>Senior Engineer @ Stripe</span>
          </div>
        </div>
      </div>
      <div className="story-card-full">
        <div className="story-main">
          <h3>Redefining an AI Career Path</h3>
          <p className="story-body">
            "I came from analytics and needed a stronger foundation in modern AI.
            The neural systems track gave me both the math and the engineering
            discipline to move into research leadership."
          </p>
          <div className="story-footer">
            <strong>David Chen</strong>
            <span>Research Lead @ Anthropic</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Documentation = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Student Playbook and Docs"
      subtitle="A central knowledge base for getting started, understanding workflows, and using platform features effectively."
    />

    <div className="doc-grid-detailed">
      <section className="doc-category">
        <h3>Getting Started</h3>
        <ul className="doc-links">
          <li>Platform orientation and dashboard overview</li>
          <li>Setting up your local development environment</li>
          <li>Connecting GitHub and cloud accounts</li>
          <li>Understanding grading and review flows</li>
        </ul>
      </section>
      <section className="doc-category">
        <h3>API and Integration</h3>
        <ul className="doc-links">
          <li>REST API authentication and scopes</li>
          <li>Webhooks for lab submissions</li>
          <li>Exporting certifications to professional profiles</li>
          <li>Customizing student data via API</li>
        </ul>
      </section>
      <section className="doc-category">
        <h3>Workflow and Productivity</h3>
        <ul className="doc-links">
          <li>Time management for part-time learners</li>
          <li>Active recall and spaced repetition strategies</li>
          <li>Using AI tutoring support for feedback</li>
          <li>Best practices for peer code review</li>
        </ul>
      </section>
    </div>
  </div>
);

export const Instructors = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="The Faculty of Pioneers"
      subtitle="A cross-functional teaching group spanning systems, AI, design, mobile, and infrastructure."
    />

    <div className="instructor-profiles-detailed">
      <InstructorCard
        name="Dr. Alexander Sterling"
        title="Principal Systems Architect - Lead Faculty"
        body="A former distributed systems leader with deep experience in large-scale network design and backend reliability."
        tags={["Distributed Systems", "Rust", "Cloud Architecture"]}
      />
      <InstructorCard
        name="Sophia Varma"
        title="Design Director - UX Strategy Lead"
        body="A design leader focused on design systems, accessibility, and turning research into product decisions that hold up in implementation."
        tags={["UX Strategy", "Design Systems", "Cognitive Psychology"]}
      />
      <InstructorCard
        name="Dr. Hiroshi Tanaka"
        title="AI Research Scientist - Neural Systems Lead"
        body="An AI researcher focused on model efficiency, evaluation rigor, and responsible deployment practices."
        tags={["Deep Learning", "LLMs", "Ethical AI"]}
      />
      <InstructorCard
        name="Elena Volkov"
        title="Cybersecurity Director - Zero Trust Specialist"
        body="A veteran security consultant specializing in defensive operations, access design, and practical hardening strategies."
        tags={["Cybersecurity", "Pen Testing", "Zero Trust"]}
      />
      <InstructorCard
        name="Marcus Chen"
        title="Head of MLOps - Deployment Strategist"
        body="An infrastructure-focused ML engineer with experience in observability, scaling, and production model operations."
        tags={["MLOps", "Kubernetes", "Scalability"]}
      />
      <InstructorCard
        name="Jordan Okonkwo"
        title="Blockchain Architect - Smart Contract Lead"
        body="A security-minded blockchain engineer working on smart contracts, protocol reliability, and decentralized system design."
        tags={["Blockchain", "Solidity", "Cryptography"]}
      />
      <InstructorCard
        name="Rachel Kim"
        title="Principal Infrastructure Engineer - IaC Expert"
        body="An infrastructure engineer specializing in declarative systems, repeatable delivery, and multi-cloud migration work."
        tags={["Terraform", "Cloud Engineering", "DevOps"]}
      />
      <InstructorCard
        name="Tomas Alvarez"
        title="Kubernetes Specialist - Cloud Native Lead"
        body="A cloud-native practitioner focused on orchestration, traffic management, and secure multi-service operations."
        tags={["Kubernetes", "Istio", "Cloud Native"]}
      />
      <InstructorCard
        name="Amira Hassan"
        title="Big Data Architect - Streaming Analytics Lead"
        body="A data platform architect with experience in Spark, Kafka, and resilient analytics pipelines."
        tags={["Big Data", "Apache Kafka", "Spark"]}
      />
      <InstructorCard
        name="Alex Rivera"
        title="Full Stack Architect - Next.js Specialist"
        body="A web performance specialist focused on delivery speed, maintainable architecture, and product-scale frontend systems."
        tags={["Next.js", "React", "Web Performance"]}
      />
      <InstructorCard
        name="Grace O'Connor"
        title="Lead iOS Architect - SwiftUI Specialist"
        body="A mobile engineering lead with experience building modern iOS systems around SwiftUI and maintainable app architecture."
        tags={["iOS Development", "SwiftUI", "Mobile UX"]}
      />
      <InstructorCard
        name="Sanjay Patel"
        title="Go Backend Lead - Microservices Specialist"
        body="A backend engineer focused on high-concurrency services, gRPC, and reliable distributed communication."
        tags={["Go Programming", "Microservices", "gRPC"]}
      />
      <InstructorCard
        name="Li Wei"
        title="Android Engineering Lead - Kotlin Expert"
        body="An Android specialist working on modern Kotlin application architecture, offline-first patterns, and performance."
        tags={["Android", "Kotlin", "Jetpack Compose"]}
      />
    </div>
  </div>
);
