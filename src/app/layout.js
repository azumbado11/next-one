import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components/index";
import CartState from "../Context/Cart/CardState"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata = {
  title: "Next Project 01",
  description: "E-Commerce FullStack Project inspired by other famous shopping websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartState>
          <Navbar />
          {children}
          <Footer />
        </CartState>
      </body>
    </html>
  );
}
