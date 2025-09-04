import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portofolio Reynald Abner Tananda",
  description:
    "Website portofolio pribadi Reynald Abner Tananda. Seorang Web Developer, Mobile Developer, dan CTF Beginner Player.",
  keywords: [
    "Portofolio",
    "Abner",
    "Reynald Abner",
    "Reynald Abner Tananda",
    "Web Developer",
    "Mobile Developer",
    "CTF Beginner Player",
    "Tananda"
  ],
  openGraph: {
    title: "Portofolio Reynald Abner Tananda",
    description:
      "Lihat projek, pengalaman, dan perjalanan Reynald Abner Tananda sebagai Web Developer, Mobile Developer, dan CTF Beginner Player.",
    url: "https://www.abner.my.id/",
    siteName: "Portofolio Reynald Abner Tananda",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Reynald Abner Tananda - Web Developer, Mobile Developer, CTF Player",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.abner.my.id/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
