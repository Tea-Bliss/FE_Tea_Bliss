import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface DropDownContextProps {
  query?: string;
  animation: boolean;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  handleDropDown: (animation: boolean) => void;
}

export const DropDownContext = createContext<DropDownContextProps>({
  query: '',
  animation: false,
  selectedItem: '',
  setSelectedItem: () => '',
  isOpen: false,
  setIsOpen: () => false,
  isAnimating: false,
  setIsAnimating: () => false,
  handleDropDown: () => {},
});

export default function useDropDownContext() {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error('(!) DropDown 컨텍스트를 호출할 수 없는 범위입니다.');
  }
  return context;
}
