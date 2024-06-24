import classNames from 'classnames/bind';

import Company from '@/components/common/Footer/Company/Company';
import styles from '@/components/common/Footer/Footer.module.scss';
import Sns from '@/components/common/Footer/Sns/Sns';
import FooterLogo from '@/icons/footer_logo.svg';

import Participation from './Participation/Participation';

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cn('container')}>
      <div className={cn('box')}>
        <Participation />
        <div className={cn('logo')}>
          <FooterLogo width={100} height={100} />
        </div>
        <div className={cn('contactBox')}>
          <Company />
          <Sns />
        </div>
      </div>
    </footer>
  );
}
