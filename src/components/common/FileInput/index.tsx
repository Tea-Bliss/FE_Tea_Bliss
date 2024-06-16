'use client';

import { InputHTMLAttributes, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/common/FileInput/FileInput.module.scss';

const cn = classNames.bind(styles);

const defaultImage = '/images/default_profile.png';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function FileInput(props: FileInputProps) {
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

  const handleFileClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setPreview(null);
    }
  };

  return (
    <div>
      <div className={cn('previewOuterContainer')}>
        <div className={cn('previewInnerContainer')}>
          <Image src={preview || defaultImage} alt="preview" fill objectFit="cover" className={cn('previewImage')} />
        </div>
        <button type="button" className={cn('cameraButton')}>
          <Image src="/icons/camera.svg" alt="이미지 변경" width={20} height={20} />
        </button>
      </div>
      <input
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
