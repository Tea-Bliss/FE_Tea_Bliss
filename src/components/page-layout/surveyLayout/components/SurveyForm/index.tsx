'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import Button from '@/components/common/Button';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import FormDesign from '@/components/page-layout/surveyLayout/components/FormDesign';
import styles from '@/components/page-layout/surveyLayout/components/SurveyForm/SurveyForm.module.scss';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';

const cn = classNames.bind(styles);

export default function SurveyForm() {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const [status, setStatus] = useState(0);

  const tasteValue = useWatch({ control, name: 'taste' });
  const priceValue = useWatch({ control, name: 'price' });
  const ingredientValue = useWatch({ control, name: 'ingredient' });
  const caffeineValue = useWatch({ control, name: 'caffeine' });

  useEffect(() => {
    if (tasteValue && status === 0) {
      setStatus(1);
    }
    if (priceValue && status === 1) {
      setStatus(2);
    }
    if (ingredientValue && status === 2) {
      setStatus(3);
    }
    if (caffeineValue && status === 3) {
      setStatus(4);
    }
  }, [tasteValue, priceValue, ingredientValue, caffeineValue, status]);

  return (
    <FormProvider {...methods}>
      <form className={cn('form')} onSubmit={handleSubmit((data) => console.log(data))}>
        <h1 className={cn('title')}>설문하고 추천받기</h1>
        <FormDesign
          status={status}
          items={[
            {
              labelName: '맛',
              description: '평소 선호하던 맛을 선택해주세요. (중복 가능)',
              content: <CheckBoxInputs items={[...TASTE_TYPES, '상관없음']} name="taste" status={status} />,
            },
            {
              labelName: '가격',
              description: '원하는 가격대를 선택해주세요.',
              content: (
                <ButtonInputs
                  items={['10,000원대', '20,000원대', '30,000원대', '50,000원대 이상', '상관없음']}
                  name="price"
                  status={status}
                />
              ),
            },
            {
              labelName: '원하는 재료',
              description: '선호하는 재료를 선택해주세요. (중복 가능)',
              content: <CheckBoxInputs items={[...TEA_TYPES, '상관없음']} name="ingredient" status={status} />,
            },
            {
              labelName: '카페인 유무',
              description: '카페인 유무를 선택해주세요.',
              content: (
                <ButtonInputs items={['카페인 있음', '카페인 없음', '상관없음']} name="caffeine" status={status} />
              ),
            },
          ]}
        />
        <Button
          shape="square"
          color="red"
          className={cn('surveySubmitButton')}
          disabled={!(tasteValue?.length && priceValue && ingredientValue?.length && caffeineValue)}
        >
          추천받기
        </Button>
      </form>
    </FormProvider>
  );
}
