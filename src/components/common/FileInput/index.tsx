'use client';

import { InputHTMLAttributes, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import DropDown from '@/components/common/DropDown/DropDown';
import DropDownContent from '@/components/common/DropDown/DropDownContent';
import CustomDropDownTrigger from '@/components/common/FileInput/CustomDropDownTrigger';
import styles from '@/components/common/FileInput/FileInput.module.scss';

const cn = classNames.bind(styles);

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'profile' | 'product';
}

export default function FileInput({ type, ...props }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultImage = type === 'profile' ? '/images/default_profile.png' : '/images/default_product.png';

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
      <div className={cn(type === 'profile' ? 'profilePreview' : 'productPreview')}>
        <div className={cn('previewInnerContainer')}>
          <Image src={preview || defaultImage} alt="preview" fill style={{ objectFit: 'cover' }} />
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
