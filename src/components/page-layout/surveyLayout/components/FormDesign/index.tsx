import { ReactElement } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/surveyLayout/components/FormDesign/FormDesign.module.scss';
import FormIcon from '@/components/page-layout/surveyLayout/components/FormIcon';

const cn = classNames.bind(styles);

type Items = { labelName: string; description: string; content: ReactElement }[];

interface FormDesignProps {
  items: Items;
  status: number;
}

export default function FormDesign({ items, status }: FormDesignProps) {
  return items.map((item, index) => {
    return (
      <div key={index} className={cn('layout')}>
        <div className={cn('label', status === index && 'current')}>
          <FormIcon status={status > index ? 'done' : status === index ? 'current' : 'preparing'} number={index + 1} />
          <h2 className={cn('labelName')}>{item.labelName}</h2>
        </div>

        <div className={cn('content', status > index ? 'done' : status < index && 'preparing')}>
          <p className={cn('description')}>{item.description}</p>
          <div>{item.content}</div>
        </div>
      </div>
    );
  });
}
