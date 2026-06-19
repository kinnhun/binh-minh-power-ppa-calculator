import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import CaseStudies from "@/components/CaseStudies";
import PPAProcess from "@/components/PPAProcess";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import AuditModal from "@/components/AuditModal";

export const metadata: Metadata = {
  title: "Tính Tiết Kiệm PPA 0 Đồng | Điện Mặt Trời Áp Mái — Bình Minh Power",
  description: "BMC đầu tư hệ thống điện mặt trời trên mái xưởng của bạn. Không cần vốn, không rủi ro, giảm trực tiếp 10–20% hóa đơn tiền điện ngay từ tháng đầu tiên.",
  keywords: [
    "PPA điện mặt trời áp mái",
    "PPA 0 đồng điện mặt trời",
    "đầu tư điện mặt trời 0 đồng",
    "nhà đầu tư PPA solar",
    "tính tiết kiệm điện mặt trời",
    "quỹ đầu tư PPA Việt Nam",
    "điện mặt trời KCN Bình Dương",
    "tiết kiệm chi phí năng lượng",
    "BMC PPA solar",
  ],
  authors: [{ name: "Bình Minh Power" }],
  openGraph: {
    title: "Tính Tiết Kiệm PPA 0 Đồng | Điện Mặt Trời Áp Mái — Bình Minh Power",
    description: "BMC đầu tư hệ thống điện mặt trời trên mái xưởng của bạn. Không cần vốn, không rủi ro, giảm trực tiếp 10–20% hóa đơn tiền điện ngay từ tháng đầu tiên.",
    url: "https://binhminhpower.com/ppa-calculator",
    siteName: "Bình Minh Power",
    locale: "vi_VN",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tính Tiết Kiệm PPA 0 Đồng | Điện Mặt Trời Áp Mái — Bình Minh Power",
    description: "BMC đầu tư hệ thống điện mặt trời trên mái xưởng của bạn. Không cần vốn, không rủi ro, giảm trực tiếp 10–20% hóa đơn tiền điện ngay từ tháng đầu tiên.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-rivr-bg antialiased select-text">
      {/* Sticky Header Menu */}
      <Navbar />

      {/* Main content sections */}
      <main>
        {/* Section 1: Hero (Cinematic video overlay stats) */}
        <Hero />

        {/* Section 2: Interactive ROI Calculator */}
        <Calculator />

        {/* Section 3: Industry Case Studies */}
        <CaseStudies />

        {/* Section 4: PPA Steps Process */}
        <PPAProcess />

        {/* Section 5: Inline Lead Form */}
        <LeadForm />

        {/* Section 6: FAQ Accordions */}
        <FAQ />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyCTA />

      {/* Floating Request Modal popup */}
      <AuditModal />
    </div>
  );
}
