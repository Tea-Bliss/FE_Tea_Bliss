'use client';
import classNames from 'classnames/bind';

import Accordion from '@/components/common/Accordion/Accordion';
import AccordionContent from '@/components/common/Accordion/AccordionContent';
import AccordionTrigger from '@/components/common/Accordion/AccordionTrigger';
import { SelectedItemsType } from '@/components/page-layout/cartLayout/components/CartView/CartView';
import styles from '@/components/page-layout/orderLayout/components/OrderProduct/OrderProduct.module.scss';

import OrderProductItem from '../OrderProductItem/OrderProductItem';

const cn = classNames.bind(styles);
export default function OrderProduct() {
  const orderProductItem = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('selectedItems') || '[]');
  return (
    <Accordion className={cn('accordionContainer')}>
      <AccordionTrigger className={cn('trigger')} value="item1">
        주문 상품
      </AccordionTrigger>
      {orderProductItem && (
        <AccordionContent className={cn('content')} value="item1">
          {orderProductItem.map((item: SelectedItemsType) => (
            <OrderProductItem {...item} key={item.id} />
          ))}
        </AccordionContent>
      )}
    </Accordion>
  );
}
