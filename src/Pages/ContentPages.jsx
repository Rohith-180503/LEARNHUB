import React from 'react';
import './ContentPages.css';

export const AllCourses = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Academic Catalog 2026</h1>
      <p className="subtitle">An exhaustive collection of professional-grade certifications designed to transform technical novices into industry-leading architects.</p>
    </div>
    
    <div className="catalog-sections">
      <section className="catalog-group">
        <h2 className="group-title">Software Engineering</h2>
        <div className="detailed-grid">
          <div className="course-card-detailed">
            <h3>Full-Stack Mastery</h3>
            <p>A 24-week immersive journey from JavaScript fundamentals to architecting distributed systems with Next.js, Go, and PostgreSQL. Includes 12 production-grade projects.</p>
            <ul className="tag-list">
              <li>React 19</li>
              <li>Node.js</li>
              <li>Distributed Systems</li>
            </ul>
          </div>
          <div className="course-card-detailed">
            <h3>Systems Programming</h3>
            <p>Deep dive into memory management, concurrency, and performance optimization using Rust and C++. Build operating system kernels and high-frequency trading engines.</p>
            <ul className="tag-list">
              <li>Rust</li>
              <li>Low-level IO</li>
              <li>Concurrency</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Artificial Intelligence</h2>
        <div className="detailed-grid">
          <div className="course-card-detailed">
            <h3>Generative AI & LLMs</h3>
            <p>Architect state-of-the-art AI applications. Focus on Transformer architectures, fine-tuning Llama 3, and building RAG systems for enterprise data.</p>
            <ul className="tag-list">
              <li>PyTorch</li>
              <li>Transformers</li>
              <li>Vector DBs</li>
            </ul>
          </div>
          <div className="course-card-detailed">
            <h3>Computer Vision</h3>
            <p>Master spatial intelligence. Learn image segmentation, object detection, and autonomous navigation using CNNs and Vision Transformers.</p>
            <ul className="tag-list">
              <li>OpenCV</li>
              <li>Deep Learning</li>
              <li>CNNs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="catalog-group">
        <h2 className="group-title">Cloud & Cybersecurity</h2>
        <div className="detailed-grid">
          <div className="course-card-detailed">
            <h3>Cloud Solutions Architect</h3>
            <p>Master multi-cloud orchestration across AWS, GCP, and Azure. Focus on high availability, disaster recovery, and global-scale networking.</p>
            <ul className="tag-list">
              <li>AWS</li>
              <li>Terraform</li>
              <li>Networking</li>
            </ul>
          </div>
          <div className="course-card-detailed">
            <h3>Ethical Hacking & Defense</h3>
            <p>Comprehensive security training. Learn penetration testing, digital forensics, and how to build zero-trust architectures for modern enterprises.</p>
            <ul className="tag-list">
              <li>Kali Linux</li>
              <li>Pen-Testing</li>
              <li>Zero Trust</li>
            </ul>
          </div>
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
    <div className="content-header">
      <h1 className="gradient-text">Advanced Web Stack Engineering</h1>
      <p className="subtitle">The definitive curriculum for building resilient, high-performance web applications at global scale.</p>
    </div>
    
    <section className="detailed-content">
      <div className="module-box">
        <h2>Module 1: The Modern Frontend Ecosystem</h2>
        <p>Go beyond simple UI components. Master the intricacies of the React 19 engine, server-side rendering patterns, and edge computing. Learn how to optimize Core Web Vitals for sub-second loading times on any device.</p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">1.1</div>
            <div className="step-content">
              <h3>React Server Components</h3>
              <p>Architecting data-heavy applications with minimal client-side bundles using Next.js App Router and Server Actions.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">1.2</div>
            <div className="step-content">
              <h3>State Management at Scale</h3>
              <p>Choosing between Context, Zustand, and TanStack Query for complex synchronization and caching strategies.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Module 2: High-Performance Backend Architectures</h2>
        <p>Building the backbone of modern web apps. We focus on Node.js internals, asynchronous design patterns, and distributed database orchestration. Learn to build APIs that handle millions of requests with millisecond latency.</p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">2.1</div>
            <div className="step-content">
              <h3>Microservices & gRPC</h3>
              <p>Breaking monoliths into scalable services. Implementing type-safe communication between services using Protobuf and gRPC.</p>
            </div>
          </div>
          <div className="curriculum-item">
            <div className="step-num">2.2</div>
            <div className="step-content">
              <h3>Database Optimization</h3>
              <p>Deep dive into PostgreSQL indexing, Redis caching layers, and NoSQL modeling with MongoDB for unstructured data.</p>
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
    <div className="content-header">
      <h1 className="gradient-text">Intelligence Systems & Neural Science</h1>
      <p className="subtitle">From raw telemetry to autonomous decision-making. Master the mathematical foundations and technical implementations of modern AI.</p>
    </div>

    <section className="detailed-content">
      <div className="module-box">
        <h2>Phase 1: Deep Learning & Neural Architectures</h2>
        <p>Understand the "why" behind the "how." We start with the calculus of backpropagation and move rapidly into building Vision Transformers and Diffusion Models. You will learn to architect neural networks from scratch using PyTorch.</p>
        <div className="features-grid">
          <div className="feature-card highlight">
            <h3>Generative AI Mastery</h3>
            <p>Architecting LLM pipelines. Fine-tuning models like Mistral and Llama for domain-specific tasks. Implementing advanced RAG (Retrieval Augmented Generation) architectures.</p>
          </div>
          <div className="feature-card">
            <h3>Natural Language Processing</h3>
            <p>Sentiment analysis, machine translation, and text summarization. Master tokenization, embedding spaces, and attention mechanisms.</p>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Phase 2: Data Engineering & MLOps</h2>
        <p>AI is only as good as the data powering it. Learn to build robust data lakes, real-time feature stores, and automated training pipelines. We focus on the entire lifecycle of a model from research to production.</p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Real-time Streaming</h3>
            <p>Mastering Apache Spark and Kafka for processing millions of events per second and feeding live inference engines.</p>
          </div>
          <div className="info-card">
            <h3>Model Observability</h3>
            <p>Monitoring model drift, bias detection, and implementing automated retraining loops to maintain accuracy over time.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const CloudComputing = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Cloud & Infrastructure Engineering</h1>
      <p className="subtitle">Architecting the global digital backbone. Master the art of managing planet-scale infrastructure with precision and security.</p>
    </div>

    <section className="detailed-content">
      <div className="module-box">
        <h2>Infrastructure as Code (IaC)</h2>
        <p>Eliminate manual configuration. Learn to define your entire infrastructure using Terraform, OpenTofu, and AWS CloudFormation. Focus on multi-region, multi-cloud strategies for ultimate reliability.</p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">TF</div>
            <div className="step-content">
              <h3>Terraform Mastery</h3>
              <p>Managing state, writing reusable modules, and implementing collaborative workflows with Atlantis.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Kubernetes & GitOps</h2>
        <p>The standard for container orchestration. Deep dive into Kubernetes internals, custom controllers, and service meshes. Implement GitOps with ArgoCD for automated, declarative deployments.</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Service Meshes</h3>
            <p>Mastering Istio and Linkerd for advanced traffic management, observability, and security in microservice environments.</p>
          </div>
          <div className="feature-card">
            <h3>Cloud Security</h3>
            <p>Implementing Zero-Trust networking, automated secret management with Vault, and runtime security monitoring.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Experience Architecture & Strategy</h1>
      <p className="subtitle">Synthesizing human psychology, aesthetic rigor, and technical constraints to build products that users don't just use, but love.</p>
    </div>

    <section className="detailed-content">
      <div className="module-box">
        <h2>The Science of User Experience</h2>
        <p>Design is not just how it looks. It's how it works. We teach you to conduct rigorous user research, synthesize complex requirements into intuitive flows, and validate your hypotheses through data-driven testing.</p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Cognitive Psychology</h3>
            <p>Understanding memory, attention, and perception to reduce user friction and increase engagement.</p>
          </div>
          <div className="info-card">
            <h3>UX Research Methods</h3>
            <p>Mastering qualitative interviews, card sorting, and remote usability testing to gather actionable insights.</p>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Design Systems & Engineering Handover</h2>
        <p>Bridging the gap between design and development. Learn to build systematic, scalable design languages that engineering teams can implement with ease.</p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">DS</div>
            <div className="step-content">
              <h3>Living Design Systems</h3>
              <p>Building Figma libraries with variables, auto-layout, and documentation that serve as a single source of truth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <div className="article-meta">April 2026 • Engineering • 12 min read</div>
        <h3>The Rise of Edge AI: Why Local LLMs are the Future</h3>
        <p>As privacy concerns grow and hardware accelerates, the shift from cloud-based inference to local on-device AI is accelerating. We analyze the technical hurdles and the massive opportunities in this space.</p>
        <span className="read-more">Read Full Analysis →</span>
      </article>
      <article className="article-card-rich">
        <div className="article-meta">March 2026 • Infrastructure • 15 min read</div>
        <h3>Rust vs Go: The 2026 Performance Benchmarks</h3>
        <p>A data-driven comparison of modern systems languages. We test memory overhead, concurrency throughput, and developer velocity across five real-world microservice scenarios.</p>
        <span className="read-more">Read Full Analysis →</span>
      </article>
      <article className="article-card-rich">
        <div className="article-meta">February 2026 • Design • 10 min read</div>
        <h3>Spatial UI: Designing for the Post-Screen Era</h3>
        <p>With the adoption of AR/VR headsets reaching critical mass, designers must rethink 2D paradigms. Learn the principles of depth, focus, and haptic feedback in 3D interfaces.</p>
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

    <div className="community-detailed">
      <div className="benefit-grid">
        <div className="benefit-card">
          <h3>Open Source Incubator</h3>
          <p>Get paired with core maintainers of popular libraries. Contribute to projects that matter and build a portfolio that stands out to top-tier tech firms.</p>
        </div>
        <div className="benefit-card">
          <h3>Expert-Led Hackathons</h3>
          <p>Monthly 48-hour sprints focused on solving real problems for non-profits. Win grants, mentorship, and recognition from industry leaders.</p>
        </div>
        <div className="benefit-card">
          <h3>Private Job Board</h3>
          <p>Direct access to hiring managers at companies like Vercel, Anthropic, and AWS. Skip the resume pile with internal referrals.</p>
        </div>
      </div>

      <div className="cta-box">
        <h3>Join the Elite 5% of Tech Learners</h3>
        <p>Application-based entry ensures a high-signal environment for all members.</p>
        <button className="primary-btn">Submit Your Application</button>
      </div>
    </div>
  </div>
);

export const SuccessStories = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">Career Transitions & Impact</h1>
      <p className="subtitle">Evidence of our pedagogical impact. These are the stories of individuals who transformed their lives through technical mastery.</p>
    </div>

    <div className="detailed-stories">
      <div className="story-card-full">
        <div className="story-main">
          <h3>From Retail to Senior Systems Engineer</h3>
          <p className="story-body">"I was working in retail management with zero coding experience. The Systems Programming track was incredibly challenging, but the support from the mentors was unmatched. Within 14 months, I landed a role at a major fintech company working on their core infrastructure."</p>
          <div className="story-footer">
            <strong>Sarah Jenkins</strong>
            <span>Senior Engineer @ Stripe</span>
          </div>
        </div>
      </div>
      <div className="story-card-full">
        <div className="story-main">
          <h3>Redefining AI at Anthropic</h3>
          <p className="story-body">"I had a background in data analysis but felt left behind by the LLM revolution. The Neural Systems track provided the rigorous mathematical and technical foundation I needed. I'm now leading a research team focused on model alignment."</p>
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
    <div className="content-header">
      <h1 className="gradient-text">Student Playbook & Docs</h1>
      <p className="subtitle">The central knowledge base for optimizing your learning journey and integrating with our platform's technical ecosystem.</p>
    </div>

    <div className="doc-grid-detailed">
      <section className="doc-category">
        <h3>Getting Started</h3>
        <ul className="doc-links">
          <li>Platform orientation & Dashboard tour</li>
          <li>Setting up your local dev environment</li>
          <li>Connecting your GitHub & AWS accounts</li>
          <li>Understanding the grading & review process</li>
        </ul>
      </section>
      <section className="doc-category">
        <h3>API & Integration</h3>
        <ul className="doc-links">
          <li>REST API Authentication & Scopes</li>
          <li>Webhooks for lab submissions</li>
          <li>Exporting your certifications to LinkedIn</li>
          <li>Customizing your student profile via API</li>
        </ul>
      </section>
      <section className="doc-category">
        <h3>Workflow & Productivity</h3>
        <ul className="doc-links">
          <li>Time-management for part-time learners</li>
          <li>Active recall & Spaced repetition strategies</li>
          <li>Using the AI Tutor for instant feedback</li>
          <li>Best practices for peer code reviews</li>
        </ul>
      </section>
    </div>
  </div>
);

export const Instructors = () => (
  <div className="page-container glassmorphism">
    <div className="content-header">
      <h1 className="gradient-text">The Faculty of Pioneers</h1>
      <p className="subtitle">Our instructors aren't just teachers; they are active pioneers at the forefront of their respective fields.</p>
    </div>

    <div className="instructor-profiles-detailed">
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Dr. Alexander Sterling</h3>
          <h4>Principal Systems Architect • Lead Faculty</h4>
          <p>A former Distinguished Engineer at Google Cloud and lead researcher at Bell Labs. Dr. Sterling has spent two decades architecting the distributed systems that power global internet traffic. He holds 45 patents in network protocols and distributed consensus.</p>
          <div className="expertise-tags">
            <span>Distributed Systems</span>
            <span>Rust</span>
            <span>Cloud Architecture</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Sophia Varma</h3>
          <h4>Design Director • UX Strategy Lead</h4>
          <p>An award-winning designer with a portfolio spanning automotive UI for Tesla to fintech accessibility systems for Goldman Sachs. Sophia's curriculum focuses on the intersection of cognitive psychology and systematic design languages.</p>
          <div className="expertise-tags">
            <span>UX Strategy</span>
            <span>Design Systems</span>
            <span>Cognitive Psych</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Dr. Hiroshi Tanaka</h3>
          <h4>AI Research Scientist • Neural Systems Lead</h4>
          <p>Dr. Tanaka's research in Generative Adversarial Networks and Transformer efficiency has been cited in over 12,000 academic papers. He currently leads a research lab focused on model alignment and ethical AI architectures.</p>
          <div className="expertise-tags">
            <span>Deep Learning</span>
            <span>LLMs</span>
            <span>Ethical AI</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Elena Volkov</h3>
          <h4>Cybersecurity Director • Zero Trust Specialist</h4>
          <p>A veteran security consultant for Fortune 500 companies, Elena specializes in defensive operations and zero-trust architecture. She is a core contributor to several open-source penetration testing frameworks.</p>
          <div className="expertise-tags">
            <span>Cybersecurity</span>
            <span>Pen-Testing</span>
            <span>Zero Trust</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Marcus Chen</h3>
          <h4>Head of MLOps • Deployment Strategist</h4>
          <p>Formerly at Uber's Michelangelo team, Marcus has spent years perfecting the lifecycle of machine learning models. He focuses on model observability, latency optimization, and automated retraining pipelines at scale.</p>
          <div className="expertise-tags">
            <span>MLOps</span>
            <span>Kubernetes</span>
            <span>Scalability</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Jordan Okonkwo</h3>
          <h4>Blockchain Architect • Smart Contract Lead</h4>
          <p>Jordan is a pioneer in decentralized finance (DeFi) architectures. He has audited smart contracts securing billions in assets and leads our research into layer-2 scaling solutions and cryptographic security.</p>
          <div className="expertise-tags">
            <span>Blockchain</span>
            <span>Solidity</span>
            <span>Cryptography</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Rachel Kim</h3>
          <h4>Principal Infrastructure Engineer • IaC Expert</h4>
          <p>With a focus on declarative infrastructure, Rachel has led multi-cloud migrations for global enterprises. She is a recognized expert in Terraform and Pulumi, focusing on immutable infrastructure patterns.</p>
          <div className="expertise-tags">
            <span>Terraform</span>
            <span>Cloud Engineering</span>
            <span>DevOps</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Tomás Álvarez</h3>
          <h4>Kubernetes Specialist • Cloud Native Lead</h4>
          <p>A CNCF ambassador and frequent speaker at KubeCon, Tomás specializes in service mesh architectures and container security. He has designed planet-scale orchestration systems for leading streaming services.</p>
          <div className="expertise-tags">
            <span>Kubernetes</span>
            <span>Istio</span>
            <span>Cloud Native</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Amira Hassan</h3>
          <h4>Big Data Architect • Streaming Analytics Lead</h4>
          <p>Amira has designed real-time data processing engines for high-frequency trading and IoT platforms. She specializes in Apache Spark, Kafka, and building resilient data lakes for petabyte-scale analytics.</p>
          <div className="expertise-tags">
            <span>Big Data</span>
            <span>Apache Kafka</span>
            <span>Spark</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Alex Rivera</h3>
          <h4>Full Stack Architect • Next.js Core Contributor</h4>
          <p>A recognized leader in the React ecosystem, Alex focuses on performance-driven web engineering. He has architected some of the world's most visited consumer web applications with a focus on sub-second delivery.</p>
          <div className="expertise-tags">
            <span>Next.js</span>
            <span>React</span>
            <span>Web Performance</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Grace O’Connor</h3>
          <h4>Lead iOS Architect • SwiftUI Pioneer</h4>
          <p>Grace has led mobile engineering teams at top-tier tech firms, focusing on high-performance iOS applications. She is a pioneer in SwiftUI and modern mobile architecture patterns like Composable Architecture.</p>
          <div className="expertise-tags">
            <span>iOS Development</span>
            <span>SwiftUI</span>
            <span>Mobile UX</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Sanjay Patel</h3>
          <h4>Go Backend Lead • Microservices Specialist</h4>
          <p>Sanjay specializes in building high-concurrency systems using Go. He has designed distributed backend architectures for global fintech platforms, focusing on reliability, throughput, and gRPC communication.</p>
          <div className="expertise-tags">
            <span>Go Programming</span>
            <span>Microservices</span>
            <span>gRPC</span>
          </div>
        </div>
      </div>
      <div className="instructor-hero-card">
        <div className="hero-content">
          <h3>Li Wei</h3>
          <h4>Android Engineering Lead • Kotlin Expert</h4>
          <p>A Kotlin GDE (Google Developer Expert), Li focuses on modern Android development. He has led the transition to Jetpack Compose for several major apps and specializes in offline-first architecture and performance.</p>
          <div className="expertise-tags">
            <span>Android</span>
            <span>Kotlin</span>
            <span>Jetpack Compose</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
