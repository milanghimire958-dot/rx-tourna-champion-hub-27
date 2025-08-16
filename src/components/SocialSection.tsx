import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Instagram, MessageCircle, Users } from "lucide-react";

export const SocialSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      username: "sigmaboii777",
      icon: Instagram,
      href: "https://instagram.com/sigmaboii777",
      color: "hover:text-pink-500"
    },
    {
      name: "WhatsApp",
      username: "9848400878",
      icon: MessageCircle,
      href: "https://wa.me/9848400878",
      color: "hover:text-green-500"
    },
    {
      name: "Discord",
      username: "Gaming Community",
      icon: Users,
      href: "https://discord.gg/U3agT5jM",
      color: "hover:text-indigo-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Join Our Gaming Community
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Connect with us on social media and stay updated with the latest tournaments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <div key={social.name} className="text-center">
              <Button 
                variant="social" 
                size="lg" 
                className="w-full h-auto p-8 flex-col gap-4 gaming-glow hover:scale-105 transform transition-all duration-300"
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <social.icon className={`w-12 h-12 ${social.color} transition-colors`} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                    <p className="text-foreground/70 text-sm">{social.username}</p>
                  </div>
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-8 max-w-2xl mx-auto gaming-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Dominate?</h3>
            <p className="text-foreground/80 mb-6">
              Download RX TOURNA now and start your journey to becoming a tournament champion!
            </p>
            <Button 
              variant="download" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => toast("Thanks For downloading!")}
            >
              <a 
                href="https://drive.google.com/uc?id=1IMy5mLGCHhDrXHdxGBR78p3ilxe_iI7A"
                className="flex items-center gap-3"
              >
                Download RX TOURNA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};