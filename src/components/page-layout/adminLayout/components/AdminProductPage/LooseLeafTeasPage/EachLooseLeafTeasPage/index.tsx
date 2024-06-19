'use client';

import classNames from 'classnames/bind';
import { FormProvider, useForm } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import FileInput from '@/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/LooseLeafTeasPage/EachLooseLeafTeasPage/EachLooseLeafTeasPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';

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

  const methods = useForm({
    defaultValues: {
      category: undefined,
      name: undefined,
      nameEng: undefined,
      sale: undefined,
      inventory: undefined,
      saleStatus: undefined,
      flavor: undefined,
      explanation: undefined,
      photo: undefined,
    },
  });
  const { control, handleSubmit, register } = methods;

  return (
    <>
      <BackButton className={cn('backButton')} />
      <DetailCard title="상품 정보" className={cn('card')}>
        <FormProvider {...methods}>
          <form className={cn('form')} onSubmit={handleSubmit((data) => console.log(data))}>
            <div className={cn('profile')}>
              <FileInput type="product" />
            </div>

            <div className={cn('information')}>
              <div className={cn('section')}>
                <div className={cn('field')}>이름</div>
                <input className={cn('value', 'input')} {...register('name', { required: true })} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>영문 이름</div>
                <input className={cn('value', 'input')} {...register('nameEng', { required: true })} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>종류</div>
                <ButtonInputs items={TEA_TYPES} name="category" status={3} className={cn('buttonInputs')} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>설명</div>
                <textarea className={cn('value', 'textarea')} {...register('explanation', { required: true })} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>맛</div>
                <CheckBoxInputs items={TASTE_TYPES} name="flavor" status={2} className={cn('checkboxInputs')} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>재고</div>
                <input type="number" className={cn('value', 'input')} {...register('inventory', { required: true })} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>판매 상태</div>
                <ButtonInputs
                  items={[
                    { value: '판매중', text: '판매중' },
                    { value: '품절', text: '품절' },
                  ]}
                  name="saleStatus"
                  status={3}
                  className={cn('buttonInputs')}
                />
              </div>
            </div>
            <div className={cn('submitButton')}>
              <SubmitButton>저장</SubmitButton>
            </div>
          </form>
        </FormProvider>
      </DetailCard>
      <SubmitButton isDelete={true}>삭제하기</SubmitButton>
    </>
  );
}
