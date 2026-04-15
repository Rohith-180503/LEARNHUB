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
      title="All Courses"
      subtitle="Explore the full LearnHub catalog across development, AI, cloud, design, and systems thinking."
    />

    <div className="catalog-sections">
      <section className="catalog-group">
        <h2 className="group-title">Development & Systems</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Full-Stack Web Engineering"
            body="Build modern applications with React, Node.js, REST APIs, authentication, and scalable backend services."
            tags={["React 19", "Golang", "System Design", "Kubernetes"]}
          />
          <DetailCard
            title="Systems Programming & Performance"
            body="Strengthen core engineering fundamentals with performance tuning, concurrency, low-level memory safety, and efficient runtime behavior."
            tags={["Rust", "C++23", "eBPF", "Concurrency"]}
          />
          <DetailCard
            title="Mobile Architecture (iOS & Android)"
            body="Create maintainable mobile apps using Swift, Kotlin, and cross-platform patterns for smooth user experiences."
            tags={["SwiftUI", "Kotlin Multiplatform", "React Native"]}
          />
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">AI & Data</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Generative AI & LLM Workflows"
            body="Move beyond prompts into retrieval pipelines, evaluation, fine-tuning, and practical LLM-enabled product development."
            tags={["PyTorch", "LangChain", "Vector DBs", "LLMOps"]}
          />
          <DetailCard
            title="Deep Learning & Computer Vision"
            body="Learn machine learning foundations, neural networks, transformer models, and vision systems for applied AI work."
            tags={["Deep Learning", "CNNs", "Computer Vision", "TensorFlow"]}
          />
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Cloud, DevOps & Infrastructure</h2>
        <div className="detailed-grid">
          <DetailCard
            title="Cloud Solutions Architecture"
            body="Design resilient infrastructure across major cloud platforms with scalable deployment, security, and reliability practices."
            tags={["AWS Certified", "Terraform", "Serverless", "SRE"]}
          />
          <DetailCard
            title="DevSecOps & GitOps Workflows"
            body="Integrate delivery pipelines, observability, infrastructure automation, and security practices into one reliable engineering workflow."
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
      title="Full-Stack Development"
      subtitle="Build production-ready web applications from frontend experience to backend architecture."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Frontend Foundations & React</h2>
        <p>
          Learn how to build responsive interfaces, maintain state cleanly, and create reusable UI systems for real projects.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">1.1</div>
            <div className="step-content">
              <h3>Modern React Patterns</h3>
              <p>Work with component composition, routing, form handling, and data flow patterns that scale as your app grows.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">1.2</div>
            <div className="step-content">
              <h3>State, APIs, and Persistence</h3>
              <p>Connect your frontend to APIs, persist key data, and keep application state predictable across navigation and refreshes.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">1.3</div>
            <div className="step-content">
              <h3>Component Architecture</h3>
              <p>Structure design systems, accessible components, and reusable layouts so teams can ship faster with less duplication.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Backend & Deployment Skills</h2>
        <p>
          Round out your stack with API development, data modeling, deployment, and system design essentials.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">2.1</div>
            <div className="step-content">
              <h3>API Design & Services</h3>
              <p>Design clean application boundaries, create dependable endpoints, and build services that are easy to extend.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">2.2</div>
            <div className="step-content">
              <h3>Databases & Data Modeling</h3>
              <p>Choose the right data structures, write efficient queries, and build schemas that support long-term product growth.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">2.3</div>
            <div className="step-content">
              <h3>Deployment, Security & Scale</h3>
              <p>Prepare applications for production with deployment pipelines, environment management, authentication, and performance checks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="cta-box text-center">
      <h3>Start building full-stack projects</h3>
      <p>Move from isolated tutorials to complete applications you can explain, deploy, and improve.</p>
      <button className="primary-btn">Apply for the 2026 Cohort</button>
    </div>
  </div>
);

export const DataScience = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="AI & Data Science"
      subtitle="Learn analytics, machine learning, and practical AI systems with a clear path from fundamentals to deployment."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Core AI Foundations</h2>
        <p>
          Build the concepts behind predictive models, deep learning systems, and modern AI-assisted applications.
        </p>
        <div className="features-grid">
          <InfoCard
            title="Generative AI & LLM Workflows"
            body="Learn prompt design, retrieval pipelines, evaluation, and the operational concerns behind AI-powered product features."
            highlight
          />
          <InfoCard
            title="Machine Learning & Deep Learning"
            body="Work through supervised learning, neural networks, transformer concepts, and practical implementation patterns."
          />
        </div>
      </div>

      <div className="module-box">
        <h2>Production Data & Model Operations</h2>
        <p>
          Understand how to move from experiments to reliable deployed systems with monitoring, data quality, and feedback loops.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Data Pipelines & Feature Design</h3>
            <p>Prepare datasets, engineer useful signals, and build repeatable workflows that support training and analysis.</p>
          </div>
          <div className="info-card">
            <h3>Monitoring & Model Reliability</h3>
            <p>Track performance over time, catch drift early, and maintain trustworthy AI systems in changing environments.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Cloud & DevOps"
      subtitle="Learn how modern teams ship, scale, automate, and monitor software in cloud environments."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>Cloud Infrastructure & Automation</h2>
        <p>
          Build a practical understanding of cloud platforms, infrastructure as code, and repeatable deployment workflows.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">IaC</div>
            <div className="step-content">
              <h3>Infrastructure as Code</h3>
              <p>Provision environments with confidence using declarative tooling and workflows that reduce manual mistakes.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">CD</div>
            <div className="step-content">
              <h3>CI/CD & GitOps</h3>
              <p>Automate delivery pipelines and use source-controlled deployment strategies to keep releases predictable.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Operations, Containers & Reliability</h2>
        <p>
          Understand how applications run in production with containers, monitoring, traffic management, and incident readiness.
        </p>
        <div className="features-grid">
          <InfoCard
            title="Containers & Kubernetes"
            body="Package services with containers, orchestrate them effectively, and manage deployments in dynamic environments."
          />
          <InfoCard
            title="Observability & Reliability"
            body="Measure application health, respond to incidents faster, and build systems that remain stable under load."
          />
        </div>
      </div>
    </section>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="UI/UX Design"
      subtitle="Design useful, intuitive digital products by combining research, visual systems, and interaction design."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>User Experience Foundations</h2>
        <p>
          Learn how users think, what creates friction, and how to design interfaces that feel clear and trustworthy.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Research & User Flows</h3>
            <p>Map journeys, identify pain points, and translate research into flows and screens that solve real problems.</p>
          </div>
          <div className="info-card">
            <h3>Visual Hierarchy & Accessibility</h3>
            <p>Use spacing, contrast, typography, and inclusive design principles to make interfaces easier to navigate.</p>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Design Systems & Collaboration</h2>
        <p>
          Turn strong visual work into repeatable systems developers can build from with less ambiguity and rework.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">DS</div>
            <div className="step-content">
              <h3>Figma, Components & Prototyping</h3>
              <p>Create reusable libraries, high-fidelity mockups, and prototypes that communicate interaction intent clearly.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">HO</div>
            <div className="step-content">
              <h3>Developer Handoff & Design Systems</h3>
              <p>Document components, define tokens, and keep product teams aligned on consistent patterns across screens.</p>
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
      title="Blog & Insights"
      subtitle="Practical articles on engineering, product, AI, cloud, and design trends that matter to learners and working teams."
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
      title="Community"
      subtitle="Join a collaborative learning space built around discussion, feedback, accountability, and shared progress."
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
      title="Success Stories"
      subtitle="See how focused learning, projects, and feedback helped students move into stronger technical careers."
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
      title="Docs & Guides"
      subtitle="Find setup help, workflow references, and practical guidance for getting more value from LearnHub."
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
