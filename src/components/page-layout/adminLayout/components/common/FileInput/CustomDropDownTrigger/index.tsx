import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react';

import useDropDownContext from '@/components/common/DropDown/contexts/DropDownContext';

interface CustomDropDownTriggerProps {
  className?: string;
  children?: ReactNode;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

export default function CustomDropDownTrigger({
  className,
  children,
  setIsOpen,
  disabled,
}: CustomDropDownTriggerProps) {
  const { isOpen, animation, handleDropDown } = useDropDownContext();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!setIsOpen) return;

    setIsOpen(isOpen);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (buttonRef.current && !buttonRef.current.contains(target)) {
        handleDropDown(animation);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleDropDown, animation]);

  return (
    <button
      className={className}
      type="button"
      disabled={disabled}
      onClick={() => handleDropDown(animation)}
      ref={buttonRef}
    >
      {children}
    </button>
  );
}
