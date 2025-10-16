import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Xendify — AI Customer Service Assistant',
  description:
    'Automate WhatsApp support with an AI assistant that manages chats, organizes contacts, and drives sales follow-ups — tailored for your business.',
  generator: 'v0.app',
  icons: {icon: '/xendify-logo-white.png'}
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  // This layout is minimal because the locale layout handles providers
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
