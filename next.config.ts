import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  i18n: {
    locales: ['en', 'ru', 'ja'],
    defaultLocale: 'en'
  }
};

export default nextConfig;
