'use client';

import { useSearchParams } from 'next/navigation';

import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import LooseLeafTeaForm from '@/components/page-layout/adminLayout/components/common/LooseLeafTeaForm';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';

export default function EachLooseLeafTeasPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <BackButton />
      <LooseLeafTeaForm />
      <SubmitButton isDelete={true}>삭제하기</SubmitButton>
    </>
  );
}
