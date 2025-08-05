import { Link } from "react-router-dom";
import { StatusBadge } from "./StatusBadge";
import { useState } from "react";
import { EmailModal } from "./EmailModal";

interface GuideCardProps {
  icon: string;
  title: string;
  description: string;
  status: "available" | "coming-soon";
  link?: string;
  requiresEmail?: boolean;
}

export const GuideCard = ({ icon, title, description, status, link, requiresEmail = false }: GuideCardProps) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (requiresEmail && !hasAccess && status === "available") {
      e.preventDefault();
      setShowEmailModal(true);
    }
  };

  const handleEmailSubmit = (email: string) => {
    // Here you would save to Supabase
    console.log("Email submitted:", email);
    setHasAccess(true);
  };
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
          {requiresEmail && !hasAccess ? "Get Access" : "View Guide"}
        </span>
      ) : (
        <span className="inline-block px-6 py-3 bg-muted text-muted-foreground rounded-lg cursor-not-allowed opacity-60">
          Coming Soon
        </span>
      )}
    </>
  );

  if (status === "available" && link) {
    if (requiresEmail && !hasAccess) {
      return (
        <>
          <div 
            className="glass-card rounded-2xl p-8 block no-underline cursor-pointer hover:transform hover:scale-105 transition-all"
            onClick={handleCardClick}
          >
            {content}
          </div>
          <EmailModal
            isOpen={showEmailModal}
            onClose={() => setShowEmailModal(false)}
            onSubmit={handleEmailSubmit}
            guideName={title}
          />
        </>
      );
    }
    
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