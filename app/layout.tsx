import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import StairTransition from "@/components/Animation/StairTransition";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], 
  variable: "--font-poppins", 
});

export const metadata = {
  title: "Muhammad Talha Portfolio",
  description: "Developed By Muhammad Talha",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="z-50 relative ">
          <Header />
          <StairTransition />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
