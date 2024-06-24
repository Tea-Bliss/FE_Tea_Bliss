'use client';

import { Dispatch, KeyboardEventHandler, SetStateAction, useEffect } from 'react';

import classNames from 'classnames/bind';
import { FormProvider, useForm } from 'react-hook-form';

import openToast from '@/components/common/Toast/features/openToast';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import FileInput from '@/components/page-layout/adminLayout/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/FinishedTeaForm.module.scss';
import IngredientInput from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm/IngredientInput';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';

const cn = classNames.bind(styles);

interface FinIshedTeaForm {
  defaultValues?: any;
  mutateFn: any;
  setImageFile: Dispatch<SetStateAction<File | null | undefined>>;
}

export default function FinishedTeaForm({ defaultValues, mutateFn, setImageFile }: FinIshedTeaForm) {
  const methods = useForm({
    defaultValues: defaultValues
      ? defaultValues
      : {
          price: 0,
          category: '',
          review: 0,
          sale: 0,
          rating: 0,
          rate: 0,
          season: '',
          name: '',
          nameEng: '',
          caffeine: undefined,
          ingredient: undefined,
          description: '',
          img: '',
          inventory: 0,
          saleStatus: '',
          flavor: undefined,
        },
  });

  const { handleSubmit, register, reset } = methods;

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <>
      <DetailCard title="상품 정보" className={cn('card')}>
        <FormProvider {...methods}>
          <form
            className={cn('form')}
            onSubmit={handleSubmit((data) => {
              const flavors = data?.flavor;

              if (flavors?.length && flavors?.length < 4) {
                mutateFn(data);
              } else {
                openToast('error', '맛은 최소 1개부터 3개까지 골라주세요.');
              }
            })}
            onKeyDown={handleKeyDown}
          >
            <div className={cn('profile')}>
              <FileInput type="product" defaultImage={defaultValues?.img} setFn={setImageFile} />
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
                <IngredientInput defaultValue={defaultValues?.ingredient} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>맛</div>
                <CheckBoxInputs items={TASTE_TYPES} name="flavor" status={2} className={cn('checkboxInputs')} />
              </div>

              <div className={cn('section')}>
                <div className={cn('field')}>가격(KRW)</div>
                <input type="number" className={cn('value', 'input')} {...register('price', { required: true })} />
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
                    { value: 'spring', text: '봄' },
                    { value: 'summer', text: '여름' },
                    { value: 'autumn', text: '가을' },
                    { value: 'winter', text: '겨울' },
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
      <DetailCard title="판매 정보" className={cn('card')}>
        <div className={cn('information', 'saleInformation')}>
          <div className={cn('section')}>
            <div className={cn('field')}>리뷰 수</div>
            <div className={cn('value')}>{defaultValues ? defaultValues.review : 0}</div>
          </div>
        </div>
        <div className={cn('information', 'saleInformation')}>
          <div className={cn('section')}>
            <div className={cn('field')}>판매 횟수</div>
            <div className={cn('value')}>{defaultValues ? defaultValues.sale : 0}</div>
          </div>
        </div>
        <div className={cn('information', 'saleInformation')}>
          <div className={cn('section')}>
            <div className={cn('field')}>별점</div>
            <div className={cn('value')}>{defaultValues ? defaultValues.rating : 0}</div>
          </div>
        </div>
        <div className={cn('information', 'saleInformation')}>
          <div className={cn('section')}>
            <div className={cn('field')}>추천 수</div>
            <div className={cn('value')}>{defaultValues ? defaultValues.rate : 0}</div>
          </div>
        </div>
      </DetailCard>
    </>
  );
}
