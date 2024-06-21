'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import Image from 'next/image';

import DropDown from '@/components/common/DropDown/DropDown';
import DropDownContent from '@/components/common/DropDown/DropDownContent';
import CustomDropDownTrigger from '@/components/common/FileInput/CustomDropDownTrigger';
import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/EachFinishedTeasPage/IngredientInput/DropDownInput/DropDownInput.module.scss';
import { LooseLeafTeaType } from '@/components/page-layout/adminLayout/types/productType';

const cn = classNames.bind(styles);

interface DropDownInputProps {
  fieldIndex: number;
}

export default function DropDownInput({ fieldIndex }: DropDownInputProps) {
  const [items, setItems] = useState<LooseLeafTeaType[]>([
    {
      id: 1,
      category: '홍차',
      name: '맛있다',
      nameEng: 'delicious',
      sale: 3000,
      inventory: 20,
      saleStatus: '판매중',
      flavor: '',
      explanation: '개맛있다',
      photo: '',
    },
  ]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState('');
  const [isTeaOpen, setIsTeaOpen] = useState(false);
  const [selectedTeaValue, setSelectedTeaValue] = useState('');

  const { register, setValue } = useFormContext();

  useEffect(() => {
    const teas = [
      {
        id: 123,
        category: '홍차',
        name: '맛있다',
        nameEng: 'delicious',
        sale: 3000,
        inventory: 20,
        saleStatus: '판매중',
        flavor: '',
        explanation: '개맛있다',
        photo: '',
      },
      {
        id: 256,
        category: '푸에르 티',
        name: '맛없다',
        nameEng: 'notDelicious',
        sale: 2000,
        inventory: 20,
        saleStatus: '판매중',
        flavor: [1, 2, 3],
        explanation: '개맛없다',
        photo: '',
      },
    ] as LooseLeafTeaType[];

    setItems(teas.filter((tea) => tea.category === selectedCategoryValue));
  }, [selectedCategoryValue]);

  return (
    <>
      <DropDown className={cn('dropdown')} animation={true} defaultTitle="">
        <CustomDropDownTrigger setIsOpen={setIsCategoryOpen}>
          <input className={cn('textContainer')} value={selectedCategoryValue} readOnly />
          <Image
            src="/icons/arrow.svg"
            alt="dropdown"
            width={14}
            height={14}
            className={cn('dropdownArrow', isCategoryOpen && 'visibleDropdown')}
          />
        </CustomDropDownTrigger>
        <DropDownContent className={cn('dropdownContent')}>
          {['홍차', '푸에르 티', '차이 티', '우롱차', '백차', '녹차', '허브 티', '루이보스 티', '디카페인'].map(
            (item, index) => {
              return (
                <div className={cn('dropdownButton')} key={index} onClick={() => setSelectedCategoryValue(item)}>
                  {item}
                </div>
              );
            }
          )}
        </DropDownContent>
      </DropDown>

      <DropDown className={cn('dropdown')} animation={true} defaultTitle="">
        <CustomDropDownTrigger setIsOpen={setIsTeaOpen} disabled={!selectedCategoryValue}>
          <div className={cn('textContainer')}>
            <Image
              src="/icons/arrow.svg"
              alt="dropdown"
              width={14}
              height={14}
              className={cn('dropdownArrow', isTeaOpen && 'visibleDropdown')}
            />
            {selectedTeaValue}
            <input className={cn('input')} type="number" {...register(`ingredient.${fieldIndex}`)} />
          </div>
        </CustomDropDownTrigger>
        <DropDownContent className={cn('dropdownContent')}>
          {items?.map((item, index) => {
            return (
              <div
                className={cn('dropdownButton')}
                key={index}
                onClick={() => {
                  setSelectedTeaValue(item.name);
                  setValue(`ingredient.${fieldIndex}`, item.id);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </DropDownContent>
      </DropDown>
    </>
  );
}
