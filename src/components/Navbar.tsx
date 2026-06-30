"use client";

import React, { useState, useEffect } from "react";
import { Phone, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("ppa-lead-form");
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Tính tiết kiệm", href: "ppa-calculator", hasDropdown: false },
    { label: "So sánh điện", href: "ppa-comparison", hasDropdown: false },
    { label: "Dự án mẫu", href: "ppa-case-studies", hasDropdown: false },
    { label: "Quy trình PPA", href: "ppa-process", hasDropdown: false },
    { label: "Hỏi đáp", href: "ppa-faq", hasDropdown: true },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6",
        isScrolled ? "top-3 py-0" : "top-5 py-0"
      )}
    >
      {/* Floating Capsule Bar */}
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between rounded-full border transition-all duration-350 px-4 sm:px-5",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2" 
          : "bg-white/[0.04] backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] py-3"
      )}>
        
        {/* Compact Brand Logo & Tagline */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer select-none"
        >
          <div className="h-8 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
            <img
              src="/Logo/PNG/Full Color Logo.png"
              alt="BMC Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          
          <div className="hidden sm:flex flex-col text-left leading-none">
            <span className={cn(
              "font-sans font-black tracking-tight text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap",
              isScrolled 
                ? "text-slate-900 group-hover:text-earth-brown" 
                : "text-white group-hover:text-solar-gold"
            )}>
              Bình Minh Power
            </span>
          </div>
        </div>

        {/* Navigation Section Anchors */}
        <nav className={cn(
          "hidden lg:flex items-center gap-1 rounded-full px-2 py-1 select-none border transition-all duration-300",
          isScrolled 
            ? "bg-stone-50/50 border-stone-200/50" 
            : "bg-white/[0.04] border-white/10"
        )}>
          {navItems.map((link) => (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                "text-[11px] font-black transition-all duration-200 px-3 py-1.5 rounded-full flex items-center gap-1 group whitespace-nowrap",
                isScrolled 
                  ? "text-stone-600 hover:text-slate-950 hover:bg-stone-100" 
                  : "text-stone-300 hover:text-white hover:bg-white/[0.08]"
              )}
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <ChevronDown className="w-3 h-3 text-current transition-transform duration-250 group-hover:translate-y-0.5 opacity-70" />
              )}
            </a>
          ))}
        </nav>

        {/* Slender Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Slender Hotline Link Capsule - hidden on mobile */}
          <motion.a
            href="tel:0913943788"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "hidden sm:flex items-center gap-2 font-sans px-3 py-1.5 rounded-full border transition-all focus:outline-none",
              isScrolled 
                ? "bg-stone-50 border-stone-200 hover:border-solar-gold/40" 
                : "bg-white/[0.03] border-white/10 hover:border-solar-gold/40"
            )}
          >
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shadow-xs shrink-0 relative overflow-visible border transition-all duration-300",
              isScrolled 
                ? "bg-stone-200/60 border-stone-200/50 text-earth-brown" 
                : "bg-white/10 border-white/10 text-solar-gold"
            )}>
              <span className="absolute inset-0 rounded-full bg-solar-gold/25 animate-ping scale-110"></span>
              <motion.div
                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Phone className="w-3 h-3 text-solar-gold fill-solar-gold/10" />
              </motion.div>
            </div>
            
            <div className="flex flex-col text-left leading-none pr-1">
              <span className={cn(
                "text-[7.5px] font-bold uppercase tracking-wider hidden md:block transition-colors duration-300",
                isScrolled ? "text-stone-500" : "text-stone-400"
              )}>Hotline</span>
              <span className={cn(
                "font-black text-xs mt-0.5 whitespace-nowrap",
                isScrolled ? "text-slate-950" : "text-white"
              )}>0913 943 788</span>
            </div>
          </motion.a>
          
          {/* Slender CTA Button */}
          <motion.button
            type="button"
            onClick={scrollToForm}
            whileHover={{ 
              scale: 1.04, 
              boxShadow: "0 0 0 6px rgba(248, 185, 20, 0.18)" 
            }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden group px-4 py-2 rounded-full text-[11px] sm:text-xs font-black shadow-xs cursor-pointer focus:outline-none transition-all duration-300 flex items-center gap-1.5 bg-solar-gold hover:bg-solar-gold-hover text-deep-brown"
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 pointer-events-none"
            />
            
            {/* Tiny Arrow Up Right */}
            <div className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 bg-black/10 text-deep-brown">
              <ArrowUpRight className="w-2.5 h-2.5 text-current" />
            </div>

            <span className="relative z-10 font-bold whitespace-nowrap">Tính tiết kiệm ngay</span>
          </motion.button>
        </div>

      </div>
    </motion.header>
  );
}
