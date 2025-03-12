import type { Metadata } from "next";
import  {Sora } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";
import ScrollToTop from "@/components/helper/ScrollToTop";
import { ThemeProvider } from 'next-themes';
const font = Sora({
weight:["100","200","300","400","500","600","700","800"],
subsets:["latin"]

})

export const metadata: Metadata = {
  title: "Ali Raza",
  description: "Portfolio Website with Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
          <ThemeProvider attribute="class">
         <Responsive/>
        {children}
        {/* <Footer/> */}
        <ScrollToTop/>
        </ThemeProvider>
      </body>
    </html>
  );
}
