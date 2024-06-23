'use client';

import { Dispatch, InputHTMLAttributes, SetStateAction, useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import DropDown from '@/components/common/DropDown/DropDown';
import DropDownContent from '@/components/common/DropDown/DropDownContent';
import CustomDropDownTrigger from '@/components/page-layout/adminLayout/components/common/FileInput/CustomDropDownTrigger';
import styles from '@/components/page-layout/adminLayout/components/common/FileInput/FileInput.module.scss';

const cn = classNames.bind(styles);

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'profile' | 'product';
  defaultImage: string | null;
  setFn: Dispatch<SetStateAction<File | null | undefined>>;
}

export default function FileInput({ type, defaultImage, setFn, ...props }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(defaultImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialImage = type === 'profile' ? '/images/default_profile.png' : '/images/default_product.png';

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

  const handleFileClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setPreview(null);
      setFn(null);
    }
  };

  useEffect(() => {
    setPreview(defaultImage);
  }, [defaultImage]);

  return (
    <div>
      <div className={cn(type === 'profile' ? 'profilePreview' : 'productPreview')}>
        <div className={cn('previewInnerContainer')}>
          <Image
            src={preview === '~~' ? initialImage : preview || initialImage}
            alt="preview"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <DropDown className={cn('dropdown')} animation={true} defaultTitle="">
          <CustomDropDownTrigger>
            <div className={cn('cameraButton')}>
              <Image src="/icons/camera.svg" alt="이미지 변경" width={20} height={20} className={cn('cameraImage')} />
            </div>
          </CustomDropDownTrigger>
          <DropDownContent className={cn('dropdownContent')}>
            <label htmlFor="image" className={cn('dropdownButton')}>
              이미지 추가
            </label>
            <div onClick={handleFileClear} className={cn('dropdownButton')}>
              이미지 제거
            </div>
          </DropDownContent>
        </DropDown>
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
