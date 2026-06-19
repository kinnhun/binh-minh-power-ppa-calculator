"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Zap, Leaf, Landmark, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Calculator() {
  // Inputs
  const [monthlyBill, setMonthlyBill] = useState<number>(2000000000); // default 2.0 billion VND
  const [roofArea, setRoofArea] = useState<number>(20000); // default 20,000 m2
  const [discount, setDiscount] = useState<number>(0.10); // default 10%

  // Calculations
  const [billPower, setBillPower] = useState<number>(0);
  const [areaPower, setAreaPower] = useState<number>(0);
  const [systemPower, setSystemPower] = useState<number>(0);
  const [annualGen, setAnnualGen] = useState<number>(0);
  const [savingsYear, setSavingsYear] = useState<number>(0);
  const [savingsMonth, setSavingsMonth] = useState<number>(0);
  const [savings15Years, setSavings15Years] = useState<number>(0);
  const [co2Reduced, setCo2Reduced] = useState<number>(0);

  // Technical Constants
  const REF_PRICE = 2200; // đ/kWh
  const DAYTIME_USAGE = 0.70; // 70%
  const SUNSHINE_HOURS = 4.8; // hours/day
  const AREA_PER_KWP = 6.5; // m2/kWp
  const DAYS_PER_MONTH = 30;

  useEffect(() => {
    // 1. Công suất theo hóa đơn (kWp) = Bill ÷ 2200 * 0.7 ÷ 30 ÷ 4.8
    const calculatedBillPower = monthlyBill / REF_PRICE * DAYTIME_USAGE / DAYS_PER_MONTH / SUNSHINE_HOURS;
    
    // 2. Công suất theo diện tích (kWp) = Diện tích ÷ 6.5
    const calculatedAreaPower = roofArea / AREA_PER_KWP;
    
    // 3. Công suất hệ thống = min(Hóa đơn, Diện tích)
    const calculatedSystemPower = Math.min(calculatedBillPower, calculatedAreaPower);
    
    // 4. Sản lượng điện/năm = Công suất * 4.8 * 365
    const calculatedAnnualGen = calculatedSystemPower * SUNSHINE_HOURS * 365;
    
    // 5. Tiết kiệm mỗi năm = Sản lượng điện/năm * (Giá điện * Chiết khấu)
    const calculatedSavingsYear = calculatedAnnualGen * (REF_PRICE * discount);
    
    // 6. Tiết kiệm mỗi tháng = Tiết kiệm mỗi năm / 12
    const calculatedSavingsMonth = calculatedSavingsYear / 12;
    
    // 7. Tiết kiệm 15 năm = Tiết kiệm mỗi năm * 15
    const calculatedSavings15Years = calculatedSavingsYear * 15;
    
    // 8. Giảm CO2/năm = Công suất * 0.5 (as per standard index alignment)
    const calculatedCo2 = calculatedSystemPower * 0.5;

    setBillPower(calculatedBillPower);
    setAreaPower(calculatedAreaPower);
    setSystemPower(calculatedSystemPower);
    setAnnualGen(calculatedAnnualGen);
    setSavingsYear(calculatedSavingsYear);
    setSavingsMonth(calculatedSavingsMonth);
    setSavings15Years(calculatedSavings15Years);
    setCo2Reduced(calculatedCo2);
  }, [monthlyBill, roofArea, discount]);

  // Format Helper
  const formatVND = (value: number) => {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(1) + " tỷ";
    }
    return Math.round(value / 1e6) + " triệu";
  };

  const formatMillions = (value: number) => {
    return Math.round(value / 1e6);
  };

  const formatBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value.replace(/[^0-9.]/g, ""));
    if (!isNaN(val)) {
      setMonthlyBill(val * 1e6);
    }
  };

  return (
    <section id="ppa-calculator" className="bg-[#FFFDF9] py-24 select-none relative overflow-hidden border-t border-stone-200/50">
      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ 
          backgroundImage: "linear-gradient(rgba(100, 69, 25, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 69, 25, 0.15) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-solar-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-gold/10 border border-solar-gold/20 text-deep-brown text-[10px] font-black uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-solar-gold fill-solar-gold/20" />
            Công cụ tính toán tài chính PPA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-text tracking-tight">
            Tính toán mức tiết kiệm thực tế
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Nhập chi phí điện và diện tích mái để xem phương án công suất khả thi và dòng tiền tiết kiệm chi tiết trong 15 năm.
          </p>
        </div>

        {/* Main Grid: Inputs vs Outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders and Inputs (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-8 space-y-8 shadow-xs text-left">
            <div className="border-b border-stone-100 pb-4 mb-2">
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
                Thông số đầu vào
              </h3>
            </div>

            {/* Slider 1: Hóa đơn điện hàng tháng */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider" htmlFor="monthlyBillRange">
                  Hóa đơn điện / tháng
                </label>
                <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 w-fit">
                  <input
                    type="text"
                    value={(monthlyBill / 1e6).toFixed(0)}
                    onChange={formatBillInput}
                    className="w-16 text-right font-bold text-slate-900 bg-transparent text-sm focus:outline-none"
                  />
                  <span className="text-xs text-stone-400 font-bold">triệu</span>
                </div>
              </div>
              
              <div className="relative pt-2">
                <input
                  type="range"
                  id="monthlyBillRange"
                  min={100000000} // 100 million
                  max={2000000000} // 2.0 billion
                  step={50000000} // 50 million
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                  className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-solar-gold focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-bold pt-2">
                  <span>100tr</span>
                  <span>1.0 tỷ</span>
                  <span>2.0 tỷ</span>
                </div>
              </div>
            </div>

            {/* Slider 2: Diện tích mái khả dụng */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider" htmlFor="roofAreaRange">
                  Diện tích mái khả dụng
                </label>
                <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 w-fit">
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 text-right font-bold text-slate-900 bg-transparent text-sm focus:outline-none"
                  />
                  <span className="text-xs text-stone-400 font-bold">m²</span>
                </div>
              </div>
              
              <div className="relative pt-2">
                <input
                  type="range"
                  id="roofAreaRange"
                  min={500}
                  max={20000}
                  step={500}
                  value={roofArea}
                  onChange={(e) => setRoofArea(parseInt(e.target.value))}
                  className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-solar-gold focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-bold pt-2">
                  <span>500 m²</span>
                  <span>10,000 m²</span>
                  <span>20,000 m²</span>
                </div>
              </div>
            </div>

            {/* Input 3: Chiết khấu PPA */}
            <div className="space-y-3 pt-2">
              <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                Chiết khấu PPA cam kết
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[0.10, 0.15, 0.20].map((val) => {
                  const isSelected = discount === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setDiscount(val)}
                      className={cn(
                        "py-3 rounded-xl border text-center font-bold text-xs transition-all duration-200 cursor-pointer select-none",
                        isSelected
                          ? "border-solar-gold bg-solar-gold/10 text-deep-brown shadow-sm"
                          : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                      )}
                    >
                      {val * 100}%
                    </button>
                  );
                })}
              </div>
              <p className="text-[10px] text-stone-400 italic font-medium leading-relaxed pt-1">
                * Chiết khấu là phần trăm giảm trực tiếp so với biểu giá điện hiện hành của EVN.
              </p>
            </div>

            {/* Call to action button linking to form */}
            <div className="pt-4 border-t border-stone-100">
              <a
                href="#ppa-lead-form"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("ppa-lead-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 rounded-full bg-solar-gold hover:bg-solar-gold-hover text-deep-brown font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-250 cursor-pointer animate-pulse-glow"
              >
                <span>Nhận báo cáo tiết kiệm cá nhân</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Results & ROI Charts (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* KPI Display Box */}
            <div className="bg-[#FAF6F0] border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-8 text-slate-900 relative overflow-hidden shadow-xs text-left">
              {/* Gold gradient ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-solar-gold/15 via-transparent to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-earth-brown text-[10px] font-black uppercase tracking-wider block">
                    Tiết kiệm PPA ước tính
                  </span>
                  <h3 className="text-slate-950 text-xl sm:text-2xl font-bold tracking-tight mt-1">
                    Hiệu quả tài chính từ tháng đầu tiên
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-solar-gold/15 border border-solar-gold/30 text-earth-brown text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
                  Khóa giá 15 năm
                </span>
              </div>

              {/* Dynamic stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-stone-200/70">
                <div className="space-y-1">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wide block">Tiết kiệm/Năm</span>
                  <span className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                    {formatMillions(savingsYear)}
                    <span className="text-xs font-normal text-earth-brown ml-0.5">triệu</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wide block">Mỗi tháng</span>
                  <span className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                    {formatMillions(savingsMonth)}
                    <span className="text-xs font-normal text-earth-brown ml-0.5">triệu</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wide block">Tích lũy 15 năm</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-earth-brown tracking-tight">
                    {(savings15Years / 1e9).toFixed(1)}
                    <span className="text-xs font-normal text-slate-700 ml-0.5">tỷ</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wide block">Giảm phát thải</span>
                  <span className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                    {Math.round(co2Reduced)}
                    <span className="text-xs font-bold text-emerald-600 ml-0.5">tấn CO₂</span>
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-stone-500 italic pt-4">
                * Mọi chi phí đầu tư thiết bị và vận hành hệ thống do BMC chi trả 100%. Khách hàng không bỏ vốn.
              </p>
            </div>

            {/* Before vs After comparison bar chart */}
            <div className="bg-white border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-8 text-left shadow-xs space-y-6">
              <div>
                <h4 className="text-slate-900 font-bold text-sm sm:text-base">
                  So sánh trực quan: Trước vs Sau PPA
                </h4>
                <p className="text-stone-500 text-xs mt-1">
                  Minh họa chi phí tiền điện hàng tháng của nhà máy (VND)
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Bar 1: Hiện tại (Điện lưới) */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-stone-600">
                    <span>Trước PPA (Điện lưới EVN)</span>
                    <span className="text-slate-900">{formatVND(monthlyBill)}</span>
                  </div>
                  <div className="h-6 w-full bg-stone-100 rounded-full overflow-hidden relative border border-stone-200/40">
                    <motion.div 
                      className="h-full bg-stone-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Bar 2: Sau PPA */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-stone-600">
                    <span className="flex items-center gap-1">
                      Sau PPA (Có solar BMC)
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-extrabold uppercase">
                        Tiết kiệm {formatVND(savingsMonth)}
                      </span>
                    </span>
                    <span className="text-emerald-600 font-black">{formatVND(monthlyBill - savingsMonth)}</span>
                  </div>
                  <div className="h-6 w-full bg-stone-100 rounded-full overflow-hidden relative border border-stone-200/40">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((monthlyBill - savingsMonth) / monthlyBill) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-stone-600 font-bold bg-stone-50 rounded-2xl p-4 border border-stone-150">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Tiết kiệm ngay {formatVND(savingsMonth)}/tháng ngay từ tháng vận hành đầu tiên, không gián đoạn sản xuất.</span>
              </div>
            </div>

            {/* ROI Detail calculation grid table */}
            <div className="bg-white border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-8 text-left shadow-xs space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <h4 className="text-slate-900 font-bold text-sm sm:text-base">
                  Bảng tính ROI & Thông số công nghệ
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-600">
                {/* Column 1: Công suất */}
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[10px] border-l-2 border-solar-gold pl-2">
                    ⚡ Thông số công suất lắp đặt
                  </h5>
                  <div className="space-y-2 bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
                    <div className="flex justify-between">
                      <span>Theo hóa đơn:</span>
                      <span className="font-bold text-slate-800">{Math.round(billPower).toLocaleString()} kWp</span>
                    </div>
                    <div className="flex justify-between border-t border-stone-100/50 pt-2">
                      <span>Theo diện tích mái:</span>
                      <span className="font-bold text-slate-800">{Math.round(areaPower).toLocaleString()} kWp</span>
                    </div>
                    <div className="flex justify-between border-t border-stone-100 pt-2 font-bold text-slate-900">
                      <span>Khả thi tối đa (min):</span>
                      <span className="text-solar-gold font-extrabold">{Math.round(systemPower).toLocaleString()} kWp</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Tiết kiệm tài chính */}
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[10px] border-l-2 border-solar-gold pl-2">
                    💰 Ước tính dòng tiền tiết kiệm
                  </h5>
                  <div className="space-y-2 bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
                    <div className="flex justify-between">
                      <span>Sản lượng điện / năm:</span>
                      <span className="font-bold text-slate-800">{Math.round(annualGen).toLocaleString()} kWh</span>
                    </div>
                    <div className="flex justify-between border-t border-stone-100/50 pt-2">
                      <span>Mức chiết khấu:</span>
                      <span className="font-bold text-slate-800">{(discount * 100)}% EVN</span>
                    </div>
                    <div className="flex justify-between border-t border-stone-100 pt-2 font-bold text-slate-900">
                      <span>Tiết kiệm 15 năm:</span>
                      <span className="text-emerald-600 font-extrabold">{formatVND(savings15Years)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical index footnote */}
              <div className="text-[10px] text-stone-400 border-t border-stone-100 pt-4 space-y-1.5 leading-relaxed font-medium">
                <p>** Công thức áp dụng chuẩn hóa:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Công suất theo hóa đơn: Hóa đơn điện ÷ 2.200 đ/kWh × 70% tự dùng ÷ 30 ngày ÷ 4,8 giờ nắng.</li>
                  <li>Công suất theo diện tích: Diện tích mái khả dụng ÷ 6,5 m²/kWp.</li>
                  <li>Sản lượng điện/năm: Công suất lắp đặt khả thi × 4,8 giờ nắng × 365 ngày.</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
