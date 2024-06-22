'use client';

import { useState } from 'react';

import { notFound, useRouter, useSearchParams } from 'next/navigation';

import openToast from '@/components/common/Toast/features/openToast';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import LooseLeafTeaForm from '@/components/page-layout/adminLayout/components/common/LooseLeafTeaForm';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import {
  useAdminDeleteIngredient,
  useAdminPutIngredient,
  useGetOneIngredient,
} from '@/components/page-layout/adminLayout/hooks/useManageIngredients';
import processIngredientData from '@/components/page-layout/adminLayout/utils/processIngredientData';
import { deleteImage, uploadImage } from '@/utils/supabaseUtils';

export default function EachLooseLeafTeasPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);

  if (!id) {
    notFound();
  }

  const { data } = useGetOneIngredient(+id);

  const newData = processIngredientData(data?.data.data);

  const mutate = useAdminPutIngredient();

  const deleteMutate = useAdminDeleteIngredient();

  const handleFormPut = async (formValues: any) => {
    if (imageFile) {
      const publicUrl = await uploadImage(imageFile);

      if (!publicUrl) return;
      formValues.photo = publicUrl;
    }

    if (imageFile === null) {
      formValues.photo = null;
    }

    formValues.flavor = formValues.flavor.join(',');
    formValues.inventory = +formValues.inventory;
    formValues.sale = +formValues.sale;

    mutate.mutate(formValues, {
      onError: async (_, values) => {
        if (values.photo && values.photo !== data?.data.data.photo) {
          await deleteImage(values.photo);
        }

        openToast('error', '상품 정보 변경에 실패했습니다.');
      },

      onSuccess: async (_, values) => {
        if (values.photo && data?.data.data.photo && values.photo !== data?.data.data.photo) {
          await deleteImage(data?.data.data.photo);
        }

        openToast('success', '상품 정보가 변경되었습니다');
        router.push('/admin/product/loose-leaf-teas');
      },
    });
  };

  return (
    <>
      <BackButton />
      <LooseLeafTeaForm defaultValues={newData} mutateFn={handleFormPut} setImageFile={setImageFile} />
      <SubmitButton
        isDelete={true}
        onClick={() => {
          deleteMutate.mutate(+id);
          router.push('/admin/product/loose-leaf-teas');
        }}
      >
        삭제하기
      </SubmitButton>
    </>
  );
}
