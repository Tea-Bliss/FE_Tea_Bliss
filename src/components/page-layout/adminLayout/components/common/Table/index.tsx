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
  path: string;
}

export default function Table({ fields, items, name, unit, path }: TableProps) {
  return (
    <div className={cn('container')}>
      <div className={cn('count')}>
        {`전체 ${name}`} <span className={cn('number')}>{items.length}</span>
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
        {items.map((item) => (
          <Link href={{ pathname: path, query: { id: item.id } }} key={item.id} className={cn('row')}>
            {Object.keys(item).map((key) => {
              return (
                <div key={key} className={cn('cell')}>
                  {item[key as keyof typeof item]}
                </div>
              );
            })}
          </Link>
        ))}
      </div>
      {path !== '/admin/customer/detail' && (
        <Link href={path} className={cn('addButtonLink')}>
          <SubmitButton className={cn('addButton')}>상품 추가</SubmitButton>
        </Link>
      )}
    </div>
  );
}