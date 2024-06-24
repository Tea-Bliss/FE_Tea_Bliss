'use client';

import { KeyboardEventHandler, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import RateStars from '@/components/page-layout/myPageLayout/myReview/components/common/RateStars';
import styles from '@/components/page-layout/myPageLayout/myReview/components/common/ReviewModal/ReviewModal.module.scss';
import { usePostReview, usePutReview } from '@/components/page-layout/myPageLayout/myReview/hooks/usehandleReviews';
import likesType from '@/components/page-layout/myPageLayout/myReview/types/likesType';

const cn = classNames.bind(styles);

interface ReviewModalProps {
  role: '생성' | '수정';
  data: any;
  onClose: () => void;
}

export default function ReviewModal({ role, data, onClose }: ReviewModalProps) {
  const { handleSubmit, register, reset, setValue } = useForm({
    defaultValues:
      role === '수정'
        ? {
            teaId: data?.teaId,
            title: data?.title,
            contents: data?.contents,
            likes: data?.likes,
          }
        : {
            teaId: data?.teaId,
            title: '',
            contents: '',
            likes: 0,
          },
  });

  const [rating, setRating] = useState<likesType>(0);

  const postMutate = usePostReview();
  const putMutate = usePutReview();

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    reset(
      role === '수정'
        ? {
            teaId: data?.teaId,
            title: data?.title,
            contents: data?.contents,
            likes: data?.likes,
          }
        : {
            teaId: data?.teaId,
            title: '',
            contents: '',
            likes: 0,
          }
    );
  }, [data, reset, role]);

  useEffect(() => {
    setValue('likes', rating);
  }, [rating, setValue]);

  const handleSubmitData = (formData: any, reviewId: number) => {
    if (role === '생성') {
      postMutate.mutate(formData, {
        onSuccess: () => {
          onClose();
          return;
        },
      });
    } else {
      postMutate.mutate(
        { data: formData, reviewId },
        {
          onSuccess: () => {
            onClose();
            return;
          },
        }
      );
    }
  };

  return (
    <form
      className={cn('modal')}
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit((formData) => {
        handleSubmitData(formData, data?.reviewId);
      })}
    >
      <h1 className={cn('modalTitle')}>{`리뷰 ${role}하기`}</h1>

      <div className={cn('contents')}>
        <div className={cn('productInfo')}>
          <p className={cn('grayText')}>판매완료</p>
          <h2 className={cn('productTitle')}>{data?.name}</h2>
          <div className={cn('dayAndQuantity')}>
            <span className={cn('grayText')}>
              {role === '생성' ? `구매일: ${data?.paidAt?.split(' ')[0]}` : `작성일: ${data?.createDt?.split(' ')[0]}`}
            </span>
            <span className={cn('grayText')}>{`구매 수량: ${data.quantity}`}</span>
          </div>
        </div>

        <div className={cn('ratingArea')}>
          <div className={cn('rating')}>
            <RateStars rate={rating} where="modal" setRate={setRating} />
            <p className={cn('ratingText')}>{`${rating}점`}</p>
          </div>
          <p className={cn('grayText')}>별점을 클릭 해보세요!</p>
        </div>

        <div className={cn('inputArea')}>
          <input
            className={cn('titleInput')}
            placeholder="리뷰 제목을 작성해주세요"
            {...register('title', { required: true })}
          />

          <textarea
            className={cn('textarea')}
            placeholder="리뷰를 작성해주세요"
            {...register('contents', { required: true })}
          />
        </div>
      </div>

      <div className={cn('buttonContainer')}>
        <Button shape="square" color="white" className={cn('button')}>
          {`리뷰 ${role}하기`}
        </Button>
      </div>
    </form>
  );
}
