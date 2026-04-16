import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akinloluwa David Oluwaleye — Full Stack Developer",
  description:
    "Computer Science student and full stack developer specialising in React/Next.js on the frontend and Go on the backend. Building end-to-end web applications with TypeScript, PostgreSQL, and MongoDB. Based in Lagos, Nigeria.",
  keywords: [
    "full stack developer",
    "React developer",
    "Next.js",
    "Go developer",
    "Golang",
    "TypeScript",
    "web developer",
    "Lagos Nigeria",
    "David Akin",
    "portfolio",
  ],
  openGraph: {
    title: "Akinloluwa David Oluwaleye — Full Stack Developer",
    description:
      "Building polished frontends with React/Next.js and robust backends with Go.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
