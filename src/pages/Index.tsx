
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import DecorativeElement from "@/components/DecorativeElement";
import FeatureCard from "@/components/FeatureCard";
import { TrendingUp, Users, Shield, PiggyBank, Check } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const parallaxValue = scrollY * 0.15;

  return (
    <div className="min-h-screen overflow-hidden bg-navy font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
      >
        {/* Filigree decorative elements in background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 opacity-5">
            <div className="w-96 h-96 rounded-full border border-white/5"></div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/4 opacity-10">
            <div className="w-64 h-64 rounded-full border border-gold/10 animate-pulse-light"></div>
          </div>
          
          <div className="absolute top-1/2 right-1/3 opacity-5">
            <div className="w-40 h-40 rounded-full border border-dashed border-white/10"></div>
          </div>
          
          <div className="absolute -top-20 -left-20 opacity-20">
            <DecorativeElement variant="filigree" className="w-96 h-96" />
          </div>
          
          <div className="absolute bottom-10 right-10 opacity-10">
            <DecorativeElement variant="filigree" className="w-72 h-72" />
          </div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block text-sm font-medium bg-gold/10 text-gold px-4 py-1.5 rounded-full">
              Matched Betting
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight"
          >
            <span className="heading-highlight golden-gradient">BetClever</span> – Geld verdienen durch Matched Betting
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            Verdiene bis zu 7.500€ im Monat als Affiliate und hole dir noch heute deine 250€ Belohung als Mitspieler
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
              <Button size="lg" icon className="text-lg md:text-xl">
                Jetzt Mitspieler werden
              </Button>
            </a>
          </motion.div>
        </div>
        
        {/* Decorative filigree line */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 md:w-40">
          <div className="filigree-line"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-80">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-gold/50 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 right-1/4 opacity-5">
            <div className="w-80 h-80 rounded-full border border-white/5"></div>
          </div>
          
          <div className="absolute bottom-1/3 left-1/3 opacity-10">
            <div className="w-64 h-64 rounded-full border border-gold/10"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <SectionHeading 
                  title="Willkommen bei BetClever"
                  subtitle="Deine sichere und effektive Plattform, um durch Matched Betting Geld zu verdienen."
                  className="text-left"
                />
                
                <p className="text-white/70">
                  Wir bieten dir eine einzigartige Möglichkeit, von zuhause aus zu arbeiten und dabei ein garantiertes Einkommen zu erzielen. Unser System ist nicht nur einfach anzuwenden, sondern auch rechtlich geprüft und entspricht den höchsten Sicherheitsstandards.
                </p>
                
                <p className="text-white/70">
                  Durch Matched Betting kannst du mit einem klaren Vorteil wetten – du nutzt Boni und Aktionen der Wettanbieter geschickt aus, um einen garantierten Gewinn zu erzielen. Egal, ob du bereits Erfahrung mit Wetten hast oder gerade erst einsteigst, BetClever hilft dir dabei, mit wenig Aufwand hohe Gewinne zu erzielen.
                </p>
                
                <div className="pt-4">
                  <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Mehr erfahren</Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="luxury-card p-8">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
                      250€ Startbonus
                    </span>
                    
                    <DecorativeElement variant="dots" />
                  </div>
                  
                  <div className="space-y-6 mt-8">
                    <div className="filigree-line"></div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-gold/20">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/80">Kein Glücksspiel, sondern mathematisch fundiert</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-gold/20">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/80">Einfaches und sicheres System</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-gold/20">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/80">Umfassende Schulung inklusive</p>
                    </div>
                    
                    <div className="filigree-line"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-30">
                  <DecorativeElement variant="ring" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Matched Betting Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy to-navy-dark relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/3 left-1/5 opacity-5">
            <div className="w-72 h-72 rounded-full border border-gold/5"></div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/5 opacity-10">
            <div className="w-80 h-80 rounded-full border border-white/5"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Was ist Matched Betting?"
            subtitle="Mathematisch garantierte Gewinne – Keine Glückssache"
            center
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Garantierter Gewinn"
              description="Das Risiko eines Verlusts ist nahezu ausgeschlossen durch mathematische Strategien."
              icon={TrendingUp}
              className="luxury-card"
            />
            
            <FeatureCard 
              title="Kein Glück erforderlich"
              description="Du bist nicht auf Zufall angewiesen, sondern nutzt systematische Berechnungen."
              icon={Check}
              className="luxury-card md:translate-y-8"
            />
            
            <FeatureCard 
              title="Einfache Anwendung"
              description="Du brauchst keine Wett-Erfahrung – wir zeigen dir Schritt für Schritt, wie es geht."
              icon={Users}
              className="luxury-card"
            />
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Mathematik und Strategie sind die Schlüssel, um mit Matched Betting erfolgreich zu sein. Bei dieser Technik werden die Wettboni von Sportwettenanbietern auf geschickte Weise ausgenutzt, um Gewinne zu sichern.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full border border-gold/10 opacity-30"></div>
            <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full border border-white/5 opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
              <DecorativeElement variant="filigree" />
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading 
            title="So funktioniert BetClever"
            subtitle="Dein Erfolgsweg mit unserem System in vier einfachen Schritten"
            center
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="luxury-card p-8">
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Wetteinsatzgeber</h3>
              <p className="text-white/70 mb-4">
                Der Wetteinsatzgeber stellt die notwendigen Einsatzsummen und Boni zur Verfügung. Wettanbieter bieten regelmäßig Neukundenboni oder Aktionen, die du für Matched Betting nutzen kannst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
            
            <div className="luxury-card p-8">
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Wettexperte</h3>
              <p className="text-white/70 mb-4">
                Der Wettexperte ist der Schlüssel zu deinem Erfolg. Er kennt die genauen Schritte und Techniken, um Boni optimal auszunutzen und Gewinne zu sichern. BetClever stellt dir alle Tools und Anleitungen zur Verfügung, damit du zum Experten wirst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
            
            <div className="luxury-card p-8">
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Mitspieler</h3>
              <p className="text-white/70 mb-4">
                Du als Mitspieler bist entscheidend für den Erfolg. Deine Aufgabe ist es, das Matched Betting korrekt durchzuführen, indem du den Boni nutzt und mit den richtigen Wetten einen Gewinn erzielst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
            
            <div className="luxury-card p-8">
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Vermittler</h3>
              <p className="text-white/70 mb-4">
                Der Vermittler spielt eine wichtige Rolle im Wachstum des Systems. Als Vermittler kannst du neue Mitspieler anwerben und dafür eine Provision erhalten. Du wirst als Bindeglied zwischen BetClever und den neuen Mitspielern fungieren.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/3 left-1/4 opacity-5">
            <div className="w-96 h-96 rounded-full border border-gold/10"></div>
          </div>
          
          <div className="absolute -top-20 -right-20 opacity-10">
            <DecorativeElement variant="filigree" className="w-80 h-80" />
          </div>
          
          <div className="absolute bottom-10 left-10 opacity-5">
            <DecorativeElement variant="filigree" className="w-60 h-60" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="luxury-card p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Verdiene bis zu 7.500€ im Monat"
                  subtitle="Nutze die Chance auf ein zusätzliches Einkommen mit Matched Betting"
                  tag="Werde jetzt Mitspieler"
                />
                
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="p-1 mt-0.5 rounded-full bg-gold/20 shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-white/70">
                      250€ Belohnung direkt nach erfolgreicher Anmeldung
                    </p>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="p-1 mt-0.5 rounded-full bg-gold/20 shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-white/70">
                      Sichere Gewinne durch mathematisch garantierte Strategien
                    </p>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="p-1 mt-0.5 rounded-full bg-gold/20 shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-white/70">
                      Verdiene zusätzlich 250€ pro vermitteltem neuen Mitspieler
                    </p>
                  </li>
                </ul>
                
                <div className="mt-10">
                  <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" icon className="text-lg">
                      Jetzt Mitspieler werden
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="luxury-card p-6 lg:p-8">
                <div className="text-4xl font-bold font-['Playfair_Display'] mb-6 golden-gradient">
                  Unsere Erfolge
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-white/60 mb-1">Gesamtgewinn aller Mitspieler</div>
                    <div className="text-2xl font-semibold golden-gradient">650.000 €</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-white/60 mb-1">Provision für Affiliates</div>
                    <div className="text-2xl font-semibold golden-gradient">450.000 €</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-white/60 mb-1">Wetteinsätze pro Jahr</div>
                    <div className="text-2xl font-semibold golden-gradient">{"> 1,5 Millionen €"}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Filigree decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-30">
              <DecorativeElement variant="ring" className="w-full h-full" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20">
              <DecorativeElement variant="ring" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
