'use client';

import { InputHTMLAttributes, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange/MyInfoFileInput/MyInfoFileInput.module.scss';

const cn = classNames.bind(styles);

interface MyInfoFileInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function MyInfoFileInput({ ...props }: MyInfoFileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
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
        ref={fileInputRef}
        {...props}
      />
    </div>
  );
}
