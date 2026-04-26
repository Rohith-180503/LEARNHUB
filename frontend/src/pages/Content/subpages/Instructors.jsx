import { PageHeader, InstructorCard } from "../ContentComponents";

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
