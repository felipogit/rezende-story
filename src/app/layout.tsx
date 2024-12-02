import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Rezende Store</title>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
