import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Freecash Boost — Get Paid for Games & Surveys | Earn Real Cash",
  description: "Earn real money playing games, completing surveys, testing apps, and more. Instant withdrawals via Bitcoin, Ethereum, PayPal, and gift cards. Join 10M+ users.",
  keywords: "earn money, paid games, paid surveys, crypto rewards, free cash, GPT platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B1220] text-white min-h-screen antialiased">
        <AuthProvider>
          {children}
          <Toaster position="bottom-right" toastOptions={{ style: { background: "#161B22", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" } }} />
        </AuthProvider>
      </body>
    </html>
  );
}