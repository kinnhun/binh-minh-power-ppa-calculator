"use client";

import React, { useState, useEffect } from "react";
import { X, Shield, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AuditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    companyName: "",
    monthlyBill: "",
    location: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setErrors({});
    };

    window.addEventListener("open-audit-modal", handleOpen);
    return () => window.removeEventListener("open-audit-modal", handleOpen);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    if (!formData.location.trim()) newErrors.location = "Vui lòng chọn khu vực / KCN";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate CRM submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after submit
      setFormData({
        fullName: "",
        phone: "",
        companyName: "",
        monthlyBill: "",
        location: "",
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FCFBF9] rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 z-10 text-stone-900 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cream-base border border-solar-gold flex items-center justify-center text-earth-brown shadow-sm">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-navy-accent">
                  Đăng ký thành công!
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
                  Kỹ sư trưởng mảng PPA dự án của Bình Minh Power đã tiếp nhận yêu cầu và sẽ gọi điện tư vấn phương án thiết kế sơ bộ cho bạn trong vòng 2 giờ.
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-solar-gold hover:bg-solar-gold-hover text-deep-brown font-bold text-sm transition-colors cursor-pointer focus:outline-none"
                >
                  Đóng cửa sổ
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-solar-gold/10 border border-solar-gold/20 text-deep-brown text-xs font-black mb-2.5">
                    Báo cáo tiết kiệm riêng
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy-accent leading-tight">
                    Tính toán tiết kiệm PPA miễn phí
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Khảo sát miễn phí, kết quả báo cáo sẵn sàng trong 24 giờ.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Full Name */}
                  <div>
                    <label className="block text-stone-700 text-xs font-bold mb-1.5" htmlFor="modalFullName">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="modalFullName"
                      name="fullName"
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-stone-900 bg-white text-sm rounded-xl border ${
                        errors.fullName ? "border-red-500 ring-2 ring-red-200" : "border-stone-300 focus:border-solar-gold focus:ring-4 focus:ring-solar-gold/20"
                      } focus:outline-none transition-all placeholder:text-stone-400 font-medium`}
                    />
                    {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-stone-700 text-xs font-bold mb-1.5" htmlFor="modalPhone">
                      Số điện thoại *
                    </label>
                    <input
                      type="text"
                      id="modalPhone"
                      name="phone"
                      placeholder="0901 234 567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-stone-900 bg-white text-sm rounded-xl border ${
                        errors.phone ? "border-red-500 ring-2 ring-red-200" : "border-stone-300 focus:border-solar-gold focus:ring-4 focus:ring-solar-gold/20"
                      } focus:outline-none transition-all placeholder:text-stone-400 font-medium`}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone}</p>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-stone-700 text-xs font-bold mb-1.5" htmlFor="modalCompanyName">
                      Tên nhà máy / công ty *
                    </label>
                    <input
                      type="text"
                      id="modalCompanyName"
                      name="companyName"
                      placeholder="Công ty sản xuất..."
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-stone-900 bg-white text-sm rounded-xl border ${
                        errors.companyName ? "border-red-500 ring-2 ring-red-200" : "border-stone-300 focus:border-solar-gold focus:ring-4 focus:ring-solar-gold/20"
                      } focus:outline-none transition-all placeholder:text-stone-400 font-medium`}
                    />
                    {errors.companyName && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.companyName}</p>}
                  </div>

                  {/* Monthly Electricity Bill Dropdown */}
                  <div>
                    <label className="block text-stone-700 text-xs font-bold mb-1.5" htmlFor="modalMonthlyBill">
                      Hóa đơn điện hàng tháng *
                    </label>
                    <select
                      id="modalMonthlyBill"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-stone-900 bg-white text-sm rounded-xl border ${
                        errors.monthlyBill ? "border-red-500 ring-2 ring-red-200" : "border-stone-300 focus:border-solar-gold focus:ring-4 focus:ring-solar-gold/20"
                      } focus:outline-none transition-all cursor-pointer font-medium`}
                    >
                      <option value="">-- Chọn mức hóa đơn --</option>
                      <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                      <option value="50 - 200 triệu">50 - 200 triệu</option>
                      <option value="200 - 500 triệu">200 - 500 triệu</option>
                      <option value="Trên 500 triệu">Trên 500 triệu</option>
                    </select>
                    {errors.monthlyBill && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.monthlyBill}</p>}
                  </div>

                  {/* Province / KCN */}
                  <div>
                    <label className="block text-stone-700 text-xs font-bold mb-1.5" htmlFor="modalLocation">
                      Khu vực / KCN *
                    </label>
                    <input
                      type="text"
                      id="modalLocation"
                      name="location"
                      placeholder="KCN Bàu Bàng, Bình Dương..."
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-stone-900 bg-white text-sm rounded-xl border ${
                        errors.location ? "border-red-500 ring-2 ring-red-200" : "border-stone-300 focus:border-solar-gold focus:ring-4 focus:ring-solar-gold/20"
                      } focus:outline-none transition-all placeholder:text-stone-400 font-medium`}
                    />
                    {errors.location && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.location}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 rounded-xl bg-solar-gold hover:bg-solar-gold-hover text-deep-brown font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60 focus:outline-none animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-deep-brown border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang xử lý...</span>
                      </>
                    ) : (
                      <>
                        <span>Nhận báo cáo tiết kiệm riêng miễn phí</span>
                        <Send className="w-4 h-4 shrink-0" />
                      </>
                    )}
                  </button>

                  {/* Safety commitment */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 mt-4 pt-3 border-t border-stone-200/60">
                    <Shield className="w-4 h-4 text-solar-gold shrink-0" />
                    <span>Cam kết bảo mật dữ liệu tuyệt đối theo chuẩn B2B NDA</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
