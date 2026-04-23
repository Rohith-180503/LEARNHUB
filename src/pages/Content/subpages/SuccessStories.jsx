import { PageHeader } from "../ContentComponents";

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
