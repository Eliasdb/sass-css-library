import "./globals.css";

export const metadata = {
  title: "Octane CSS Library",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
