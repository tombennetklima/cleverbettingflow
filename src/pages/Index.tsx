import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { Sparkles, ChevronDown, Check } from "lucide-react";
import DecorativeElement from "@/components/DecorativeElement";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy text-white font-['Inter',sans-serif] overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] border border-gold rounded-full animate-pulse-light"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <DecorativeElement variant="filigree" className="w-[50vw] h-[50vw]" />
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-32">
        {/* Logo and sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light">
              <Sparkles className="w-6 h-6 text-navy" />
            </div>
            <h1 className="ml-4 text-3xl md:text-4xl font-bold golden-gradient font-['Playfair_Display']">
              BetClever
            </h1>
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 font-['Playfair_Display'] tracking-tight leading-tight">
            Geld verdienen durch <span className="golden-gradient">Matched Betting</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            Verdiene bis zu 7.500€ im Monat als Affiliate und hole dir noch heute deine 250€ Belohung als Mitspieler
          </p>
          
          <div className="mt-8">
            <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
              <Button size="lg" icon className="text-lg">
                Jetzt Mitspieler werden
              </Button>
            </a>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center"
          >
            <p className="text-white/50 text-sm mb-2">Mehr erfahren</p>
            <ChevronDown className="h-6 w-6 text-gold/70" />
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section with 3D Card Effect */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="inline-block text-sm font-medium bg-gold/10 text-gold px-3 py-1 rounded-full mb-4">
                  Über BetClever
                </span>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 font-['Playfair_Display'] tracking-tight">
                  <span className="golden-gradient">Willkommen</span> bei BetClever
                </h2>
                
                <div className="space-y-4 text-white/80">
                  <p>
                    Wir bieten dir eine einzigartige Möglichkeit, von zuhause aus zu arbeiten und dabei ein garantiertes Einkommen zu erzielen. Unser System ist nicht nur einfach anzuwenden, sondern auch rechtlich geprüft und entspricht den höchsten Sicherheitsstandards.
                  </p>
                  <p>
                    Durch Matched Betting kannst du mit einem klaren Vorteil wetten – du nutzt Boni und Aktionen der Wettanbieter geschickt aus, um einen garantierten Gewinn zu erzielen. Egal, ob du bereits Erfahrung mit Wetten hast oder gerade erst einsteigst, BetClever hilft dir dabei, mit wenig Aufwand hohe Gewinne zu erzielen.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="luxury-card p-8 backdrop-blur-lg">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
                      250€ Startbonus
                    </span>
                    <DecorativeElement variant="dots" />
                  </div>
                  
                  <div className="filigree-line my-6"></div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-gold/20">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/90">Kein Glücksspiel, sondern mathematisch fundiert</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-gold/20">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/90">Einfaches und sicheres System</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-gold/20">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/90">Umfassende Schulung inklusive</p>
                    </div>
                  </div>
                  
                  <div className="filigree-line my-6"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-30">
                  <DecorativeElement variant="ring" className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section id="system" className="relative py-20 px-4 bg-gradient-to-b from-navy to-navy-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium bg-gold/10 text-gold px-3 py-1 rounded-full mb-4">
              Das System
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 font-['Playfair_Display'] tracking-tight">
              <span className="golden-gradient">So funktioniert</span> BetClever
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Dein Erfolgsweg mit unserem System in vier einfachen Schritten
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6"
            >
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Wetteinsatzgeber</h3>
              <p className="text-white/70">
                Der Wetteinsatzgeber stellt die notwendigen Einsatzsummen und Boni zur Verfügung. Wettanbieter bieten regelmäßig Neukundenboni oder Aktionen, die du für Matched Betting nutzen kannst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6"
            >
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Wettexperte</h3>
              <p className="text-white/70">
                Der Wettexperte ist der Schlüssel zu deinem Erfolg. Er kennt die genauen Schritte und Techniken, um Boni optimal auszunutzen und Gewinne zu sichern. BetClever stellt dir alle Tools und Anleitungen zur Verfügung, damit du zum Experten wirst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6"
            >
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Mitspieler</h3>
              <p className="text-white/70">
                Du als Mitspieler bist entscheidend für den Erfolg. Deine Aufgabe ist es, das Matched Betting korrekt durchzuführen, indem du den Boni nutzt und mit den richtigen Wetten einen Gewinn erzielst.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6"
            >
              <h3 className="text-xl font-medium mb-4 golden-gradient">Der Vermittler</h3>
              <p className="text-white/70">
                Der Vermittler spielt eine wichtige Rolle im Wachstum des Systems. Als Vermittler kannst du neue Mitspieler anwerben und dafür eine Provision erhalten. Du wirst als Bindeglied zwischen BetClever und den neuen Mitspielern fungieren.
              </p>
              <DecorativeElement variant="lines" className="mt-6" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6 text-center"
            >
              <p className="text-white/60 mb-2">Gesamtgewinn aller Mitspieler</p>
              <p className="text-4xl font-bold golden-gradient mb-2">650.000 €</p>
              <div className="filigree-line my-4 mx-auto w-16"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6 text-center"
            >
              <p className="text-white/60 mb-2">Provision für Affiliates</p>
              <p className="text-4xl font-bold golden-gradient mb-2">450.000 €</p>
              <div className="filigree-line my-4 mx-auto w-16"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="luxury-card p-6 text-center"
            >
              <p className="text-white/60 mb-2">Wetteinsätze pro Jahr</p>
              <p className="text-4xl font-bold golden-gradient mb-2">{"> 1,5 Mio €"}</p>
              <div className="filigree-line my-4 mx-auto w-16"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-navy-dark">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20">
            <DecorativeElement variant="filigree" className="w-[40vw] h-[40vw]" />
          </div>
          <div className="absolute bottom-10 left-10">
            <DecorativeElement variant="filigree" className="w-[30vw] h-[30vw]" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="luxury-card p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6 font-['Playfair_Display'] tracking-tight">
                <span className="golden-gradient">Verdiene bis zu 7.500€</span> im Monat
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Nutze die Chance auf ein zusätzliches Einkommen mit Matched Betting. Als Mitspieler oder Affiliate kannst du sofort mit dem Verdienen beginnen.
              </p>
              
              <div className="mt-8">
                <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" icon className="text-lg">
                    Jetzt Mitspieler werden
                  </Button>
                </a>
              </div>
              
              <div className="filigree-line my-10"></div>
              
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-gold/20">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-white/80">250€ Startbonus</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-gold/20">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-white/80">Mathematische Strategien</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-gold/20">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-white/80">250€ pro vermitteltem Mitspieler</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20">
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
