'use client';

import classNames from 'classnames/bind';
import { FormProvider, useFieldArray, useForm, useWatch } from 'react-hook-form';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import FileInput from '@/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/EachFinishedTeasPage/EachFinishedTeasPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';

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

  const methods = useForm({
    defaultValues: {
      category: undefined,
      sale: undefined,
      season: undefined,
      ko_name: undefined,
      en_name: undefined,
      caffeine: undefined,
      description: undefined,
      ingredient: [{ name: '', description: '' }],
      img: undefined,
      inventory: undefined,
      saleStatus: undefined,
      flavor: undefined,
    },
  });
  const { control, handleSubmit, register } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredient',
  });

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
                <input className={cn('value', 'input')} {...register('ko_name', { required: true })} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>영문 이름</div>
                <input className={cn('value', 'input')} {...register('en_name', { required: true })} />
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
                <div className={cn('ingredients')}>
                  {fields.map((field, index) => {
                    return (
                      <div key={field.id} className={cn('ingredient')}>
                        <div className={cn('ingredientLabelInputSet')}>
                          <label className={cn('ingredientLabel')}>이름</label>
                          <input
                            {...register(`ingredient.${index}.name`, { required: true })}
                            className={cn('ingredientInput')}
                          />
                        </div>
                        <div className={cn('ingredientLabelInputSet')}>
                          <label className={cn('ingredientLabel')}>설명</label>
                          <input
                            {...register(`ingredient.${index}.description`, { required: true })}
                            className={cn('ingredientInput')}
                          />
                        </div>
                        <button type="button" onClick={() => remove(index)} className={cn('removeIngredient')}>
                          <Image
                            src="/icons/close.svg"
                            alt="지우기"
                            width="8"
                            height="8"
                            className={cn('removeIcon')}
                          />
                        </button>
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => append({ name: '', description: '' })}
                    className={cn('addIngredientButton')}
                  >
                    추가하기
                  </button>
                </div>
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
      <SubmitButton isDelete={true}>삭제하기</SubmitButton>
    </>
  );
}
