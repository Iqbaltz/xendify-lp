import type {Metadata} from 'next';
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
import {Analytics} from '@vercel/analytics/next';
import {ThemeProvider} from '@/components/theme-provider';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Xendify — AI Customer Service Assistant',
  description:
    'Automate WhatsApp support with an AI assistant that manages chats, organizes contacts, and drives sales follow-ups — tailored for your business.',
  generator: 'v0.app',
  icons: {
    icon: '/xendify-logo-white.png'
  }
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: {locale: string};
}>) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
