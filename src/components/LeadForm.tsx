"use client";

import React, { useState } from "react";
import { Shield, Send, Check } from "lucide-react";
import { motion } from "motion/react";

export default function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    companyName: "",
    monthlyBill: "",
    location: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ và tên";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    
    if (!formData.companyName.trim()) newErrors.companyName = "Vui lòng nhập tên nhà máy / công ty";
    if (!formData.monthlyBill) newErrors.monthlyBill = "Vui lòng chọn mức hóa đơn điện";
    if (!formData.location.trim()) newErrors.location = "Vui lòng nhập khu vực hoặc KCN";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      companyName: "",
      monthlyBill: "",
      location: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section 
      id="ppa-lead-form" 
      className="py-24 bg-stone-50 text-slate-800 relative overflow-hidden select-none border-t border-stone-200/40"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Selling Points & Guarantees */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-gold/10 border border-solar-gold/20 text-deep-brown text-[10px] font-black uppercase tracking-widest">
                Đăng ký nhận phương án
              </span>
              <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                Nhận báo cáo tiết kiệm riêng cho nhà máy bạn
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                Chuyên viên BMC tính toán chính xác dựa trên hóa đơn điện thực tế và đặc điểm kiến trúc kết cấu mái xưởng của bạn.
              </p>
            </div>

            {/* Checklists */}
            <div className="space-y-4 pt-2">
              {[
                "Miễn phí khảo sát & tính toán 100%",
                "Hoàn toàn không cam kết, không ràng buộc thương mại",
                "Kết quả báo cáo gửi lại trong 24 giờ làm việc",
                "Hỗ trợ đính kèm hóa đơn trực tiếp để tính chính xác nhất",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-stone-700 text-xs sm:text-sm font-semibold cursor-default">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 shadow-sm border border-emerald-200/20">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean White Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 text-left border border-stone-200/50 shadow-xl relative overflow-hidden">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-solar-gold" />
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 px-4 text-center flex flex-col items-center justify-center space-y-4 text-deep-brown"
                >
                  <div className="w-14 h-14 rounded-full bg-deep-brown/10 flex items-center justify-center text-deep-brown border border-earth-brown/10">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    Gửi yêu cầu thành công!
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                    BMC đã tiếp nhận yêu cầu tính toán của bạn. Kỹ sư phụ trách sẽ gửi báo cáo tài chính chi tiết trong vòng 24 giờ làm việc.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 px-6 py-3 rounded-full bg-solar-gold hover:bg-solar-gold-hover text-deep-brown font-bold text-xs sm:text-sm transition-colors cursor-pointer focus:outline-none shadow-md shadow-solar-gold/15"
                  >
                    Gửi yêu cầu mới
                  </button>
                </motion.div>
              ) : (
                <div className="select-text">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="font-bold text-slate-950 text-lg sm:text-xl tracking-tight">
                      Nhận báo cáo tiết kiệm riêng &mdash; Miễn phí
                    </h3>
                  </div>
 
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="leadFullName">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          id="leadFullName"
                          name="fullName"
                          placeholder="Nguyễn Văn A"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-stone-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.fullName 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-stone-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-stone-400 font-medium`}
                        />
                        {errors.fullName && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.fullName}</p>}
                      </div>
 
                      {/* Phone */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="leadPhone">
                          Số điện thoại *
                        </label>
                        <input
                          type="text"
                          id="leadPhone"
                          name="phone"
                          placeholder="0901 234 567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-stone-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.phone 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-stone-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-stone-400 font-medium`}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.phone}</p>}
                      </div>
 
                      {/* Company Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="leadCompanyName">
                          Tên nhà máy / Công ty *
                        </label>
                        <input
                          type="text"
                          id="leadCompanyName"
                          name="companyName"
                          placeholder="Công ty sản xuất..."
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-stone-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.companyName 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-stone-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-stone-400 font-medium`}
                        />
                        {errors.companyName && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.companyName}</p>}
                      </div>
 
                      {/* Monthly Bill Dropdown */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="leadMonthlyBill">
                          Hóa đơn điện hàng tháng *
                        </label>
                        <div className="relative">
                          <select
                            id="leadMonthlyBill"
                            name="monthlyBill"
                            value={formData.monthlyBill}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 text-slate-700 bg-stone-50/50 text-xs sm:text-sm rounded-xl border appearance-none cursor-pointer ${
                              errors.monthlyBill 
                                ? "border-red-500 ring-1 ring-red-200" 
                                : "border-stone-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                            } focus:outline-none transition-all duration-200 font-medium`}
                          >
                            <option value="">-- Chọn mức hóa đơn --</option>
                            <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                            <option value="50 - 200 triệu">50 - 200 triệu</option>
                            <option value="200 - 500 triệu">200 - 500 triệu</option>
                            <option value="Trên 500 triệu">Trên 500 triệu</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                            <span className="text-[10px] font-bold">&darr;</span>
                          </div>
                        </div>
                        {errors.monthlyBill && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.monthlyBill}</p>}
                      </div>
 
                      {/* Area/Location */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="leadLocation">
                          Khu vực / KCN *
                        </label>
                        <input
                          type="text"
                          id="leadLocation"
                          name="location"
                          placeholder="KCN Bàu Bàng, Bình Dương..."
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-stone-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.location 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-stone-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-stone-400 font-medium`}
                        />
                        {errors.location && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.location}</p>}
                      </div>
                    </div>
 
                    {/* Submit button */}
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 0.995 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-solar-gold hover:bg-solar-gold-hover text-deep-brown font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 focus:outline-none animate-pulse-glow"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Đang xử lý thông tin...</span>
                          </>
                        ) : (
                          <>
                            <span>Nhận báo cáo tiết kiệm riêng &mdash; Miễn phí &rarr;</span>
                            <Send className="w-4 h-4 shrink-0" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
 
                  <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-stone-400 mt-5 pt-4 border-t border-stone-100 font-medium">
                    <Shield className="w-4 h-4 text-solar-gold shrink-0" />
                    <span>Không spam. Chuyên viên phản hồi trong 2h làm việc.</span>
                  </div>
                </div>
              )}
 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
