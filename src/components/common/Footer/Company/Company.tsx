import classNames from 'classnames/bind';

import styles from '@/components/common/Footer/Company/Company.module.scss';

const cn = classNames.bind(styles);

export default function Company() {
  return (
    <div className={cn('company')}>
      <div className={cn('companyInfo')}>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
      <p>Copyright© 2024. Tea Bliss All Rights Reserved.</p>
    </div>
  );
}
