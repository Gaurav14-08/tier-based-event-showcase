// app/layout.tsx

import '../styles/globals.css'; // ✅ Correct path: go up one level from /app
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tier-Based Event Showcase',
  description: 'View events based on your subscription tier',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="bg-gray-50 text-gray-900">{children}</body>
      </html>
    </ClerkProvider>
  );
}
