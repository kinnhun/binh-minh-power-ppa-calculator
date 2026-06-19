"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled down past the Hero section (e.g. 500px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  const scrollToCalculator = () => {
    const el = document.getElementById("ppa-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-40 lg:hidden flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl text-slate-900"
        >
          {/* Hotline Button */}
          <a
            href="tel:0901234788"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-earth-brown shrink-0 hover:bg-stone-200 hover:border-stone-300 transition-all"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Text and Actions */}
          <div className="flex-1 flex gap-2 items-center justify-between text-left min-w-0">
            <div className="hidden xs:flex flex-col leading-tight select-none shrink-0">
              <span className="text-[8px] sm:text-[10px] text-earth-brown uppercase font-black tracking-wider">
                PPA 0 đồng solar
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-900">
                Tiết kiệm 10-20%
              </span>
            </div>

            <div className="flex gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={scrollToCalculator}
                className="py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-xl bg-stone-100 border border-stone-200 text-slate-800 text-[10px] sm:text-[11px] font-bold hover:bg-stone-200 transition-all focus:outline-none cursor-pointer"
              >
                Tính toán
              </button>
              <button
                type="button"
                onClick={openAuditModal}
                className="py-1.5 px-3 sm:py-2.5 sm:px-4 rounded-xl bg-solar-gold text-deep-brown text-[10px] sm:text-[11px] font-black flex items-center justify-center gap-1 hover:bg-solar-gold-hover transition-all focus:outline-none cursor-pointer animate-pulse-glow"
              >
                <span>Nhận báo cáo</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
