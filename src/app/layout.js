import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel Explorer",
  description: "Discover amazing travel destinations around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-primary text-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex justify-between items-center mb-4 sm:mb-0">
              <Link href="/" className="text-2xl font-bold">
                Travel Explorer
              </Link>
            </div>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-gray-300 transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/tips"
                  className="hover:text-gray-300 transition-colors"
                >
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-gray-300 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-dark text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Travel Explorer</h3>
                <p className="text-gray-300">
                  Discover the world's most beautiful destinations and travel
                  with confidence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/destinations"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Destinations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tips"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Travel Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Travel Explorer. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
