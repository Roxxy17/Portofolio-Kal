import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Dock from "@/components/layout/Dock";
import Footer from "@/components/layout/Footer";
import Ambient from "@/components/layout/Ambient";
import ScrollProgress from "@/components/primitives/ScrollProgress";

export const metadata = {
  title: "Kalila Atha Achmad",
  description:
    "Portfolio of Kalila Atha Achmad, full-stack developer and software engineer in Yogyakarta. Web development, UI and UX design, and data mining.",
};

// Dipasang sebelum halaman digambar supaya tema gelap tidak berkedip putih.
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/Black Circle Icon Business Logo (1).png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Kalau JavaScript mati, isi yang menunggu animasi tetap terbaca */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="page-rules relative font-sans">
        <Ambient />
        <ScrollProgress />
        {children}
        <Footer />
        <Dock />
      </body>
    </html>
  );
}
