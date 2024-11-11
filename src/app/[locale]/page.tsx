"use client";

import { useTranslations } from "next-intl";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AnimatedLink from "@/components/AnimatedLink";

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="min-h-screen flex flex-col justify-center">
      <main className="h-full flex flex-grow items-center justify-center">
        {t('helloWorld')}
        {/* <ThemeSwitcher />
        <h1 className="text-3xl font-bold mb-4 text-primary">Welcome</h1>
        <p className="text-lg">This is a multilingual React application.</p>
        <AnimatedLink icon='link' children='random link' href='' />
        <AnimatedLink /> */}
      </main>
      <footer className="flex py-1 justify-center">@DarkDomian</footer>
    </div>
  );
}
