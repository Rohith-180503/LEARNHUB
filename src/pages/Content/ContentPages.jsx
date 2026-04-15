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
      title="Global Academic Catalog 2026"
      subtitle="Discover our comprehensive suite of professional learning tracks, engineered to bridge the gap between theoretical mastery and production-grade implementation."
    />

    <div className="catalog-sections">
      <section className="catalog-group">
        <h2 className="group-title">Full-Stack & Systems Engineering</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Advanced Enterprise Web Stack"
            body="An immersive 32-week curriculum focusing on high-scale distributed systems. Master the intricacies of React 19's concurrent rendering, Go-based microservices, and multi-tenant database architectures using PostgreSQL and Redis."
            tags={["React 19", "Golang", "System Design", "Kubernetes"]}
          />
          <DetailCard
            title="Systems Programming & Performance"
            body="Delve into the low-level mechanics of computing. This track covers memory-safe systems development with Rust, high-concurrency patterns in C++23, and kernel-level optimizations for mission-critical software."
            tags={["Rust", "C++23", "eBPF", "Concurrency"]}
          />
          <DetailCard
            title="Mobile Architecture (iOS & Android)"
            body="Architecting native-grade experiences using Swift, Kotlin, and React Native. Learn to manage complex offline states, hardware integrations, and cross-platform performance tuning."
            tags={["SwiftUI", "Kotlin Multiplatform", "React Native"]}
          />
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Artificial Intelligence & Neural Science</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Generative AI & LLM Orchestration"
            body="Beyond prompt engineering: Build sophisticated AI agents using RAG (Retrieval-Augmented Generation), fine-tuning techniques for Llama 3 and GPT-4, and deploying vector-based knowledge graphs."
            tags={["PyTorch", "LangChain", "Vector DBs", "LLMOps"]}
          />
          <DetailCard
            title="Deep Learning & Computer Vision"
            body="Master the mathematical foundations and implementation of neural networks. Covers transformer architectures, vision transformers (ViT), and real-time object detection for autonomous systems."
            tags={["Deep Learning", "CNNs", "Computer Vision", "TensorFlow"]}
          />
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Cloud, Security & Infrastructure</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Cloud Solutions Architecture"
            body="Master the art of designing resilient, global-scale infrastructure on AWS, Azure, and GCP. Includes multi-region failover strategies, serverless orchestration, and cost-optimized scaling."
            tags={["AWS Certified", "Terraform", "Serverless", "SRE"]}
          />
          <DetailCard
            title="DevSecOps & GitOps Workflows"
            body="Integrating security into every stage of the CI/CD pipeline. Automate infrastructure with Kubernetes, implement Zero Trust networking, and master automated threat detection."
            tags={["Docker", "K8s", "Jenkins", "Security"]}
          />
        </div>
      </section>
    </div>
  </div>
);

export const WebDevelopment = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Full-Stack Engineering & Architecture"
      subtitle="A masterclass in building resilient, high-performance web ecosystems from the database to the browser."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Module 1: Advanced Frontend Systems & React 19</h2>
        <p>
          Moving beyond basic UI components to architecting complex, high-signal interfaces with the latest React primitives.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">1.1</div>
            <div className="step-content">
              <h3>React Server Components (RSC) & Actions</h3>
              <p>Master the paradigm shift in data fetching. Learn to optimize bundle sizes and improve TTI (Time to Interactive) by moving logic to the server.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">1.2</div>
            <div className="step-content">
              <h3>State Synchronization & Persistence</h3>
              <p>Architecting robust state management using TanStack Query for server state and Zustand for atomic client state, ensuring offline-first reliability.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">1.3</div>
            <div className="step-content">
              <h3>Design Systems & Component Architecture</h3>
              <p>Building accessible, themeable UI libraries using Tailwind CSS and Radix UI primitives for enterprise-grade consistency.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Module 2: Scalable Backend & Distributed Services</h2>
        <p>
          Engineering the backbone of modern applications using Node.js, Go, and sophisticated data persistence strategies.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">2.1</div>
            <div className="step-content">
              <h3>Microservices & Event-Driven Design</h3>
              <p>Designing decoupled systems that communicate via gRPC and RabbitMQ, ensuring horizontal scalability and fault tolerance.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">2.2</div>
            <div className="step-content">
              <h3>Data Modeling & Advanced SQL</h3>
              <p>Deep dive into PostgreSQL internals, recursive queries, and JSONB optimization for hybrid relational-document workloads.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">2.3</div>
            <div className="step-content">
              <h3>API Security & Rate Limiting</h3>
              <p>Implementing Zero Trust security at the API layer, including OAuth2/OIDC, JWT rotation, and distributed rate limiting with Redis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="cta-box text-center">
      <h3>Master the Modern Web Stack</h3>
      <p>Join 50,000+ engineers building the next generation of digital experiences.</p>
      <button className="primary-btn">Apply for the 2026 Cohort</button>
    </div>
  </div>
);

export const DataScience = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Intelligence Systems & Neural Science"
      subtitle="From fundamental statistics to orchestrating multi-agent AI systems in production environments."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Phase 1: Deep Learning & Transformer Architectures</h2>
        <p>
          A rigorous journey through the mathematical foundations of AI, culminating in the implementation of custom LLM architectures.
        </p>
        <div className="features-grid">
          <InfoCard
            title="Generative AI & LLMOps"
            body="Architecting RAG pipelines, fine-tuning Llama-3 with PEFT/LoRA, and managing model latency in high-throughput environments."
            highlight
          />
          <InfoCard
            title="Neural Architecture Design"
            body="Implementing Attention mechanisms, Vision Transformers (ViT), and Diffusion models from scratch using PyTorch."
          />
        </div>
      </div>

      <div className="module-box">
        <h2>Phase 2: MLOps & Production Data Engineering</h2>
        <p>
          Closing the gap between research and production. Learn to deploy, monitor, and scale intelligence at the enterprise level.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Vector Databases & Semantic Search</h3>
            <p>Mastering Pinecone, Milvus, and pgvector for high-dimensional data retrieval and knowledge graph integration.</p>
          </div>
          <div className="info-card">
            <h3>Model Observability & Drift Detection</h3>
            <p>Implementing automated monitoring to detect data drift and model decay, ensuring long-term reliability of AI services.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Cloud Native Infrastructure & Platform Engineering"
      subtitle="Architecting for global scale, absolute reliability, and automated security in a multi-cloud world."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Infrastructure as Code & GitOps</h2>
        <p>
          Eliminating manual configuration through declarative infrastructure and automated reconciliation loops.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">IaC</div>
            <div className="step-content">
              <h3>Enterprise Terraform & Pulumi</h3>
              <p>Managing multi-region state, custom providers, and policy-as-code (OPA) for compliant cloud provisioning.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">CD</div>
            <div className="step-content">
              <h3>ArgoCD & Flux Mastery</h3>
              <p>Implementing GitOps workflows for Kubernetes, ensuring your cluster state always matches your repository.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Kubernetes & Cloud Native Networking</h2>
        <p>
          Orchestrating containerized workloads with advanced traffic management and service-to-service security.
        </p>
        <div className="features-grid">
          <InfoCard
            title="Service Mesh (Istio/Linkerd)"
            body="Implementing mTLS, circuit breaking, and canary deployments for complex microservice graphs."
          />
          <InfoCard
            title="Cloud Security & FinOps"
            body="Mastering Zero Trust architecture, secret management (Vault), and automated cost optimization strategies."
          />
        </div>
      </div>
    </section>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Experience Architecture & Strategic Design"
      subtitle="Synthesizing cognitive psychology, visual systems, and technical constraints into world-class digital products."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>The Science of Human-Computer Interaction</h2>
        <p>
          Deep dive into the psychological principles that drive user behavior and decision-making.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Cognitive Load & Visual Hierarchy</h3>
            <p>Reducing friction by applying Gestalt principles, Fitts's Law, and Hick's Law to interface design.</p>
          </div>
          <div className="info-card">
            <h3>UX Research & Data-Driven Design</h3>
            <p>Executing qualitative interviews, longitudinal studies, and A/B testing to validate design hypotheses.</p>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Design Systems & Technical Handover</h2>
        <p>
          Bridging the gap between creative vision and engineering implementation through scalable systems.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">DS</div>
            <div className="step-content">
              <h3>Atomic Design & Figma Mastery</h3>
              <p>Building complex, multi-modal design systems with auto-layout, variables, and interactive prototyping.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">HO</div>
            <div className="step-content">
              <h3>Engineering-Design Collaboration</h3>
              <p>Mastering the handoff process with Storybook, design tokens, and CSS-in-JS documentation.</p>
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
      <InstructorCard
        name="Dr. Sarah Montgomery"
        title="Quantum Computing Lead - Research Faculty"
        body="Leading our quantum initiatives, Dr. Montgomery focuses on algorithm design for NISQ-era hardware and quantum-classical hybrid systems."
        tags={["Quantum Computing", "Qiskit", "Algorithm Design"]}
      />
      <InstructorCard
        name="James 'Ghost' Miller"
        title="Offensive Security Lead - Red Team Director"
        body="A world-renowned ethical hacker specializing in advanced persistent threats (APT) simulation and kernel-level exploit development."
        tags={["Ethical Hacking", "Exploit Dev", "Red Teaming"]}
      />
      <InstructorCard
        name="Dr. Isabella Rossi"
        title="Bioinformatics Director - Data Science Lead"
        body="Synthesizing biology and big data, Dr. Rossi leads our efforts in genomic sequencing pipelines and protein folding simulations."
        tags={["Bioinformatics", "Python", "Data Science"]}
      />
      <InstructorCard
        name="Vikram Sethi"
        title="Edge Computing Specialist - IoT Architect"
        body="Expert in low-latency processing at the edge, focusing on hardware-accelerated AI for industrial IoT ecosystems."
        tags={["Edge AI", "C++", "Embedded Systems"]}
      />
      <InstructorCard
        name="Claire Fontaine"
        title="Product Strategy Director - Growth Lead"
        body="Focused on the intersection of product-market fit and technical scalability, Claire teaches strategic product management for engineers."
        tags={["Product Strategy", "Growth Hacking", "Agile"]}
      />
      <InstructorCard
        name="Dr. Aris Papadopoulos"
        title="Distributed Ledger Researcher - Protocol Lead"
        body="Specializing in consensus mechanisms and formal verification of smart contracts for next-generation blockchain protocols."
        tags={["Blockchain", "Formal Verification", "Cryptography"]}
      />
      <InstructorCard
        name="Nadia Petrova"
        title="AR/VR Experience Lead - Immersive Design"
        body="Pioneering spatial interface design, Nadia focuses on the ergonomics of immersive environments and high-performance 3D rendering."
        tags={["Unity 3D", "Spatial Design", "WebXR"]}
      />
      <InstructorCard
        name="Dr. Chen Zhang"
        title="Robotics & Control Systems Lead"
        body="Focused on autonomous navigation, SLAM algorithms, and the integration of computer vision with robotic actuators."
        tags={["Robotics", "ROS 2", "Control Theory"]}
      />
      <InstructorCard
        name="Omar Al-Fayed"
        title="SRE Director - Reliability Lead"
        body="Expert in incident response, chaos engineering, and building culture around 'error budgets' and high-availability systems."
        tags={["SRE", "Chaos Engineering", "Incident Response"]}
      />
      <InstructorCard
        name="Yuki Tanaka"
        title="NLP Specialist - Large Language Model Lead"
        body="Focusing on the fine-tuning of multi-lingual LLMs and the ethical implications of automated reasoning systems."
        tags={["NLP", "Transformers", "AI Ethics"]}
      />
    </div>
  </div>
);
