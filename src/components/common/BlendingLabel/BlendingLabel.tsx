'use client';

import classNames from 'classnames/bind';

import styles from '@/components/common/BlendingLabel/BlendingLabel.module.scss';
import { CategoryTypeEng } from '@/components/common/BlendingLabel/constants/labelType';

interface LabelProps {
  category?: CategoryTypeEng;
}

const cn = classNames.bind(styles);

export default function BlendingLabel({ category }: LabelProps) {
  return <div className={cn('label', category === 'Pu Erh' ? 'Pu-Erh' : category)}>{category}</div>;
}
