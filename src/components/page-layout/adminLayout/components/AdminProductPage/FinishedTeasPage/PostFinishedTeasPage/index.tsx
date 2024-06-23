'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import openToast from '@/components/common/Toast/features/openToast';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import FinishedTeaForm from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm';
import { useAdminPostTea } from '@/components/page-layout/adminLayout/hooks/useManageTeas';
import { PostFinishedTeasType } from '@/components/page-layout/adminLayout/types/productType';
import { deleteImage, uploadImage } from '@/utils/supabaseUtils';

export default function PostFinishedTeasPage() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);

  const mutate = useAdminPostTea();

  const handleFormPost = async (formValues: PostFinishedTeasType) => {
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

    mutate.mutate(formValues, {
      onError: async (_, values) => {
        if (values.img) {
          await deleteImage(values.img);
        }

        openToast('error', '상품 추가에 실패했습니다.');
      },
      onSuccess: () => {
        openToast('success', '상품이 추가되었습니다');
        router.push('/admin/product/finished-teas');
      },
    });
  };

  return (
    <>
      <BackButton />
      <FinishedTeaForm setImageFile={setImageFile} mutateFn={handleFormPost} />
    </>
  );
}
