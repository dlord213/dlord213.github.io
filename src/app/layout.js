import "./globals.css";
import "./dynamic_bg.css";
import { Work_Sans } from "next/font/google";

const mainFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "MIRIMOMEKIKU",
  description: "Jhon Lloyd Viernes (Portfolio Website)"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mainFont.className + " select-none"}>
        {children}
      </body>
    </html>
  );
}
