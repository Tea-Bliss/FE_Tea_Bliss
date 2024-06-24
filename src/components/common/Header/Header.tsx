'use client';

import Link from 'next/link';

import ROUTE from '@/constants/route';
import Logo from '@/icons/footer_logo.svg';

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <Link href={ROUTE.HOME} className={className}>
      <Logo width="100%" height="100%" />
    </Link>
  );
}
