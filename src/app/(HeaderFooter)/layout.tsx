import { ReactNode } from 'react';

import Layout from '@/components/common/Layout/Layout';

export default function HeaderFooterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
