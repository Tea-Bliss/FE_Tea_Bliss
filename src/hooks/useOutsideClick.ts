'use client';

import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void, toggleRef?: RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (toggleRef?.current && toggleRef.current.contains(event.target as Node)) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback, toggleRef]);
};

export default useOutsideClick;
