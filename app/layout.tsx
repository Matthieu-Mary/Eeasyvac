import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "@next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="fr">
      <head />
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
