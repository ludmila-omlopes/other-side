import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Talk to the Other Side...',
  description: 'Be careful what you wish for.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <footer className="mt-12 text-center text-green-600">
            This is a fan-made website. All rights to <a href="https://ordemparanormal.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ordem Paranormal</a>.
          <p className="mt-2">
              Made with love by <a href="https://github.com/ludmila-omlopes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Definn</a> 🩷
            </p>
      </footer>
      </body>
    </html>
  );
}
