import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, Playfair_Display} from "next/font/google";
import "./globals.css";
import AsciiBackground from "./components/ASCIIBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Include weights you'll use (e.g., regular, bold)
  variable: '--font-ibm-plex-mono', // Define a CSS variable (optional but recommended)
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  // Specify weights you want to use for ITALIC style.
  // Check Google Fonts for available italic weights. Often 400 is standard.
  weight: ['400', '700'], // Request weights needed, e.g., regular italic, bold italic
  style: ['italic', 'normal'], // IMPORTANT: Request 'italic' style (include 'normal' if you might use it too)
  variable: '--font-playfair-display', // Define a unique CSS variable name
  display: 'swap', // Good for performance
});

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Jerold Gomez | Portfolio",
  description: "Data science enthusiast transforming data into meaningful stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <AsciiBackground /> {/* Add the background component here */}
        {/* Ensure content container uses relative/z-index to appear above background */}
        <div className="main-content-container relative z-10">
          {/* Optional Header */}
          <main className="flex-grow"> {/* Allow main to take available space */}
            {children}
          </main>
          {/* Optional Footer */}
        </div>
      </body>
    </html>
  );
}
