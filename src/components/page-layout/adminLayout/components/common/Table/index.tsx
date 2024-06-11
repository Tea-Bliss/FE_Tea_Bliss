import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/components/common/Table/Table.module.scss';

const cn = classNames.bind(styles);

interface TableProps {
  fields: string[];
  items: Array<{ id: number; [key: string]: any }>;
  name: string;
  unit: string;
}

export default function Table({ fields, items, name, unit }: TableProps) {
  return (
    <div className={cn('container')}>
      <div className={cn('count')}>
        {`전체 ${name}`} <span className={cn('number')}>{items.length}</span>
        {`${unit}`}
      </div>
      <ul className={cn('table')}>
        <li className={cn('row', 'header')}>
          {fields.map((field) => {
            return (
              <div key={field} className={cn('cell')}>
                {field}
              </div>
            );
          })}
        </li>
        {items.map((item) => (
          <li key={item.id} className={cn('row')}>
            {Object.keys(item).map((key) => {
              return (
                <div key={key} className={cn('cell')}>
                  {item[key as keyof typeof item]}
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}
