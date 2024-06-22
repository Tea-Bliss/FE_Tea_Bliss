import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/page-layout/adminLayout/components/common/Table/Table.module.scss';

import SubmitButton from '../SubmitButton';

const cn = classNames.bind(styles);

interface TableProps {
  fields: string[];
  items: Array<{ id: number; [key: string]: any }>;
  name: string;
  unit: string;
  postPath: string;
  modifyPath: string;
  keys: string[];
}

export default function Table({ fields, items, name, unit, postPath, modifyPath, keys }: TableProps) {
  return (
    <div className={cn('container')}>
      <div className={cn('count')}>
        {`전체 ${name}`} <span className={cn('number')}>{items?.length}</span>
        {`${unit}`}
      </div>
      <div className={cn('table')}>
        <div className={cn('row', 'header')}>
          {fields.map((field) => {
            return (
              <div key={field} className={cn('cell')}>
                {field}
              </div>
            );
          })}
        </div>
        {items?.map((item) => (
          <Link href={{ pathname: modifyPath, query: { id: item?.id } }} key={item?.id} className={cn('row')}>
            {keys?.map((key) => {
              return (
                <div key={key} className={cn('cell')}>
                  {item[key]}
                </div>
              );
            })}
          </Link>
        ))}
      </div>
      {postPath !== '/admin/customer/detail' && (
        <Link href={postPath} className={cn('addButtonLink')}>
          <SubmitButton className={cn('addButton')}>상품 추가</SubmitButton>
        </Link>
      )}
    </div>
  );
}
