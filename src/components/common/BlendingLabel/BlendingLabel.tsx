'use client';

import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/BlendingLabel/BlendingLabel.module.scss';

interface LabelProps {
  children?: ReactNode;
}

const cn = classNames.bind(styles);

export default function BlendingLabel({ children }: LabelProps) {
  return <div className={cn('label')}>{children}</div>;
}
