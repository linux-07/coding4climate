import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "coding4climate | Arnav Nagpurkar",
  description: "coding4climate website created by Arnav Nagpurkar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-zinc-900 dark:text-white bg-slate-100 text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
