'use client';

import { Dispatch, InputHTMLAttributes, SetStateAction, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange/MyInfoFileInput/MyInfoFileInput.module.scss';

const cn = classNames.bind(styles);

interface MyInfoFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultImage: string | null;
  setFn: Dispatch<SetStateAction<File | null | undefined>>;
}

export default function MyInfoFileInput({ defaultImage, setFn, ...props }: MyInfoFileInputProps) {
  const [preview, setPreview] = useState<string | null>(defaultImage);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFn(file);
    } else {
      setPreview(null);
      setFn(null);
    }
  };

  return (
    <div>
      <div className={cn('profile')}>
        <label htmlFor="image" className={cn('label')}>
          <Image
            src={preview || '/images/default_profile.png'}
            alt="preview"
            fill
            style={{ objectFit: 'cover' }}
            className={cn('preview')}
          />
          <Image src="/icons/plus.svg" alt="사진 추가" width={40} height={40} className={cn('plusIcon')} />
        </label>
      </div>

      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={cn('fileInput')}
        {...props}
      />
    </div>
  );
}
