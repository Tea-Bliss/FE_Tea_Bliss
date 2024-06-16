import useDropDownContext from '@/components/common/DropDown/contexts/DropDownContext';
import Chevron from '@/icons/chevron.svg';

interface DropDownTriggerProps {
  className: string;
}
export default function DropDownTrigger({ className }: DropDownTriggerProps) {
  const { isOpen, selectedItem, animation, handleDropDown } = useDropDownContext();

  return (
    <button className={className} onClick={() => handleDropDown(animation)}>
      {selectedItem}
      <Chevron width={24} height={24} transform={isOpen ? 'rotate(180)' : 'rotate(0)'} />
    </button>
  );
}
