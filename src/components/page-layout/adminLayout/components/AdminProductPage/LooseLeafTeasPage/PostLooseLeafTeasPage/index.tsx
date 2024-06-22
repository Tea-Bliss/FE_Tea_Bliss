'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import openToast from '@/components/common/Toast/features/openToast';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import LooseLeafTeaForm from '@/components/page-layout/adminLayout/components/common/LooseLeafTeaForm';
import { useAdminPostIngredient } from '@/components/page-layout/adminLayout/hooks/useManageIngredients';
import { deleteImage, uploadImage } from '@/utils/supabaseUtils';

export default function PostLooseLeafTeasPage() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);

  const mutate = useAdminPostIngredient();

  const handleFormPost = async (formValues: any) => {
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
        if (values.photo) {
          await deleteImage(values.photo);
        }
      },
      onSuccess: () => {
        openToast('success', '상품이 추가되었습니다');
        router.push('/admin/product/loose-leaf-teas');
      },
    });
  };

  return (
    <>
      <BackButton />
      <LooseLeafTeaForm mutateFn={handleFormPost} setImageFile={setImageFile} />
    </>
  );
}
