import classNames from 'classnames/bind';

import styles from '@/components/common/Footer/Participation/BackEnd/BackEnd.module.scss';

const cn = classNames.bind(styles);

export default function BackEnd() {
  return (
    <div className={cn('nameBox')}>
      <p>Back-end</p>
      <a href="https://github.com/lemonticsoul" target="_blank" rel="noopener noreferrer">
        서제호
      </a>
      <a>경문</a>
    </div>
  );
}
