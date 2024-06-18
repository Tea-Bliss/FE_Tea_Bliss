import classNames from 'classnames/bind';

import FlavorSelect from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor/FlavorSelect';
import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor/SelectFlavor.module.scss';

const cn = classNames.bind(styles);

export default function SelectFlavor() {
  return (
    <div className={cn('selectFlavor')}>
      <div className={cn('roundArea')}>
        <FlavorSelect flavorNumber={0} className={cn('floral')} />
        <FlavorSelect flavorNumber={1} className={cn('sweet')} />
        <FlavorSelect flavorNumber={2} className={cn('sour')} />
        <FlavorSelect flavorNumber={3} className={cn('spicy')} />
        <FlavorSelect flavorNumber={4} className={cn('bitter')} />
        <FlavorSelect flavorNumber={5} className={cn('fruity')} />
      </div>
    </div>
  );
}
