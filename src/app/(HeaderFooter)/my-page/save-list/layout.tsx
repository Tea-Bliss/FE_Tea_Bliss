import { ReactNode } from 'react';

import SaveListLayout from '@/components/page-layout/myPageLayout/saveList';

export default function SaveListPageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <SaveListLayout>{children}</SaveListLayout>;
}
