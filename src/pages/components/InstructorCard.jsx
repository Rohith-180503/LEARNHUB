import getInitials from "../../utils/getInitials";
import "./InstructorCard.css";

export default function InstructorCard({ instructor }) {
  return (
    <div className="instructor-card">
      <div className="instructor-avatar">{getInitials(instructor.name)}</div>
      <h4 className="instructor-name">{instructor.name}</h4>
      <p className="instructor-title">{instructor.title}</p>
      <p className="instructor-bio">{instructor.bio}</p>
    </div>
  );
}
