import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "@next/font/google";
import Toasterprovider from "./providers/ToasterProvider";
import { Providers } from "./redux/provider";

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
        <Providers>
          <Toasterprovider />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
