'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import CheckBoxInputs from '@/components/page-layout/surveyLayout/components/CheckBoxInputs';
import FormDesign from '@/components/page-layout/surveyLayout/components/FormDesign';
import styles from '@/components/page-layout/surveyLayout/components/SurveyForm/SurveyForm.module.scss';
import { TASTE_TYPES, TEA_TYPES } from '@/components/page-layout/surveyLayout/constants/teaTypes';
import { usePostSurvey } from '@/components/page-layout/surveyLayout/hooks/usePostSurvey';

const cn = classNames.bind(styles);

export default function SurveyForm() {
  const router = useRouter();
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const [status, setStatus] = useState(0);

  const mutate = usePostSurvey();

  const tasteValue = useWatch({ control, name: 'taste' });
  const saleValue = useWatch({ control, name: 'sale' });
  const categoryValue = useWatch({ control, name: 'category' });
  const caffeineValue = useWatch({ control, name: 'caffeine' });

  useEffect(() => {
    if (tasteValue && status === 0) {
      setStatus(1);
    }
    if (saleValue && status === 1) {
      setStatus(2);
    }
    if (categoryValue && status === 2) {
      setStatus(3);
    }
    if (caffeineValue && status === 3) {
      setStatus(4);
    }
  }, [tasteValue, saleValue, categoryValue, caffeineValue, status]);

  const handleSurveyPost = async (formData: any) => {
    formData.category = formData.category.join(',');

    for (const key in formData) {
      if (formData[key] === '상관없음') {
        formData[key] = null;
      }
    }

    if (formData.sale) {
      formData.sale = +formData.sale;
    }

    if (formData.taste) {
      formData.taste = +formData.taste;
    }

    mutate.mutate(formData, {
      onSuccess: (data) => {
        const query = data.data.data;
        router.push(`/recommend?data=${query}`);
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form className={cn('form')} onSubmit={handleSubmit((data) => handleSurveyPost(data))}>
        <h1 className={cn('title')}>설문하고 추천받기</h1>
        <FormDesign
          status={status}
          items={[
            {
              labelName: '맛',
              description: '평소 선호하던 맛을 선택해주세요.',
              content: (
                <ButtonInputs
                  items={[...TASTE_TYPES, { value: '상관없음', text: '상관없음' }]}
                  name="taste"
                  status={status}
                />
              ),
            },
            {
              labelName: '가격',
              description: '원하는 가격대를 선택해주세요.',
              content: (
                <ButtonInputs
                  items={[
                    { value: 10000, text: '10,000원대' },
                    { value: 20000, text: '20,000원대' },
                    { value: 30000, text: '30,000원대' },
                    { value: 50000, text: '50,000원대 이상' },
                    { value: '상관없음', text: '상관없음' },
                  ]}
                  name="sale"
                  status={status}
                />
              ),
            },
            {
              labelName: '원하는 재료',
              description: '선호하는 재료를 선택해주세요. (중복 가능)',
              content: (
                <CheckBoxInputs
                  items={[...TEA_TYPES, { value: '상관없음', text: '상관없음' }]}
                  name="category"
                  status={status}
                />
              ),
            },
            {
              labelName: '카페인 유무',
              description: '카페인 유무를 선택해주세요.',
              content: (
                <ButtonInputs
                  items={[
                    { value: 'Y', text: '카페인 있음' },
                    { value: 'N', text: '카페인 없음' },
                    { value: '상관없음', text: '상관없음' },
                  ]}
                  name="caffeine"
                  status={status}
                />
              ),
            },
          ]}
        />
        <Button
          shape="square"
          color="black"
          className={cn('surveySubmitButton')}
          disabled={!(tasteValue?.length && saleValue && categoryValue?.length && caffeineValue)}
        >
          추천받기
        </Button>
      </form>
    </FormProvider>
  );
}
