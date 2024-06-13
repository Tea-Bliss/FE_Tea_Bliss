'use client';

import classNames from 'classnames/bind';

import { useSearchParams } from 'next/navigation';

import FileInput from '@/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/LooseLeafTeasPage/EachLooseLeafTeasPage/EachLooseLeafTeasPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';

const cn = classNames.bind(styles);

const mockProduct = {
  name: '산딸기',
  name_eng: 'wild strawberry',
  explanation: '적당량의 시큼함과 은은한 달콤함. 어린이와 함께 나누기에 완벽한 허브티입니다.',
  flavor: ['단맛', '신맛'],
  category: '허브 티',
  status: '판매중',
  stock: 28,
  photo: '/images/my-blending/vanila.png',
};

export default function EachLooseLeafTeasPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <BackButton className={cn('backButton')} />
      <DetailCard title="상품 정보" className={cn('card')}>
        <form className={cn('form')}>
          <div className={cn('profile')}>
            <FileInput />
          </div>
          <div className={cn('information')}>
            <div className={cn('section')}>
              <div className={cn('field')}>이름</div>
              <div className={cn('value')}>string</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>영문 이름</div>
              <div className={cn('value')}>string</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>종류</div>
              <div className={cn('value')}>9 종류 중 택1</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>설명</div>
              <div className={cn('value')}>string</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>맛</div>
              <div className={cn('value')}>6가지 맛 중 3개까지 고를 수 있음. 안고르면 null.</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>재고</div>
              <div className={cn('value')}>number. 0이 될 시에 판매 상태가 품절이 됨.</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>판매 상태</div>
              <div className={cn('value')}>
                판매중, 품절, 숨김 중에서 택1 가능. 품절, 숨김의 경우 판매사이트에선 안보임
              </div>
            </div>
          </div>
          <div className={cn('submitButton')}>
            <SubmitButton>저장</SubmitButton>
          </div>
        </form>
      </DetailCard>
      <SubmitButton isDelete={true}>삭제하기</SubmitButton>
    </>
  );
}
