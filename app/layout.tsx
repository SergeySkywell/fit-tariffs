import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
