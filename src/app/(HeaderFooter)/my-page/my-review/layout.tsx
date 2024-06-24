import { ReactNode } from 'react';

import MyReviewLayout from '@/components/page-layout/myPageLayout/myReview';

export default function MyReviewPageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <MyReviewLayout>{children}</MyReviewLayout>;
}
