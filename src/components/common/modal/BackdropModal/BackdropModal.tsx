'use client';

import { ReactNode, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import ReactDOM from 'react-dom';

import styles from '@/components/common/modal/BackdropModal/BackdropModal.module.scss';
import Close from '@/icons/close.svg';

const cn = classNames.bind(styles);

/**
 * 백드롭 모달(기본형) - 모달이 열려있는지 확인하고, 내부 내용을 표시하고, onClose 함수를 사용하여 모달을 닫습니다.
 * @component
 * @param isOpen - 모달이 열려있는지 확인
 * @param children - 모달 내부 내용
 * @param onClose - 모달을 닫을 때 사용할 함수
 */

interface BackdropModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  closeBtn?: boolean;
}

export default function BackdropModal({ isOpen, children, onClose, closeBtn = true }: BackdropModalProps) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    isOpen &&
    modalRoot &&
    ReactDOM.createPortal(
      <div className={cn('back')} onClick={onClose}>
        <div className={cn('container')} onClick={(e) => e.stopPropagation()}>
          {closeBtn && (
            <button onClick={onClose}>
              <Close width={20} height={20} stroke={'#181717'} />
            </button>
          )}
          {children}
        </div>
      </div>,
      modalRoot
    )
  );
}
