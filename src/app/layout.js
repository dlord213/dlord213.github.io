import "./globals.css";

export const metadata = {
  title: "MIRIMOMEKIKU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
