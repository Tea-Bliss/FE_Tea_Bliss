import classNames from 'classnames/bind';

import Link from 'next/link';

import { NAV } from '@/components/page-layout/productListLayout/constants/index';
import styles from '@/components/page-layout/productListLayout/ProductNav/ProductNav.module.scss';

const cn = classNames.bind(styles);

export default function ProductNav() {
  const pc = (
    <nav className={cn('navBox')}>
      <p className={cn('categoryTitle')}>제품</p>
      <div className={cn('categoryBox')}>
        {NAV.map((category) => (
          <Link href={category.href} key={category.name}>
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );

  return pc;
}
