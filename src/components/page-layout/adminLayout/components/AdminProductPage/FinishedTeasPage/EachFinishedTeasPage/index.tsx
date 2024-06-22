'use client';

import { useState } from 'react';

import { notFound, useRouter, useSearchParams } from 'next/navigation';

import openToast from '@/components/common/Toast/features/openToast';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import FinishedTeaForm from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import {
  useAdminDeleteTea,
  useAdminPatchTea,
  useGetOneTea,
} from '@/components/page-layout/adminLayout/hooks/useManageTeas';
import { PatchFinishedTeasType } from '@/components/page-layout/adminLayout/types/productType';
import { deleteImage, uploadImage } from '@/utils/supabaseUtils';

export default function EachFinishedTeasPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);

  if (!id) {
    notFound();
  }

  const { data } = useGetOneTea(+id);

  const mutate = useAdminPatchTea();

  const deleteMutate = useAdminDeleteTea();

  const handleFormPatch = async (formValues: PatchFinishedTeasType) => {
    if (imageFile) {
      const publicUrl = await uploadImage(imageFile);

      if (!publicUrl) return;
      formValues.img = publicUrl;
    }

    if (imageFile === null) {
      formValues.img = null;
    }

    formValues.caffeine = Boolean(formValues.caffeine);
    formValues.inventory = +formValues.inventory;
    formValues.price = +formValues.price;

    mutate.mutate(
      { data: formValues, id: +id },
      {
        onError: async (_, values) => {
          if (values.data.img) {
            await deleteImage(values.data.img);
          }

          openToast('error', '상품 정보 변경에 실패했습니다.');
        },
        onSuccess: async (_, values) => {
          if (values.data.img !== undefined && data?.data.img) {
            await deleteImage(data?.data.img);
          }

          openToast('success', '상품 정보가 변경되었습니다');
          router.push('/admin/product/finished-teas');
        },
      }
    );
  };

  return (
    <>
      <BackButton />
      <FinishedTeaForm defaultValues={data?.data} setImageFile={setImageFile} mutateFn={handleFormPatch} />
      <SubmitButton
        isDelete={true}
        onClick={() => {
          deleteMutate.mutate(+id);
          router.push('/admin/product/finished-teas');
        }}
      >
        삭제하기
      </SubmitButton>
    </>
  );
}
