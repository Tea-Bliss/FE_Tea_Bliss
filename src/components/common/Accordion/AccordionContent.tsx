'use client';
import { PropsWithChildren, useId } from 'react';

import useAccordionContext from './contexts/AccordionContext';

interface AccordionContentProps extends PropsWithChildren {
  value?: string;
  className: string;
}

export default function AccordionContent({ children, value, className }: AccordionContentProps) {
  const elementId = useId();
  const contentValue = value ?? elementId;
  const { expandedValues } = useAccordionContext();

  return !expandedValues?.includes(contentValue) && <ul className={className}>{children}</ul>;
}
