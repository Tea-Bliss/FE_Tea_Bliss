import { usePathname, useRouter } from 'next/navigation';

import useDropDownContext from '@/components/common/DropDown/contexts/DropDownContext';

interface DropDownItemProps {
  value: string;
  className: string;
  title: string;
}

export default function DropDownItem({ value, className, title }: DropDownItemProps) {
  const { query, handleDropDown, setSelectedItem, animation } = useDropDownContext();
  const path = usePathname();
  const router = useRouter();

  const handleClickItem = () => {
    if (query) router.push(`${path}?${query}=${value}`);
    setSelectedItem(title);
    handleDropDown(animation);
  };

  return (
    <li className={className}>
      <button onClick={() => handleClickItem()}>{title}</button>
    </li>
  );
}
