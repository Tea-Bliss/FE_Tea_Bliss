import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import ReactQueryProvider from '@/components/common/Provider/ReactQueryProvider';

import 'react-toastify/dist/ReactToastify.css';

import '@/styles/_reset.scss';

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
      <body className={inter.className}>
        <ReactQueryProvider>
          <div id="modal-root"></div>
          {children}
          <ToastContainer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
