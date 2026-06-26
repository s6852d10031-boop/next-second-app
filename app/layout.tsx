import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

//ตรงส่วน Metadata จะมีผลกับ STO ของเว็บไซต์ และการแสดงผลของหน้าเว็บ
export const metadata: Metadata = {
  title: "SAU Product Sale",
  description: "เว็บไซต์ขายสินค้าของนักศึกษา มหาวิทยาลัยเอเชียอาคเนย์",
  keywords: ["mobile", "tablet", "laptop", "computer", "accessories", "smartphone", "electronics", "gadgets"],
  authors: [{ name: "Patcha DTI", url: "https://www.sauproductsale.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.className}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
