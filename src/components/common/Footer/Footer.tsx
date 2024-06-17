import classNames from 'classnames/bind';

import Company from '@/components/common/Footer/Company/Company';
import styles from '@/components/common/Footer/Footer.module.scss';
import Sns from '@/components/common/Footer/Sns/Sns';

import Participation from './Participation/Participation';

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cn('container')}>
      <div className={cn('box')}>
        <Participation />
        <p className={cn('title')}>Tea Bliss</p>
        <div className={cn('contactBox')}>
          <Company />
          <Sns />
        </div>
      </div>
    </footer>
  );
}
