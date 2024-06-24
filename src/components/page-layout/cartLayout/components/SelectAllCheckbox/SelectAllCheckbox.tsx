import classNames from 'classnames/bind';

import styles from '@/components/page-layout/cartLayout/components/SelectAllCheckbox/SelectAllCheckbox.module.scss';

const cn = classNames.bind(styles);

interface SelectAllCheckboxProps {
  isAllSelected: boolean;
  onSelectAll: () => void;
  openSelectedDeleteModal: () => void;
  hasItems?: boolean;
  hasSelectedItems: boolean;
}

export default function SelectAllCheckbox({
  isAllSelected,
  onSelectAll,
  openSelectedDeleteModal,
  hasItems,
  hasSelectedItems,
}: SelectAllCheckboxProps) {
  return (
    <div className={cn('container')}>
      <div className={cn('checkboxWrapper')}>
        <input
          id="SelectAllCheckbox"
          className={cn('checkboxInput')}
          type="checkbox"
          checked={isAllSelected}
          onChange={onSelectAll}
          disabled={!hasItems}
        />
        <label className={cn('label')} htmlFor="SelectAllCheckbox">
          전체 선택
        </label>
      </div>
      <button className={cn('label')} onClick={openSelectedDeleteModal} disabled={!hasSelectedItems}>
        선택 삭제
      </button>
    </div>
  );
}
