import ROUTE from '@/constants/route';

export const seasonNAV = [
  { name: '봄', href: `${ROUTE.PRODUCT_LIST}?page=1&filter=season&season=spring` },
  { name: '여름', href: `${ROUTE.PRODUCT_LIST}?page=1&filter=season&season=summer` },
  { name: '가을', href: `${ROUTE.PRODUCT_LIST}?page=1&filter=season&season=autumn` },
  { name: '겨울', href: `${ROUTE.PRODUCT_LIST}?page=1&filter=season&season=winter` },
] as const;

export const caffeineNAV = [
  { name: '카페인', href: `${ROUTE.PRODUCT_LIST}?page=1&filter=caffeine&caffeine=true` },
  { name: '디카페인', href: `${ROUTE.PRODUCT_LIST}?page=1&filter=caffeine&caffeine=false` },
] as const;

export const FILTER = [
  { ko: '추천순', english: 'recommend', key: 1 },
  { ko: '판매순', english: 'sale', key: 2 },
  { ko: '높은 가격순', english: 'topcost', key: 3 },
  { ko: '낮은 가격순', english: 'lowcost', key: 4 },
];

export const LIMIT = 8;
