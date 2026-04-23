import { PageHeader, InfoCard } from "../ContentComponents";

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
