import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Mohammed Adnan Pasha | Portfolio",
  description: "Frontend Developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="bg-black text-white antialiased"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
