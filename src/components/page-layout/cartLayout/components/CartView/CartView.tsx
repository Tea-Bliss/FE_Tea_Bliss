'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import Accordion from '@/components/common/Accordion/Accordion';
import AccordionContent from '@/components/common/Accordion/AccordionContent';
import AccordionTrigger from '@/components/common/Accordion/AccordionTrigger';
import CartItem from '@/components/page-layout/cartLayout/components/CartItem/CartItem';
import styles from '@/components/page-layout/cartLayout/components/CartView/CartView.module.scss';
import DeleteConfirmModal from '@/components/page-layout/cartLayout/components/DeleteConfirmModal/DeleteConfirmModal';
import SelectAllCheckbox from '@/components/page-layout/cartLayout/components/SelectAllCheckbox/SelectAllCheckbox';
import { useCartItemQuery } from '@/components/page-layout/cartLayout/hooks/useCartItemQuery';

const cn = classNames.bind(styles);

export default function CartView() {
  const { data: cartItems } = useCartItemQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen((prev) => !prev);
  const closeModal = () => setIsModalOpen((prev) => !prev);

  return (
    <section className={cn('container')}>
      <SelectAllCheckbox />
      <Accordion className={cn('accordionContainer')}>
        <AccordionTrigger className={cn('trigger')} value="item1">
          냉동 참치
        </AccordionTrigger>
        <AccordionContent className={cn('content')} value="item1">
          {cartItems?.map((item) => (
            <CartItem key={item.id} {...item} openModal={openModal} />
          ))}
        </AccordionContent>
      </Accordion>
      <SelectAllCheckbox />
      <DeleteConfirmModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
