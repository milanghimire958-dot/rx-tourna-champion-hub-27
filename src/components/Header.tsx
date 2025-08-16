import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import rxLogo from "@/assets/rx-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={rxLogo} 
            alt="RX TOURNA Logo" 
            className="w-10 h-10 gaming-glow rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gradient">RX TOURNA</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#screenshots" className="text-foreground/80 hover:text-primary transition-colors">
            Screenshots
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button 
          variant="gaming" 
          size="lg"
          onClick={() => toast("Thanks For downloading!")}
        >
          <a 
            href="https://drive.google.com/uc?id=1IMy5mLGCHhDrXHdxGBR78p3ilxe_iI7A"
            className="flex items-center gap-2"
          >
            Download Now
          </a>
        </Button>
      </div>
    </header>
  );
};