'use client';
import { PropsWithChildren, useId } from 'react';

import useAccordionContext from '@/components/common/Accordion/contexts/AccordionContext';
import Chevron from '@/icons/chevron.svg';

interface AccordionTriggerProps extends PropsWithChildren {
  value?: string;
  className: string;
}

export default function AccordionTrigger({ children, value, className }: AccordionTriggerProps) {
  const { expandedValues, setExpandedValues } = useAccordionContext();
  const elementId = useId();
  const triggerValue = value ?? elementId;

  const handleClickTrigger = () => {
    if (expandedValues?.includes(triggerValue)) {
      setExpandedValues?.((prevValues) => prevValues.filter((value) => value != triggerValue));
    } else {
      setExpandedValues?.((prev) => [...prev, triggerValue]);
    }
  };

  return (
    <button className={className} onClick={handleClickTrigger}>
      {children}
      <Chevron
        width={24}
        height={24}
        transform={expandedValues?.includes(triggerValue) ? 'rotate(0)' : 'rotate(180)'}
      />
    </button>
  );
}
