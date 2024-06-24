'use client';

import classNames from 'classnames/bind';

import SavePageCard from '@/components/page-layout/myPageLayout/saveList/components/common/SavePageCard';
import styles from '@/components/page-layout/myPageLayout/saveList/components/saveListPage/SaveListPage.module.scss';

const cn = classNames.bind(styles);

const data = {
  id: 1,
  img: '/icons/다운로드.jpg',
  name: '초콜릿',
  nameEng: 'chocolate',
  price: 14000,
};

export default function SaveListPage() {
  return (
    <div>
      <SavePageCard
        linkPath={'/'}
        productImage={data?.img}
        name={data.name}
        nameEng={data.nameEng}
        price={data.price}
        type="완제품"
      />
    </div>
  );
}
