import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface AccordionContextProps {
  expandedValues?: string[];
  setExpandedValues?: Dispatch<SetStateAction<string[]>>;
}

export const AccordionContext = createContext<AccordionContextProps>({});

export default function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('(!) Accordion 컨텍스트를 호출할 수 없는 범위입니다.');
  }
  return context;
}
