import classNames from 'classnames/bind';

import Image from 'next/image';

import ProductList from '@/components/page-layout/productListLayout/ProductList/ProductList';
import styles from '@/components/page-layout/productListLayout/productListLayout.module.scss';
import ProductNav from '@/components/page-layout/productListLayout/ProductNav/ProductNav';
import ProductBanner from '@/images/product_banner.jpg';

const cn = classNames.bind(styles);

export default function ProductListLayout() {
  return (
    <main className={cn('main')}>
      <div className={cn('imgBox')}>
        <Image src={ProductBanner} alt="배너" fill />
      </div>
      <div className={cn('container')}>
        <ProductNav />
        <ProductList />
      </div>
    </main>
  );
}
