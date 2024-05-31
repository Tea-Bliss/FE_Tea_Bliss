import { useState } from 'react';

import BackdropModal from '@/components/common/modal/BackdropModal/BackdropModal';

export default function Js() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div>지수 테스트페이지</div>
      <button onClick={openModal}>안녕 모달!</button>
      <BackdropModal isOpen={isModalOpen} onClose={closeModal}>
        반가워~!✨
      </BackdropModal>
    </div>
  );
}
