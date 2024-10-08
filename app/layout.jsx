// ? Import any headers [Css tailwind config, google fonts,Component(Header),]
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// ! This function make a parameter from font google that can be implemented to all website body

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});

// ! This Function to import meta data to html for title and description website

export const metadata = {
  title: "Portofolio-Kal",
  description: "Full-Stack Developer",
};

// ! This Funtion for export layout for the main html body

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/Black Circle Icon Business Logo (1).png"  />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kal Portofolio</title>  
      </head>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
