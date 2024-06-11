'use client';

import { useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/common/FileInput/FileInput.module.scss';

const cn = classNames.bind(styles);

const defaultImage = '/images/default_profile.png';

export default function FileInput({ ...props }) {
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
      <label className={cn('previewContainer')}>
        <Image src={preview || defaultImage} alt="preview" fill objectFit="cover" className={cn('previewImage')} />
      </label>
      <input
        {...props}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={cn('fileInput')}
        ref={fileInputRef}
      />
    </div>
  );
}
