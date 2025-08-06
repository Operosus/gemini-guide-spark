import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  guideName: string;
  redirectTo?: string;
}

export const EmailModal = ({ isOpen, onClose, onSubmit, guideName, redirectTo }: EmailModalProps) => {
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
      // Save email to Supabase
      const { error } = await supabase
        .from('Gemini Guides Leads')
        .insert([{ email }]);

      if (error) {
        throw error;
      }
      
      // Store access in localStorage
      localStorage.setItem('hasEmailAccess', 'true');
      localStorage.setItem('userEmail', email);
      
      onSubmit(email);
      setEmail("");
      onClose();
      
      // Redirect to the specific guide if redirectTo is provided
      if (redirectTo) {
        window.location.href = redirectTo;
      }
      
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
        className="sm:max-w-md fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-card p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg border-primary/20"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-white">
            🚀 Unlock Premium Guides
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="text-center space-y-2">
            <p className="text-[#071C73]">
              Get instant access to "{guideName}" and all other premium guides
            </p>
            <p className="text-sm text-[#071C73]/80">
              No spam, just value. One email = lifetime access to all guides.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#071C73]">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-white/30 text-white hover:bg-white/10"
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
          
          <div className="text-xs text-[#071C73]/60 text-center">
            Created by Operosus to help teams master AI productivity
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};