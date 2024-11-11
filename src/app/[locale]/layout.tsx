import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "@/components/Proveders";
import "./globals.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Demian Domozhirov | Frontend Developer Portfolio",
  description:
    "Portfolio and personal site showcasing the projects and skills of a frontend developer, built with modern technologies.",
  keywords: [
    "frontend",
    "developer",
    "portfolio",
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "GitHub Pages",
  ],
  openGraph: {
    title: "Demian Domozhirov | Frontend Developer Portfolio",
    description:
      "Portfolio and personal site showcasing the projects and skills of a frontend developer.",
    url: "https://darkdomian.github.io",
    siteName: "Frontend Developer Portfolio",
    // ImageResponse - allows to generate dynamic images using JSX and CSS
    images: [
      {
        url: "https://darkdomian.github.io/path-to-your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of the frontend developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ru_RU", "ja_JP"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Demian Domozhirov | Frontend Developer Portfolio",
    description:
      "Portfolio and personal site showcasing frontend developer skills, built with Next.js and React.",
    images: ["https://darkdomian.github.io/path-to-your-image.jpg"],
  },
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'ru'].map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light dark:bg-dark text-dark dark:text-light transition-all duration-200`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
