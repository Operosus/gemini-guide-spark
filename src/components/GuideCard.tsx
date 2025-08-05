import { Link } from "react-router-dom";
import { StatusBadge } from "./StatusBadge";

interface GuideCardProps {
  icon: string;
  title: string;
  description: string;
  status: "available" | "coming-soon";
  link?: string;
}

export const GuideCard = ({ icon, title, description, status, link }: GuideCardProps) => {
  const content = (
    <>
      <div className="w-15 h-15 rounded-xl flex items-center justify-center mb-6 text-2xl bg-gradient-primary text-white">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-text-primary mb-3 flex items-center">
        {title}
        <StatusBadge status={status}>
          {status === "available" ? "Available" : "Coming Soon"}
        </StatusBadge>
      </h2>
      <p className="text-text-secondary mb-6 leading-relaxed">
        {description}
      </p>
      {status === "available" && link ? (
        <span className="inline-block gradient-button px-6 py-3 rounded-lg font-medium text-white no-underline">
          View Guide
        </span>
      ) : (
        <span className="inline-block px-6 py-3 bg-muted text-muted-foreground rounded-lg cursor-not-allowed opacity-60">
          Coming Soon
        </span>
      )}
    </>
  );

  if (status === "available" && link) {
    return (
      <Link to={link} className="glass-card rounded-2xl p-8 block no-underline">
        {content}
      </Link>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      {content}
    </div>
  );
};