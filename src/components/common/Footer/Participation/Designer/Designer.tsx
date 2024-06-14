import classNames from 'classnames/bind';

import styles from '@/components/common/Footer/Participation/Designer/Designer.module.scss';

const cn = classNames.bind(styles);

export default function Designer() {
  return (
    <div className={cn('nameBox')}>
      <p>Design</p>
      <a>조효은</a>
    </div>
  );
}
