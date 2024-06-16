import classNames from 'classnames/bind';

import styles from '@/components/page-layout/productListLayout/ProductNav/CategoryNav/CategoryNav.module.scss';
import SideBar from '@/components/page-layout/productListLayout/ProductNav/SideBar/index';

import { caffeineNAV, seasonNAV } from '../../constants';

const cn = classNames.bind(styles);

export default function CategoryNav() {
  return (
    <SideBar.Root>
      <SideBar.Container>
        <SideBar.Title>계절</SideBar.Title>
        <SideBar.Content className={cn('button')}>
          {seasonNAV.map((Category) => (
            <button
              // onClick={() => setCategory(Category.name)}
              key={Category.name}
              // className={cn({ button: Category.name === category })}
            >
              {Category.name}
            </button>
          ))}
        </SideBar.Content>
      </SideBar.Container>
      <SideBar.Container>
        <SideBar.Title>계절</SideBar.Title>
        <SideBar.Content>
          {caffeineNAV.map((Category) => (
            <button
              // onClick={() => setCategory(Category.name)}
              key={Category.name}
              // className={cn({ button: Category.name === category })}
            >
              {Category.name}
            </button>
          ))}
        </SideBar.Content>
      </SideBar.Container>
    </SideBar.Root>
  );
}
