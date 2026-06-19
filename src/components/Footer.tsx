"use client";

import React from "react";
import { Award, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF6F0] text-stone-600 py-16 px-6 relative z-10 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-2 select-none">
              <div className="w-10 h-10 rounded-xl bg-solar-gold flex items-center justify-center text-deep-brown font-bold text-lg border border-earth-brown/20 shrink-0">
                BMC
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-slate-950 font-black tracking-tight text-lg">
                  Bình Minh Power
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mt-1.5 px-2.5 py-0.5 rounded-full bg-solar-gold/15 border border-solar-gold/30 text-earth-brown w-fit">
                  <Award className="w-3.5 h-3.5 text-solar-gold" /> Đại lý I-REC Standard cấp 1
                </span>
              </div>
            </div>
            
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Đơn vị phát triển năng lượng xanh công nghiệp hàng đầu Việt Nam. Cung cấp các giải pháp EPC solar áp mái trọn gói, tài trợ PPA 0 đồng và tư vấn chứng chỉ giảm phát thải carbon (I-REC, CBAM, ESG).
            </p>
          </div>

          {/* Column 2: Legal Contacts */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Liên hệ & Hỗ trợ</h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-stone-500">
              <a href="tel:0901234788" className="flex items-center gap-2.5 hover:text-earth-brown transition-colors w-fit">
                <Phone className="w-4 h-4 text-earth-brown shrink-0" />
                <span className="font-semibold text-slate-900">0901 234 788</span>
              </a>
              
              <a href="mailto:info@binhminhpower.vn" className="flex items-center gap-2.5 hover:text-earth-brown transition-colors w-fit">
                <Mail className="w-4 h-4 text-earth-brown shrink-0" />
                <span>info@binhminhpower.vn</span>
              </a>
              
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-earth-brown shrink-0 mt-0.5" />
                <span>Tòa nhà BMC, KCN VSIP 2, Thủ Dầu Một, Bình Dương</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left md:text-right flex flex-col md:items-end justify-between h-full min-h-[140px]">
            <div className="space-y-4">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Điều khoản & Pháp lý</h4>
              <div className="space-y-2 text-xs text-stone-500 flex flex-col md:items-end">
                <a href="#ppa-calculator" className="hover:text-earth-brown transition-colors w-fit">PPA Calculator</a>
                <a href="#ppa-case-studies" className="hover:text-earth-brown transition-colors w-fit">Case Studies</a>
                <a href="#ppa-lead-form" className="hover:text-earth-brown transition-colors w-fit">Đăng ký khảo sát</a>
              </div>
            </div>

            {/* Scroll to top icon button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 p-3 rounded-full bg-white border border-stone-200 text-stone-500 hover:text-earth-brown hover:bg-stone-50 hover:border-stone-300 transition-all focus:outline-none cursor-pointer w-fit self-start md:self-end shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-stone-200/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-medium">
          <span>&copy; {new Date().getFullYear()} Bình Minh Power &mdash; PPA 0 Đồng Vốn Đầu Tư. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-stone-600 cursor-pointer transition-colors">Chính sách bảo mật</span>
            <span>&bull;</span>
            <span className="hover:text-stone-600 cursor-pointer transition-colors">Điều khoản sử dụng PPA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
