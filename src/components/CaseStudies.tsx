"use client";

import React from "react";
import { MapPin, TrendingUp, Calendar, Zap, ShieldAlert, Award } from "lucide-react";
import { motion } from "motion/react";

export default function CaseStudies() {
  const cases = [
    {
      type: "Nhà máy Nhựa",
      location: "KCN VSIP 2, Bình Dương",
      capacity: "600 kWp",
      monthlySavings: "~100 triệu",
      annualSavings: "~1,2 tỷ",
      clientCapital: "0đ",
      duration: "21 ngày",
      badge: "Vận hành ổn định",
    },
    {
      type: "Nhà máy Gỗ",
      location: "KCN Bàu Bàng, Bình Dương",
      capacity: "840 kWp",
      monthlySavings: "~210 triệu",
      annualSavings: "~2,5 tỷ",
      clientCapital: "0đ",
      duration: "25 ngày",
      badge: "I-REC Đã cấp",
    },
    {
      type: "Nhà máy Xi Măng",
      location: "Bình Long, Bình Phước",
      capacity: "4 MWp",
      monthlySavings: "~290 triệu",
      annualSavings: "~3,5 tỷ",
      clientCapital: "0đ",
      duration: "45 ngày",
      badge: "Lớn nhất Bình Phước",
    },
  ];

  return (
    <section id="ppa-case-studies" className="bg-[#FFFDF9] py-24 select-none relative overflow-hidden border-t border-stone-200/50">
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-solar-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-solar-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
              Dự án thực tế đang hoạt động
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-text tracking-tight">
              Nhà máy cùng ngành đã làm thế nào?
            </h2>
            <p className="text-stone-600 text-sm md:text-base font-normal max-w-xl">
              Số liệu thực tế từ các dự án solar áp mái được đầu tư theo mô hình PPA 0 đồng bởi Bình Minh Power.
            </p>
          </div>

          <span className="px-4 py-2 rounded-full bg-solar-gold/10 border border-solar-gold/20 text-deep-brown text-xs font-black uppercase tracking-wider self-start md:self-end">
            100% số liệu thật
          </span>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cases.map((c, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-stone-200/80 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:border-solar-gold/30 transition-all duration-300 text-left h-full group"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-stone-400 uppercase tracking-wider block">
                        Case Study
                      </span>
                      <h3 className="text-xl font-bold text-slate-text tracking-tight group-hover:text-solar-gold transition-colors duration-200">
                        {c.type}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-solar-gold/10 border border-solar-gold/20 text-deep-brown text-[10px] font-bold whitespace-nowrap">
                      {c.badge}
                    </span>
                  </div>

                  {/* Big Capacity Display */}
                  <div className="py-3 border-y border-stone-200/40 flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#1A120B] tracking-tight leading-none">
                      {c.capacity}
                    </span>
                    <span className="text-[9px] text-stone-400 uppercase tracking-widest font-black">Công suất lắp đặt</span>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-3.5 text-xs text-stone-600 bg-stone-50/50 rounded-2xl p-4 border border-stone-150">
                    <div className="flex justify-between items-center py-0.5">
                      <span className="opacity-75 flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-solar-gold" /> Địa điểm:
                      </span>
                      <span className="font-bold text-[#1A120B] truncate max-w-[170px]" title={c.location}>
                        {c.location}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-0.5 border-t border-stone-200/10">
                      <span className="opacity-75 flex items-center gap-1.5 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-solar-gold" /> Tiết kiệm / tháng:
                      </span>
                      <span className="font-bold text-emerald-600">{c.monthlySavings}</span>
                    </div>

                    <div className="flex justify-between items-center py-0.5 border-t border-stone-200/10">
                      <span className="opacity-75 flex items-center gap-1.5 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-solar-gold" /> Tiết kiệm / năm:
                      </span>
                      <span className="font-bold text-emerald-600">{c.annualSavings}</span>
                    </div>

                    <div className="flex justify-between items-center py-0.5 border-t border-stone-200/10">
                      <span className="opacity-75 flex items-center gap-1.5 font-medium">
                        <Zap className="w-3.5 h-3.5 text-solar-gold" /> Vốn đầu tư KH:
                      </span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        {c.clientCapital} <span className="text-[10px] px-1 bg-emerald-50 rounded text-emerald-700">✓</span>
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-0.5 border-t border-stone-200/10">
                      <span className="opacity-75 flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-solar-gold" /> Thi công lắp đặt:
                      </span>
                      <span className="font-bold text-[#1A120B]">{c.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="border-t border-stone-200/40 pt-4 mt-6 flex justify-between items-center text-xs text-stone-500 font-bold">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-solar-gold" />
                    PPA 0 đồng vận hành
                  </span>
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("open-audit-modal"))}
                    className="text-[10px] uppercase tracking-wider text-earth-brown hover:text-solar-gold transition-colors"
                  >
                    Xem chi tiết →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
