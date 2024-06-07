'use client';
import { HTMLAttributes, ReactNode, useState } from 'react';

import { DropDownContext } from '@/components/common/DropDown/contexts/DropDownContext';

interface DropDownProps {
  children: ReactNode;
  defaultTitle: string;
  className: string;
  query?: string;
  animation?: boolean;
}

export default function DropDown({ children, defaultTitle, className, query, animation = false }: DropDownProps) {
  const [selectedItem, setSelectedItem] = useState<string>(defaultTitle);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;

  const handleDropDown = (animation: boolean) => {
    setIsOpen((prev) => !prev);
    if (animation) {
      if (isAnimating) {
        timeout = setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      } else {
        setIsAnimating(true);
      }
    }
    return () => clearTimeout(timeout);
  };

  const contextValue = {
    query,
    animation,
    selectedItem,
    setSelectedItem,
    isOpen,
    setIsOpen,
    isAnimating,
    setIsAnimating,
    handleDropDown,
  };

  return (
    <DropDownContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </DropDownContext.Provider>
  );
}
