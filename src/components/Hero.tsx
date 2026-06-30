"use client";

import React from "react";
import { ArrowRight, CheckCircle, Award } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  const scrollToCalculator = () => {
    const el = document.getElementById("ppa-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { num: "0đ", label: "Vốn đầu tư", desc: "BMC tài trợ 100% thiết bị & lắp đặt" },
    { num: "10–20%", label: "Giảm hóa đơn", desc: "Chiết khấu trực tiếp trên biểu giá EVN" },
    { num: "15-20 năm", label: "Hợp đồng PPA", desc: "Bàn giao 0đ sở hữu sau thời hạn" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 md:px-8 bg-deep-brown relative overflow-hidden select-none">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/image.png"
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full scale-105 opacity-85"
        >
          <source src="/Create_a_premium_cinematic_her.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A120B]/70 via-[#1A120B]/35 to-[#1A120B]/80 z-0" />
      
      {/* Blueprint lines decor */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ 
          backgroundImage: "linear-gradient(rgba(248, 185, 20, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 185, 20, 0.15) 1px, transparent 1px)", 
          backgroundSize: "60px 60px" 
        }}
      />

      {/* Floating ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-solar-gold/5 blur-[120px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 select-text">
        <div className="space-y-8 max-w-4xl">
          
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-stone-300 text-[10px] sm:text-xs font-semibold shadow-md mx-auto"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-solar-gold"></span>
            </span>
            <span>MÔ HÌNH HỢP TÁC PPA 0 ĐỒNG VỐN ĐẦU TƯ</span>
          </motion.div>

          {/* Main Title heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white mb-5 tracking-tight leading-[1.25] max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          >
            Nhà máy anh/chị đang trả bao nhiêu tiền điện mỗi tháng?
            <br className="hidden sm:inline" />
            Nhập con số đó vào đây.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            PPA BMC: Không cần vốn đầu tư. Không cần lo bảo trì. Chỉ trả tiền điện giá thấp hơn &mdash; ngay từ tháng đầu tiên.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          >
            {/* Primary button */}
            <button
              type="button"
              onClick={openAuditModal}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-solar-gold hover:bg-solar-gold-hover text-deep-brown font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer animate-pulse-glow"
            >
              <span>Nhận báo cáo tiết kiệm cá nhân</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary button */}
            <button
              type="button"
              onClick={scrollToCalculator}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none"
            >
              <span>Tính tiết kiệm ngay</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Stats Grid Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-10 sm:mt-16">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
              className="p-3 sm:p-5 rounded-[1.25rem] sm:rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col text-left justify-between min-h-[90px] sm:min-h-[120px] hover:border-solar-gold/30 hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
            >
              <div className="flex justify-between items-start">
                <span className="text-solar-gold text-[8px] sm:text-[10px] font-black uppercase tracking-wider block">
                  {s.label}
                </span>
                <div className="hidden sm:flex w-6 h-6 rounded-lg bg-white/5 border border-white/10 items-center justify-center text-solar-gold/60 group-hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-base sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
                  {s.num}
                </span>
                <p className="text-[8px] sm:text-[10px] text-stone-400 mt-1 font-medium leading-tight sm:leading-normal">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
