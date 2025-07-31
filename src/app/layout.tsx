import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physical Intelligence (π)",
  description: "Physical Intelligence is bringing general-purpose AI into the physical world.",
  keywords: ["AI", "Robotics", "Physical Intelligence", "Machine Learning"],
  authors: [{ name: "Physical Intelligence" }],
  openGraph: {
    title: "Physical Intelligence (π)",
    description: "Physical Intelligence is bringing general-purpose AI into the physical world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physical Intelligence (π)",
    description: "Physical Intelligence is bringing general-purpose AI into the physical world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="p-4 md:p-12 overflow-hidden">
          <div className="w-full max-w-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
