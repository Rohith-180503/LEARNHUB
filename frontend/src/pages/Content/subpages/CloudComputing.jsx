import { PageHeader, InfoCard } from "../ContentComponents";

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
