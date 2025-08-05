import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "available" | "coming-soon";
  children: React.ReactNode;
}

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  return (
    <span 
      className={cn(
        "inline-block px-2 py-1 rounded text-xs font-medium ml-2",
        status === "available" ? "status-available" : "status-coming-soon"
      )}
    >
      {children}
    </span>
  );
};