import classNames from 'classnames/bind';

import BackdropModal from '@/components/common/modal/BackdropModal/BackdropModal';
import styles from '@/components/page-layout/cartLayout/components/DeleteConfirmModal/DeleteConfirmModal.module.scss';

const cn = classNames.bind(styles);

interface DeleteConfirmModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export default function DeleteConfirmModal({ isModalOpen, closeModal }: DeleteConfirmModalProps) {
  return (
    <BackdropModal isOpen={isModalOpen} onClose={closeModal} closeBtn={false}>
      <div className={cn('container')}>
        <div className={cn('title')}>상품을 삭제하시겠습니까?</div>
        <div className={cn('confirmButtonWrapper')}>
          <button className={cn('confirmButton')} type="button" onClick={closeModal}>
            취소
          </button>
          <button className={cn('confirmButton', 'confirm')} type="button">
            확인
          </button>
        </div>
      </div>
    </BackdropModal>
  );
}
