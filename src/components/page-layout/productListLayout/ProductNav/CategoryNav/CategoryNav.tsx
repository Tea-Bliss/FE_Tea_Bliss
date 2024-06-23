'use client';

import classNames from 'classnames/bind';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from '@/components/page-layout/productListLayout/ProductNav/CategoryNav/CategoryNav.module.scss';
import SideBar from '@/components/page-layout/productListLayout/ProductNav/SideBar/index';

import { caffeineNAV, seasonNAV } from '../../constants';

const cn = classNames.bind(styles);

export default function CategoryNav() {
  return (
    <SideBar.Root>
      <SideBar.Container>
        <SideBar.Title>계절</SideBar.Title>
        <SideBar.Content className={cn('button')}>
          {seasonNAV.map((Category) => (
            <Link href={Category.href} key={Category.name}>
              {Category.name}
            </Link>
          ))}
        </SideBar.Content>
      </SideBar.Container>
      <SideBar.Container>
        <SideBar.Title>계절</SideBar.Title>
        <SideBar.Content>
          {caffeineNAV.map((Category) => (
            <Link href={Category.href} key={Category.name}>
              {Category.name}
            </Link>
          ))}
        </SideBar.Content>
      </SideBar.Container>
    </SideBar.Root>
  );
}
