import classNames from 'classnames/bind';

import styles from '@/components/page-layout/cartLayout/components/SelectAllCheckbox/SelectAllCheckbox.module.scss';

const cn = classNames.bind(styles);

export default function SelectAllCheckbox() {
  return (
    <div className={cn('container')}>
      <div className={cn('checkboxWrapper')}>
        <input id="SelectAllCheckbox" className={cn('checkboxInput')} type="checkbox" />
        <label className={cn('label')} htmlFor="SelectAllCheckbox">
          전체 선택
        </label>
      </div>
      <button className={cn('label')}>선택 삭제</button>
    </div>
  );
}
