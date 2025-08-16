import screenshot1 from "@/assets/screenshot1.png";
import screenshot2 from "@/assets/screenshot2.png";
import screenshot3 from "@/assets/screenshot3.png";

export const ScreenshotSection = () => {
  const screenshots = [
    { src: screenshot1, alt: "Tournament Dashboard", title: "Tournament Dashboard" },
    { src: screenshot2, alt: "Match Details", title: "Live Matches" },
    { src: screenshot3, alt: "Tournament Brackets", title: "Tournament Brackets" }
  ];

  return (
    <section id="screenshots" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            See RX TOURNA in Action
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Experience the sleek interface and powerful features that make tournaments exciting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card/20 backdrop-blur-sm border border-primary/30 gaming-glow hover:shadow-glow-accent transition-all duration-500 hover:scale-105"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img 
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-gradient mb-2">{screenshot.title}</h3>
                  <p className="text-sm text-foreground/70">Tap to explore features</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-primary/30 rounded-xl p-6 max-w-4xl mx-auto gaming-glow">
            <h3 className="text-2xl font-bold text-gaming-accent mb-4">
              💰 Disclaimer
            </h3>
            <p className="text-lg text-foreground/80">
              We are not responsible for your money loss - it's your skills that count! 
              Work hard on your skills and earn more money 🤑
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};