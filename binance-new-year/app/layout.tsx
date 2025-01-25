import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Binance Lunar New Year 2025 Celebration",
  description: "Celebrate the Lunar New Year 2025 with Binance",
  icons: {
    icon: [{ url: "https://public.bnbstatic.com/static/images/common/favicon.ico", sizes: "any" }],
    apple: "https://public.bnbstatic.com/static/images/common/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

