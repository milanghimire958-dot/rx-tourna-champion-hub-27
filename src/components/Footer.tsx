import rxLogo from "@/assets/rx-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src={rxLogo} 
              alt="RX TOURNA" 
              className="w-8 h-8 gaming-glow rounded-lg"
            />
            <span className="text-xl font-bold text-gradient">RX TOURNA</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-sm">
              © 2025 RX TOURNA. Built for champions.
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              Powered by passion for competitive gaming
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-foreground/50 text-sm">
            🎮 May the odds be ever in your favor! 🏆
          </p>
        </div>
      </div>
    </footer>
  );
};