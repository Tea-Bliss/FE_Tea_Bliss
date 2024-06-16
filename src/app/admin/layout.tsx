import AdminLayout from '@/components/page-layout/adminLayout';

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}
