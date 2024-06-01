'use client';

import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import ReactDOM from 'react-dom';

import styles from '@/components/common/modal/BackdropModal/BackdropModal.module.scss';
import Close from '@/icons/close.svg';

const cn = classNames.bind(styles);

interface BackdropModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export default function BackdropModal({ isOpen, children, onClose }: BackdropModalProps) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>();

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

  return isOpen && modalRoot
    ? ReactDOM.createPortal(
        <div className={cn('back')} onClick={onClose}>
          <div className={cn('container')} onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>
              <Close />
            </button>
            {children}
          </div>
        </div>,
        modalRoot
      )
    : null;
}
