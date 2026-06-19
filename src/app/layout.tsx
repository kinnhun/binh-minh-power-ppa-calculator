import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tính Tiết Kiệm PPA 0 Đồng | Điện Mặt Trời Áp Mái — Bình Minh Power",
  description: "BMC đầu tư hệ thống điện mặt trời trên mái xưởng của bạn. Không cần vốn, không rủi ro, giảm trực tiếp 10–20% hóa đơn tiền điện ngay từ tháng đầu tiên.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased text-stone-900 bg-[#f7f7f5]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
