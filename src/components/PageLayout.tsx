import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

export const PageLayout = ({ children, showBackButton = false }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {showBackButton && (
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Guides
            </Link>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};