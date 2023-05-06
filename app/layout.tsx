import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "@next/font/google";
import Toasterprovider from "./providers/ToasterProvider";


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
        <Toasterprovider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
