import { ReactNode } from 'react';

import Footer from '@/components/common/Footer/Footer';
import GlobalNavBar from '@/components/common/GlobalNavBar/GlobalNavBar';

export default function HeaderFooterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <GlobalNavBar />
      {children}
      <Footer />
    </>
  );
}
