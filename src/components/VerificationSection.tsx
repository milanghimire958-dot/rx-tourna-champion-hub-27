import { Shield, CheckCircle, User, AlertTriangle } from "lucide-react";
import ownerPhoto from "@/assets/owner-verification.jpg";

export const VerificationSection = () => {
  return (
    <section className="py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            <Shield className="w-12 h-12 inline-block mr-4 text-primary" />
            Verified & Legitimate
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We are committed to transparency and legitimacy. Here's proof of our authenticity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner Verification */}
            <div className="bg-background/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 gaming-glow">
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary gaming-glow">
                  <img 
                    src={ownerPhoto} 
                    alt="RX TOURNA Owner Verification Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-2xl font-bold text-primary">Verified Owner</h3>
                </div>
                <p className="text-foreground/80">
                  This is the real photo of the RX TOURNA owner as proof of legitimacy
                </p>
              </div>
            </div>

            {/* Legitimacy Guarantees */}
            <div className="space-y-6">
              <div className="bg-background/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">100% Legitimate Business</h4>
                    <p className="text-foreground/80">
                      We are a registered and verified gaming platform with real owner identity disclosed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <User className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-2">Transparent Identity</h4>
                    <p className="text-foreground/80">
                      Real owner photo provided as proof of authenticity and accountability
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">Legal Accountability</h4>
                    <p className="text-foreground/80">
                      If you have any doubts about legitimacy, legal action can be taken with our verified identity
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-red-400 mb-2">Anti-Scam Guarantee</h4>
                  <p className="text-foreground/90 font-semibold mb-2">
                    This is NOT a fake app! Our identity is verified and we stand behind our service.
                  </p>
                  <p className="text-sm text-foreground/70">
                    Real owner • Verified business • Legal accountability • Transparent operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-background/30 rounded-xl p-6 border border-primary/20">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h5 className="font-bold text-green-400">Verified</h5>
              <p className="text-sm text-foreground/70">Real Identity</p>
            </div>
            
            <div className="text-center bg-background/30 rounded-xl p-6 border border-primary/20">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h5 className="font-bold text-blue-400">Secure</h5>
              <p className="text-sm text-foreground/70">Protected Platform</p>
            </div>
            
            <div className="text-center bg-background/30 rounded-xl p-6 border border-primary/20">
              <User className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h5 className="font-bold text-purple-400">Transparent</h5>
              <p className="text-sm text-foreground/70">Open Operations</p>
            </div>
            
            <div className="text-center bg-background/30 rounded-xl p-6 border border-primary/20">
              <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h5 className="font-bold text-yellow-400">Accountable</h5>
              <p className="text-sm text-foreground/70">Legal Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};