import classNames from 'classnames/bind';

import styles from '@/components/common/Footer/Participation/Designer/Designer.module.scss';

const cn = classNames.bind(styles);

export default function Designer() {
  return (
    <div className={cn('nameBox')}>
      <p>Design</p>
      <a
        href="https://maze-wasp-d65.notion.site/Dream-Maker-d1e511f087a84fc5908b1077041f47ef?pvs=4"
        target="_blank"
        rel="noopener noreferrer"
      >
        조효은
      </a>
    </div>
  );
}
