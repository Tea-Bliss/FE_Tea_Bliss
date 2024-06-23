'use client';
import { PropsWithChildren, useState } from 'react';

import { AccordionContext } from '@/components/common/Accordion/contexts/AccordionContext';

interface AccordionProps extends PropsWithChildren {
  className: string;
}

export default function Accordion({ children, className }: AccordionProps) {
  const [expandedValues, setExpandedValues] = useState<string[]>([]);

  const contextValue = {
    expandedValues,
    setExpandedValues,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}
