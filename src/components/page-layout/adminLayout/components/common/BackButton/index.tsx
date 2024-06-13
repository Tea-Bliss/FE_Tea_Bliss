'use client';

import classNames from 'classnames/bind';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from '@/components/page-layout/adminLayout/components/common/BackButton/BackButton.module.scss';

const cn = classNames.bind(styles);

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button className={cn('backButton', className)} onClick={() => router.back()}>
      <Image src="/icons/arrow.svg" alt="돌아가기" width={17} height={17} />
      목록으로 돌아가기
    </button>
  );
}
