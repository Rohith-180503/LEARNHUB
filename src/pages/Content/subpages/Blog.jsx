import { PageHeader } from "../ContentComponents";

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
