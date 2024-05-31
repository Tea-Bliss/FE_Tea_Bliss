import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tea Bliss',
  description: '티 블렌딩 사이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <div id="modal-root"></div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
