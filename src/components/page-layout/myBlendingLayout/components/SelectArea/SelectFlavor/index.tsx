import classNames from 'classnames/bind';

import FlavorSelect from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor/FlavorSelect';
import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor/SelectFlavor.module.scss';

const cn = classNames.bind(styles);

export default function SelectFlavor() {
  return (
    <div className={cn('selectFlavor')}>
      <div className={cn('roundArea')}>
        <FlavorSelect flavor={'Floral'} className={cn('floral')} />
        <FlavorSelect flavor={'Sweet'} className={cn('sweet')} />
        <FlavorSelect flavor={'Sour'} className={cn('sour')} />
        <FlavorSelect flavor={'Spicy'} className={cn('spicy')} />
        <FlavorSelect flavor={'Bitter'} className={cn('bitter')} />
        <FlavorSelect flavor={'Fruity'} className={cn('fruity')} />
      </div>
    </div>
  );
}
