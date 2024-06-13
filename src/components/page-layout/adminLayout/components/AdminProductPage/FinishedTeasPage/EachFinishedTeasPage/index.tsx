'use client';

import { Suspense } from 'react'; 

import classNames from 'classnames/bind';

import { useSearchParams } from 'next/navigation';

import FileInput from '@/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/EachFinishedTeasPage/EachFinishedTeasPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';

const cn = classNames.bind(styles);

const mockProduct = {
  ko_name: '후르츠베리 티',
  en_name: 'berries teas',
  image: '/images/my-blending/vanila.png',
  description: '베리류를 좋아하시나요? 상큼하고 달달한 후르츠베리 티 세트로 일 년 내내 여름을 즐겨보세요.',
  flavor: ['단맛', '신맛'],
  price: 14000,
  season: '여름',
  caffeine: true,
  category: '홍차',
  status: '판매중',
  stock: 28,
  ingredient: [
    {
      name: '라즈베리',
      description: '산뜻한 라즈베리 풍미의 깔끔한 홍차로, 캔디 같은 향, 톡 쏘면서 드라이한 마무리가 돋보입니다.',
    },
    {
      name: '딸기',
      description: '상큼한 딸기 맛이 섞인 실론 블랙티입니다. 달달한 꽃과 딸기 향, 부드러운 목넘김이 특징입니다.',
    },
    {
      name: '블루베리',
      description:
        '상큼한 블루베리 맛이 섞인 실론 블랙티입니다. 향이 강하고 약간 달콤하며, 뜨겁게 또는 차갑게 마셔도 좋습니다!',
    },
    {
      name: '블랙베리',
      description:
        '달콤하고 상큼한 베리가 가미된 실론 블랙티입니다. 꽃향기와 과일향, 그리고 빵처럼 고소한 향이 어우러집니다.',
    },
  ],
};

export default function EachFinishedTeasPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <Suspense>
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
              <div className={cn('field')}>원재료</div>
              <div className={cn('value')}>각 재료마다 name, description 입력받음</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>맛</div>
              <div className={cn('value')}>6가지 맛 중 3개까지 고를 수 있음. 안고르면 null.</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>가격</div>
              <div className={cn('value')}>number. 만원 단위.</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>카페인 여부</div>
              <div className={cn('value')}>boolean</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>계절</div>
              <div className={cn('value')}>봄, 여름, 가을, 겨울 중 택1</div>
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
    </Suspense>
  );
}
