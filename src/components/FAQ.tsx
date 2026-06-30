"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const faqs = [
    {
      q: "Nếu BMC ngừng hoạt động, doanh nghiệp có bị ảnh hưởng đến hệ thống điện mặt trời không?",
      a: "Hợp đồng PPA quy định rõ: hệ thống lắp trên mái nhà máy của anh/chị. Nếu có bất kỳ tình huống bất khả kháng nào xảy ra, hệ thống vẫn giữ nguyên và hoạt động ổn định trên mái, và nhà máy của anh/chị luôn được ưu tiên hàng đầu để nhận nguồn điện giá rẻ này. Các điều khoản bảo vệ tài sản doanh nghiệp được luật sư tư vấn và quy định cụ thể bằng văn bản trong hợp đồng PPA.",
    },
    {
      q: "Điện mặt trời chỉ phát ban ngày — khung giờ cao điểm tối thì sao?",
      a: "Hệ thống điện mặt trời hoạt động từ 6h sáng đến 18h tối, đạt hiệu suất mạnh nhất từ 8h sáng đến 16h chiều. Với các nhà máy sản xuất ca ngày, tỷ lệ tự dùng điện mặt trời đạt từ 70% đến 90%. Đối với khung giờ tối, nhà máy sẽ tự động chuyển đổi nhận điện từ lưới quốc gia EVN mà không làm gián đoạn bất kỳ dây chuyền sản xuất nào. BMC sẽ phân tích profile phụ tải điện thực tế của nhà máy để tính toán tỷ lệ phân bổ tối ưu.",
    },
    {
      q: "Thi công mất bao lâu? Có làm gián đoạn sản xuất của nhà máy không?",
      a: "Quy trình thi công được thực hiện hoàn toàn trên mái xưởng, biệt lập với khu vực sản xuất bên dưới nên cam kết không gây ảnh hưởng đến dây chuyền. Hệ thống công suất 500kWp – 1.000kWp mất trung bình từ 15 đến 25 ngày để hoàn thiện. BMC sẽ sắp xếp thi công vào các khung giờ ngoài giờ hành chính hoặc cuối tuần nếu nhà máy có yêu cầu đặc biệt. Cam kết không làm gián đoạn sản xuất được ghi rõ trong hợp đồng.",
    },
    {
      q: "Sau 15 năm hợp đồng PPA hết hạn thì hệ thống sẽ như thế nào?",
      a: "Sau khi hết hạn hợp đồng PPA 15 năm, Bình Minh Power sẽ chuyển giao toàn bộ quyền sở hữu hệ thống điện mặt trời cho nhà máy của anh/chị hoàn toàn miễn phí (0đ). Khi đó, doanh nghiệp của anh/chị có thể tiếp tục sử dụng hệ thống để phát điện miễn phí thêm từ 10 đến 15 năm tiếp theo (tuổi thọ tấm pin tiêu chuẩn là 25–30 năm). Hoặc anh/chị có thể chọn gia hạn hợp đồng PPA với giá bán điện ưu đãi hơn.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="ppa-faq" className="bg-[#FFFDF9] py-24 select-none relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
            Giải đáp thắc mắc
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-text tracking-tight">
            Câu hỏi thường gặp về PPA
          </h2>
          <p className="text-stone-600 text-sm font-normal max-w-xl mx-auto">
            Những thông tin pháp lý, kỹ thuật và vận hành quan trọng doanh nghiệp cần biết khi hợp tác PPA.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-3xl overflow-hidden hover:border-solar-gold/30 transition-colors duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-slate-900 font-bold text-sm sm:text-base text-left cursor-pointer focus:outline-none select-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-solar-gold shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-stone-400 transition-transform duration-300 shrink-0 ml-4",
                      isOpen ? "rotate-180 text-solar-gold" : "rotate-0"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1.5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 font-normal select-text">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
