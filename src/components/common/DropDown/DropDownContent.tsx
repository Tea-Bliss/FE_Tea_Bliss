import { ReactNode, useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import useDropDownContext from '@/components/common/DropDown/contexts/DropDownContext';
import styles from '@/components/common/DropDown/DropDownContent.module.scss';

const cn = classNames.bind(styles);

interface DropDownContentProps {
  children: ReactNode;
  className: string;
}

export default function DropDownContent({ children, className }: DropDownContentProps) {
  const { isOpen, animation, isAnimating } = useDropDownContext();
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef<HTMLUListElement | null>(null);

  const handleHeight = () => {
    if (!contentRef.current) {
      setMaxHeight(0);
      return;
    }
    setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0);
  };

  useEffect(() => {
    if (animation) requestAnimationFrame(handleHeight);
  }, [isOpen, animation]);

  return animation
    ? isAnimating && (
        <ul className={cn('animate', className)} style={{ maxHeight }} ref={contentRef}>
          {children}
        </ul>
      )
    : isOpen && <ul className={cn(className)}>{children}</ul>;
}
