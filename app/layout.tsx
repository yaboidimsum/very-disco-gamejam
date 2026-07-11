import type { Metadata } from "next";
import { IBM_Plex_Sans, Jersey_25 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jersey25 = Jersey_25({
  variable: "--font-jersey-25",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Very Disco Game Jam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${jersey25.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = saved || systemTheme;
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-zinc-50 transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
