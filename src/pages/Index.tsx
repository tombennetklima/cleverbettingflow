
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import DecorativeElement from "@/components/DecorativeElement";
import FeatureCard from "@/components/FeatureCard";
import { Check, TrendingUp, Users, Shield, PiggyBank } from "lucide-react";

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
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#fafafa] to-[#f5f7fa] font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
      >
        {/* Decorative elements in background */}
        <div 
          className="absolute top-1/4 -left-20 w-64 h-64 lg:w-96 lg:h-96 opacity-30"
          style={{ transform: `translateY(${parallaxValue * 0.5}px)` }}
        >
          <DecorativeElement variant="circle" className="w-full h-full" />
        </div>
        
        <div 
          className="absolute bottom-1/4 -right-20 w-64 h-64 lg:w-80 lg:h-80 opacity-20"
          style={{ transform: `translateY(${-parallaxValue * 0.3}px)` }}
        >
          <DecorativeElement variant="circle" className="w-full h-full" />
        </div>
        
        <div className="absolute top-32 right-1/4 opacity-60">
          <DecorativeElement variant="dots" />
        </div>
        
        <div className="absolute bottom-32 left-1/4 opacity-60">
          <DecorativeElement variant="dots" />
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block text-sm font-medium text-accent/90 bg-accent/10 px-4 py-1.5 rounded-full">
              Matched Betting
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight"
          >
            <span className="heading-highlight">BetClever</span> – Geld verdienen durch Matched Betting
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
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
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-80">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-primary/50 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <SectionHeading 
                  title="Willkommen bei BetClever"
                  subtitle="Deine sichere und effektive Plattform, um durch Matched Betting Geld zu verdienen."
                />
                
                <p className="text-muted-foreground">
                  Wir bieten dir eine einzigartige Möglichkeit, von zuhause aus zu arbeiten und dabei ein garantiertes Einkommen zu erzielen. Unser System ist nicht nur einfach anzuwenden, sondern auch rechtlich geprüft und entspricht den höchsten Sicherheitsstandards.
                </p>
                
                <p className="text-muted-foreground">
                  Durch Matched Betting kannst du mit einem klaren Vorteil wetten – du nutzt Boni und Aktionen der Wettanbieter geschickt aus, um einen garantierten Gewinn zu erzielen. Egal, ob du bereits Erfahrung mit Wetten hast oder gerade erst einsteigst, BetClever hilft dir dabei, mit wenig Aufwand hohe Gewinne zu erzielen.
                </p>
                
                <div className="pt-4">
                  <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
                    <Button>Mehr erfahren</Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] bg-gradient-to-tr from-primary/5 to-accent/10 rounded-2xl overflow-hidden p-6 border border-white/10 shadow-lg">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-glass"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-accent/90 bg-accent/10 px-3 py-1 rounded-full">
                      250€ Startbonus
                    </span>
                    
                    <DecorativeElement variant="dots" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded-full bg-primary/20">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm">Kein Glücksspiel, sondern mathematisch fundiert</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded-full bg-primary/20">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm">Einfaches und sicheres System</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded-full bg-primary/20">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm">Umfassende Schulung inklusive</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-40">
                  <DecorativeElement variant="ring" className="w-full h-full" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 animate-float">
                <div className="relative py-3 px-4 bg-white rounded-lg shadow-md text-sm">
                  <div className="font-medium">Sichere Gewinne</div>
                  <p className="text-muted-foreground text-xs">Mathematisch garantiert</p>
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Matched Betting Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-secondary/50 relative">
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
            />
            
            <FeatureCard 
              title="Kein Glück erforderlich"
              description="Du bist nicht auf Zufall angewiesen, sondern nutzt systematische Berechnungen."
              icon={Check}
              className="md:translate-y-8"
            />
            
            <FeatureCard 
              title="Einfache Anwendung"
              description="Du brauchst keine Wett-Erfahrung – wir zeigen dir Schritt für Schritt, wie es geht."
              icon={Users}
            />
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Mathematik und Strategie sind die Schlüssel, um mit Matched Betting erfolgreich zu sein. Bei dieser Technik werden die Wettboni von Sportwettenanbietern auf geschickte Weise ausgenutzt, um Gewinne zu sichern.
            </p>
            
            <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
              <Button>Jetzt starten</Button>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-pulse-light"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 animate-pulse-light"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading 
            title="So funktioniert BetClever"
            subtitle="Dein Erfolgsweg mit unserem System in vier einfachen Schritten"
            center
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-glass rounded-2xl p-8 border border-white/10 shadow-md">
              <h3 className="text-xl font-medium mb-4">Der Wetteinsatzgeber</h3>
              <p className="text-muted-foreground mb-4">
                Der Wetteinsatzgeber stellt die notwendigen Einsatzsummen und Boni zur Verfügung. Wettanbieter bieten regelmäßig Neukundenboni oder Aktionen, die du für Matched Betting nutzen kannst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
            
            <div className="bg-glass rounded-2xl p-8 border border-white/10 shadow-md">
              <h3 className="text-xl font-medium mb-4">Der Wettexperte</h3>
              <p className="text-muted-foreground mb-4">
                Der Wettexperte ist der Schlüssel zu deinem Erfolg. Er kennt die genauen Schritte und Techniken, um Boni optimal auszunutzen und Gewinne zu sichern. BetClever stellt dir alle Tools und Anleitungen zur Verfügung, damit du zum Experten wirst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
            
            <div className="bg-glass rounded-2xl p-8 border border-white/10 shadow-md">
              <h3 className="text-xl font-medium mb-4">Der Mitspieler</h3>
              <p className="text-muted-foreground mb-4">
                Du als Mitspieler bist entscheidend für den Erfolg. Deine Aufgabe ist es, das Matched Betting korrekt durchzuführen, indem du den Boni nutzt und mit den richtigen Wetten einen Gewinn erzielst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
            
            <div className="bg-glass rounded-2xl p-8 border border-white/10 shadow-md">
              <h3 className="text-xl font-medium mb-4">Der Vermittler</h3>
              <p className="text-muted-foreground mb-4">
                Der Vermittler spielt eine wichtige Rolle im Wachstum des Systems. Als Vermittler kannst du neue Mitspieler anwerben und dafür eine Provision erhalten. Du wirst als Bindeglied zwischen BetClever und den neuen Mitspielern fungieren.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-16 shadow-xl border border-accent/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 opacity-80"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/10 opacity-60"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Verdiene bis zu 7.500€ im Monat"
                  subtitle="Nutze die Chance auf ein zusätzliches Einkommen mit Matched Betting"
                  tag="Werde jetzt Mitspieler"
                />
                
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="p-1 mt-0.5 rounded-full bg-primary/20 shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      250€ Belohnung direkt nach erfolgreicher Anmeldung
                    </p>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="p-1 mt-0.5 rounded-full bg-primary/20 shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Sichere Gewinne durch mathematisch garantierte Strategien
                    </p>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="p-1 mt-0.5 rounded-full bg-primary/20 shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
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
              
              <div className="bg-gradient-to-tr from-primary/5 to-accent/10 rounded-xl p-6 lg:p-8 border border-white/10 shadow-lg">
                <div className="text-4xl font-bold font-['Playfair_Display'] mb-4">
                  Unsere Erfolge
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <div className="text-muted-foreground mb-1">Gesamtgewinn aller Mitspieler</div>
                    <div className="text-2xl font-semibold">650.000 €</div>
                  </div>
                  
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <div className="text-muted-foreground mb-1">Provision für Affiliates</div>
                    <div className="text-2xl font-semibold">450.000 €</div>
                  </div>
                  
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <div className="text-muted-foreground mb-1">Wetteinsätze pro Jahr</div>
                    <div className="text-2xl font-semibold">> 1,5 Millionen €</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
