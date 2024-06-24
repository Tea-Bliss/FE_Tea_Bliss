'use client';

import { Dispatch, KeyboardEventHandler, SetStateAction, useEffect } from 'react';

import classNames from 'classnames/bind';
import { FormProvider, useForm } from 'react-hook-form';

import openToast from '@/components/common/Toast/features/openToast';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import FileInput from '@/components/page-layout/adminLayout/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/common/LooseLeafTeaForm/LooseLeafTeaForm.module.scss';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';

const cn = classNames.bind(styles);

interface LooseLeafTeaForm {
  defaultValues?: any;
  mutateFn: any;
  setImageFile: Dispatch<SetStateAction<File | null | undefined>>;
}

export default function LooseLeafTeaForm({ defaultValues, mutateFn, setImageFile }: LooseLeafTeaForm) {
  const methods = useForm({
    defaultValues: defaultValues
      ? defaultValues
      : {
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
            <FileInput type="product" defaultImage={defaultValues?.photo} setFn={setImageFile} />
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
              <div className={cn('field')}>가격(KRW)</div>
              <input type="number" className={cn('value', 'input')} {...register('sale', { required: true })} />
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
  );
}
