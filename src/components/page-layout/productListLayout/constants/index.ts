export const NAV = [
  { name: '카테고리1', href: '/' },
  { name: '카테고리2', href: '/' },
  { name: '카테고리3', href: '/' },
] as const;

export const FILTER = [
  { ko: '추천순', english: 'recommend', key: 1 },
  { ko: '판매순', english: 'sale', key: 2 },
  { ko: '높은 가격순', english: 'topcost', key: 3 },
  { ko: '낮은 가격순', english: 'lowcost', key: 4 },
];

export const LIMIT = 8;
