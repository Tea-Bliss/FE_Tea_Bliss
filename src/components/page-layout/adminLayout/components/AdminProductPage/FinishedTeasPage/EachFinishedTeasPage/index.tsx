'use client';

import { useSearchParams } from 'next/navigation';

import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import FinishedTeaForm from '@/components/page-layout/adminLayout/components/common/FinIshedTeaForm';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';

export default function EachFinishedTeasPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <BackButton />
      <FinishedTeaForm />
      <SubmitButton isDelete={true}>삭제하기</SubmitButton>
    </>
  );
}
