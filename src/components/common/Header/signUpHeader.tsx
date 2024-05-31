import Link from 'next/link';

import ROUTE from '@/constants/route';
import Logo from '@/images/logo.svg';

export default function Header() {
  return (
    <Link href={ROUTE.HOME}>
      <Logo width={338} height={100} />
    </Link>
  );
}
