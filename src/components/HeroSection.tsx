import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Download, Trophy, Zap, Users } from "lucide-react";
import rxLogo from "@/assets/rx-logo.png";
import gamingBunny from "@/assets/gaming-bunny.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-dark opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gaming-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 animate-float">
          <img 
            src={rxLogo} 
            alt="RX TOURNA" 
            className="w-32 h-32 mx-auto gaming-glow rounded-2xl mb-6"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
          RX TOURNA
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
          The Ultimate Tournament Gaming Platform
        </p>
        
        <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
          Join epic tournaments, compete with players worldwide, and rise to become the champion
        </p>

        {/* Gaming Bunny */}
        <div className="mb-8">
          <img 
            src={gamingBunny} 
            alt="Gaming Bunny Mascot" 
            className="w-40 h-40 mx-auto gaming-glow rounded-full animate-float"
          />
          <p className="text-gaming-accent font-semibold mt-4 text-lg">
            Meet Your Gaming Buddy! 🐰
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button 
            variant="download" 
            size="lg" 
            className="text-lg px-10 py-5 h-auto"
            onClick={() => toast("Thanks For downloading!")}
          >
            <a 
              href="https://drive.google.com/uc?id=1IMy5mLGCHhDrXHdxGBR78p3ilxe_iI7A"
              className="flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              Download RX TOURNA
            </a>
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 gaming-glow">
            <Zap className="w-12 h-12 text-gaming-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-foreground/70">Real-time tournaments with instant matchmaking</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 gaming-glow">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Competitive</h3>
            <p className="text-foreground/70">Skill-based rankings and epic tournaments</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 gaming-glow">
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-foreground/70">Connect with gamers worldwide</p>
          </div>
        </div>

        {/* Earnings & Features Section */}
        <div className="bg-card/30 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 max-w-5xl mx-auto gaming-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">
            💰 Earn Big with RX TOURNA! 💰
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background/50 rounded-xl p-6 border border-gaming-accent/30">
              <div className="text-3xl mb-3">💸</div>
              <h3 className="text-lg font-bold text-gaming-accent mb-2">Refer & Earn System</h3>
              <p className="text-sm text-foreground/80">Invite friends and earn money for every referral!</p>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-primary/30">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-primary mb-2">Fast Deposit & Withdrawal</h3>
              <p className="text-sm text-foreground/80">💯 Legit & instant transactions guaranteed!</p>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-secondary/30">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Insane Daily Bonus</h3>
              <p className="text-sm text-foreground/80">Daily lucky winners & amazing rewards!</p>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-gaming-accent/30">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gaming-accent mb-2">Earn Up to ₹100</h3>
              <p className="text-sm text-foreground/80">In one BR ranked match! Huge earnings potential!</p>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-primary/30">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-bold text-primary mb-2">FF Customs Room</h3>
              <p className="text-sm text-foreground/80">💯 Only players who join the match guaranteed!</p>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-secondary/30">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Instagram Deposit</h3>
              <p className="text-sm text-foreground/80">Deposit directly from Instagram messages!</p>
            </div>
          </div>

          <div className="mt-8 bg-background/70 rounded-xl p-6 border border-primary/40">
            <div className="text-center">
              <div className="text-4xl mb-4">🎧💬</div>
              <h3 className="text-xl font-bold text-primary mb-2">24/7 Customer Support</h3>
              <p className="text-foreground/80 mb-4">Need help? Message us anytime on our page or social media!</p>
              <div className="text-sm text-gaming-accent font-semibold">
                ⚡ Fast Response • 💯 Reliable Support • 🔥 Always Available
              </div>
            </div>
          </div>

          {/* Anti-Hack Policy */}
          <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🚫⚡</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Zero Tolerance Policy</h3>
              <p className="text-foreground/90 font-semibold">
                NO HACKS ALLOWED! Players using hacks get <span className="text-red-400">IMMEDIATELY BANNED</span>
              </p>
              <div className="text-sm text-foreground/70 mt-2">
                Fair play only • Clean gaming environment • Instant detection & ban
              </div>
            </div>
          </div>

          {/* Manual Verification Notice */}
          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍✅</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Manual Verification Process</h3>
              <p className="text-foreground/90 font-semibold mb-2">
                We are checking payments and tournament games manually
              </p>
              <div className="text-sm text-foreground/70">
                📋 All payments verified • 🎮 Tournament games inspected • ⏱️ Processing time may vary
              </div>
              <div className="text-xs text-yellow-400 mt-2 font-medium">
                Please be patient while we ensure fair play and secure transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};