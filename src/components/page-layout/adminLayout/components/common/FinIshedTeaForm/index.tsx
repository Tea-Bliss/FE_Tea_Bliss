'use client';

import classNames from 'classnames/bind';
import { FormProvider, useForm } from 'react-hook-form';

import FileInput from '@/components/common/FileInput';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import styles from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/FinishedTeaForm.module.scss';
import IngredientInput from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/IngredientInput';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';

const cn = classNames.bind(styles);

export default function FinishedTeaForm() {
  const methods = useForm({
    defaultValues: {
      price: 0,
      category: '',
      review: 0,
      sale: 0,
      rating: 0,
      rate: 0,
      season: '',
      name: '',
      nameEng: '',
      caffeine: true,
      ingredient: [0],
      description: '',
      img: '',
      inventory: 0,
      saleStatus: '',
      flavor: [0],
    },
  });

  const { handleSubmit, register } = methods;

  return (
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
              <textarea className={cn('value', 'textarea')} {...register('description', { required: true })} />
            </div>

            <div className={cn('section')}>
              <div className={cn('field')}>원재료</div>
              <IngredientInput />
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>맛</div>
              <CheckBoxInputs items={TASTE_TYPES} name="flavor" status={2} className={cn('checkboxInputs')} />
            </div>

            <div className={cn('section')}>
              <div className={cn('field')}>가격(KRW)</div>
              <input type="number" className={cn('value', 'input')} {...register('sale', { required: true })} />
            </div>

            <div className={cn('section')}>
              <div className={cn('field')}>카페인 여부</div>
              <ButtonInputs
                items={[
                  { value: 'true', text: '카페인 있음' },
                  { value: 'false', text: '카페인 없음' },
                ]}
                name="caffeine"
                status={3}
                className={cn('buttonInputs')}
              />
            </div>

            <div className={cn('section')}>
              <div className={cn('field')}>계절</div>
              <ButtonInputs
                items={[
                  { value: '봄', text: '봄' },
                  { value: '여름', text: '여름' },
                  { value: '가을', text: '가을' },
                  { value: '겨울', text: '겨울' },
                ]}
                name="season"
                status={3}
                className={cn('buttonInputs')}
              />
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
  );
}
