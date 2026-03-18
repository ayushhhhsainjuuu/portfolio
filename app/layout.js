import "./globals.css";

export const metadata = {
  title: "Ayush | Software Developer",
  description: "Software developer specializing in web, mobile & cloud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}