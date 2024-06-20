import { ReactNode } from 'react';

import AdminLayout from '@/components/page-layout/adminLayout';

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}
