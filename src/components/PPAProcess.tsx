"use client";

import React from "react";
import { Search, Compass, FileSignature, Settings } from "lucide-react";
import { motion } from "motion/react";

export default function PPAProcess() {
  const steps = [
    {
      step: "01",
      title: "Khảo sát phụ tải & kết cấu mái xưởng",
      desc: "Chuyên gia kỹ thuật BMC thực hiện đo phụ tải điện và thẩm định kết cấu dầm xưởng thực tế hoàn toàn miễn phí.",
      duration: "48 - 72 giờ",
      icon: Search,
    },
    {
      step: "02",
      title: "Thiết kế phương án & cam kết giá điện PPA",
      desc: "Lập bản vẽ 3D bố trí tấm pin solar và đề xuất hợp đồng tài trợ giá điện PPA chiết khấu 10–20% so với giá EVN.",
      duration: "5 - 7 ngày",
      icon: Compass,
    },
    {
      step: "03",
      title: "Ký kết hợp đồng PPA & hoàn thiện pháp lý",
      desc: "Thống nhất các điều khoản mua bán điện. BMC chịu trách nhiệm toàn diện 100% hồ sơ giấy phép phòng cháy chữa cháy & an toàn kết cấu.",
      duration: "7 - 10 ngày",
      icon: FileSignature,
    },
    {
      step: "04",
      title: "Thi công lắp đặt & vận hành realtime",
      desc: "Vận chuyển lắp đặt tấm pin và inverter. Nghiệm thu phát điện và bàn giao hệ thống app monitoring realtime. Cam kết không dừng sản xuất.",
      duration: "15 - 25 ngày",
      icon: Settings,
    },
  ];

  return (
    <section id="ppa-process" className="bg-[#FFFDF9] py-24 select-none relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
            Quy trình triển khai hợp tác
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-text tracking-tight">
            Quy trình PPA đơn giản trong 4 bước
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Bình Minh Power đồng hành cùng doanh nghiệp từ khảo sát ban đầu đến khi vận hành trơn chu và bàn giao quyền sở hữu.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-stone-250/80 rounded-[2.2rem] p-6 hover:border-solar-gold/30 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step Badge */}
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-extrabold text-solar-gold/20 font-mono tracking-tight">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-solar-gold/10 flex items-center justify-center text-earth-brown">
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-solar-gold">
                      {s.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="border-t border-stone-100 pt-4 mt-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-wider">
                    ⏱ {s.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
