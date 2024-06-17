export const seasonNAV = [{ name: '봄' }, { name: '여름' }, { name: '가을' }, { name: '겨울' }] as const;

export const caffeineNAV = [{ name: '카페인' }, { name: '디카페인' }] as const;

export const FILTER = [
  { ko: '추천순', english: 'recommend', key: 1 },
  { ko: '판매순', english: 'sale', key: 2 },
  { ko: '높은 가격순', english: 'topcost', key: 3 },
  { ko: '낮은 가격순', english: 'lowcost', key: 4 },
];

export const LIMIT = 8;
