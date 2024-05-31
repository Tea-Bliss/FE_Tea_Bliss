import ROUTE from '@/constants/route';

const MENU_ITEM = [
  { id: 1, label: '제품', href: ROUTE.PRODUCT },
  { id: 2, label: '나만의 티 만들기', href: ROUTE.MY_BLENDING },
  { id: 3, label: '리뷰', href: ROUTE.REVIEWS },
] as const;

export default MENU_ITEM;
