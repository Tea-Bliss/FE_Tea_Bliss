import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next';

import localFont from 'next/font/local';

import ReactQueryProvider from '@/components/common/Provider/ReactQueryProvider';
import GoogleAnalytics from '@/components/ga/google-analytics';

import 'react-toastify/dist/ReactToastify.css';

import '@/styles/_reset.scss';

const myFont = localFont({
  src: '../fonts/02a5628b91717ae7191a2b202a5e93a4.woff',
  display: 'swap',
});

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
      <body className={myFont.className}>
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics /> : <div>GA환경변수값필요</div>
        <ReactQueryProvider>
          <div id="modal-root"></div>
          {children}
          <ToastContainer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
