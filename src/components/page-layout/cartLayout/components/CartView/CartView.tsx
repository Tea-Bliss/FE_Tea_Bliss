'use client';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import Accordion from '@/components/common/Accordion/Accordion';
import AccordionContent from '@/components/common/Accordion/AccordionContent';
import AccordionTrigger from '@/components/common/Accordion/AccordionTrigger';
import CartItem from '@/components/page-layout/cartLayout/components/CartItem/CartItem';
import styles from '@/components/page-layout/cartLayout/components/CartView/CartView.module.scss';
import CheckoutSummary from '@/components/page-layout/cartLayout/components/CheckoutSummary/CheckoutSummary';
import DeleteConfirmModal from '@/components/page-layout/cartLayout/components/DeleteConfirmModal/DeleteConfirmModal';
import SelectAllCheckbox from '@/components/page-layout/cartLayout/components/SelectAllCheckbox/SelectAllCheckbox';
import { useCartItemQuery } from '@/components/page-layout/cartLayout/hooks/useCartItemQuery';
import useDeleteItemMutation from '@/components/page-layout/cartLayout/hooks/useDeleteItemMutation';
import useSelectedDeleteCartItemMutation from '@/components/page-layout/cartLayout/hooks/useSelcetedDeleteCartItemMutation';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';

const cn = classNames.bind(styles);

export interface SelectedItemsType {
  id: number;
  img: string;
  product: string;
  nameEng: string;
  price: number;
  quantity: number;
}

export default function CartView() {
  const [cartItems, setCartItems] = useState<getCartItems[]>([]);
  const [selectedItems, setSelectedItems] = useState<SelectedItemsType[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSelectedDeleteModalOpen, setIsSelectedDeleteModalOpen] = useState(false);
  const [removeProductId, setRemoveProductId] = useState<number | null>(null);
  const { mutate: deleteItemMutate } = useDeleteItemMutation(removeProductId);
  const { mutate: selectedDeleteItemMutate } = useSelectedDeleteCartItemMutation(selectedItems);
  const { data } = useCartItemQuery();

  useEffect(() => {
    setCartItems(data!);
  }, [data]);

  const openDeleteModal = (productId: number) => {
    setRemoveProductId(productId);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDeleteConfirm = () => {
    if (removeProductId) {
      deleteItemMutate();
      closeDeleteModal();
    }
  };

  const openSelectedDeleteModal = () => setIsSelectedDeleteModalOpen(true);
  const closeSelectedDeleteModal = () => setIsSelectedDeleteModalOpen(false);

  const handleItemSelection = (
    id: number,
    img: string,
    product: string,
    nameEng: string,
    price: number,
    quantity: number,
    isSelected: boolean
  ) => {
    setSelectedItems((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item.id !== id)
        : [...prevSelectedItems, { id, img, product, nameEng, price, quantity }]
    );
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => ({ ...item })));
    }
    setIsAllSelected(!isAllSelected);
  };

  useEffect(() => {
    setIsAllSelected(selectedItems.length === cartItems?.length);
  }, [selectedItems, cartItems]);

  const isItemSelected = (productId: number) => {
    return selectedItems.some((item) => item.id === productId);
  };

  const handleSelectedDeleteConfirm = () => {
    selectedDeleteItemMutate();
    setSelectedItems([]);
    closeSelectedDeleteModal();
  };

  return (
    <>
      <section className={cn('container')}>
        <SelectAllCheckbox
          isAllSelected={isAllSelected}
          onSelectAll={handleSelectAll}
          openSelectedDeleteModal={openSelectedDeleteModal}
          hasItems={cartItems && cartItems.length > 0}
          hasSelectedItems={selectedItems.length > 0}
        />
        {cartItems ? (
          <Accordion className={cn('accordionContainer')}>
            <AccordionTrigger className={cn('trigger')} value="item1">
              완제품
            </AccordionTrigger>
            <AccordionContent className={cn('content')} value="item1">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  openModal={openDeleteModal}
                  handleItemSelection={handleItemSelection}
                  isSelected={isItemSelected(item.id)}
                />
              ))}
            </AccordionContent>
          </Accordion>
        ) : (
          <div className={cn('emptyCart')}>장바구니에 담긴 상품이 없습니다</div>
        )}
        <DeleteConfirmModal
          isModalOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
          onConfirm={handleDeleteConfirm}
          message="이 상품을 삭제하시겠습니까?"
        />
        <DeleteConfirmModal
          isModalOpen={isSelectedDeleteModalOpen}
          closeModal={closeSelectedDeleteModal}
          onConfirm={handleSelectedDeleteConfirm}
          message="선택된 상품을 삭제하시겠습니까?"
        />
      </section>
      <CheckoutSummary selectedItems={selectedItems} />
    </>
  );
}
