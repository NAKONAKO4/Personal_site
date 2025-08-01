import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azuliai's Page",
  description: "Azuliai's Page",
  keywords: ["AI", "Robotics", "Physical Intelligence", "Machine Learning"],
  authors: [{ name: "Azuliai" }],
  openGraph: {
    title: "Azuliai's Page",
    description: "Azuliai's Page",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azuliai's Page",
    description: "Azuliai's Page",
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
