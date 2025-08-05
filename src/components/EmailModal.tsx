import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  guideName: string;
}

export const EmailModal = ({ isOpen, onClose, onSubmit, guideName }: EmailModalProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Here you would normally save to Supabase
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(email);
      setEmail("");
      onClose();
      
      toast({
        title: "Success!",
        description: "You now have access to all guides. Enjoy learning!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-md glass-card border-white/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-text-primary">
            🚀 Unlock Premium Guides
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="text-center space-y-2">
            <p className="text-text-primary">
              Get instant access to "{guideName}" and all other premium guides
            </p>
            <p className="text-sm text-text-muted">
              No spam, just value. One email = lifetime access to all guides.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-text-primary">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-text-primary placeholder:text-text-muted"
                required
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-white/30 text-text-primary hover:bg-white/10"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 gradient-button"
              >
                {isLoading ? "Getting Access..." : "Get Instant Access"}
              </Button>
            </div>
          </form>
          
          <div className="text-xs text-text-muted text-center">
            Created by Operosus to help teams master AI productivity
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};