'use client';

import { InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import useDropDownContext from '@/components/common/DropDown/contexts/DropDownContext';
import DropDown from '@/components/common/DropDown/DropDown';
import DropDownContent from '@/components/common/DropDown/DropDownContent';
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
            <div className={cn('cameraButton')} id="openModal">
              <Image
                src="/icons/camera.svg"
                alt="이미지 변경"
                width={20}
                height={20}
                className={cn('cameraImage')}
                id="openModal"
              />
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

interface CustomDropDownTriggerProps {
  className?: string;
  children?: ReactNode;
}

function CustomDropDownTrigger({ className, children }: CustomDropDownTriggerProps) {
  const { isOpen, selectedItem, animation, handleDropDown } = useDropDownContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.id !== 'openModal') {
        handleDropDown(animation);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleDropDown, animation]);

  return (
    <button className={className} type="button" onClick={() => handleDropDown(animation)}>
      {selectedItem}
      {children}
    </button>
  );
}
