import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "coding4climate | Arnav Nagpurkar",
  description: "coding4climate website created by Arnav Nagpurkar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-zinc-950 dark:text-white bg-zinc-200 text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
