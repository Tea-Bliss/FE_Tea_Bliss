export interface FinishedTeaType {
  id: number;
  name: string;
  nameEng: string;
  image?: string;
  price: number;
  season?: '봄' | '여름' | '가을' | '겨울';
  caffeine?: boolean;
  category?: '홍차' | '녹차' | '우롱차' | '허브 티' | '푸에르 티' | '차이 티' | '백차' | '루이보스 티' | '디카페인';
  status?: '판매중' | '품절' | '숨김';
  stock?: number;
  ingredient?: { name?: string; description?: string }[];
}

export interface PostFinishedTeasType {
  price?: number;
  category?: '홍차' | '녹차' | '우롱차' | '허브 티' | '푸에르 티' | '차이 티' | '백차' | '루이보스 티' | '디카페인';
  review?: 0;
  sale?: 0;
  rating?: 0;
  rate?: 0;
  season?: '봄' | '여름' | '가을' | '겨울';
  name?: string;
  nameEng?: string;
  caffeine?: boolean;
  ingredient?: number[];
  description?: string;
  img?: string | null;
  inventory?: number;
  saleStatus?: '판매중' | '품절';
  flavor?: (1 | 2 | 3 | 4 | 5 | 6)[];
}

export interface PatchFinishedTeasType {
  price?: number;
  category?: '홍차' | '녹차' | '우롱차' | '허브 티' | '푸에르 티' | '차이 티' | '백차' | '루이보스 티' | '디카페인';
  season?: '봄' | '여름' | '가을' | '겨울';
  name?: string;
  nameEng?: string;
  caffeine?: boolean;
  ingredient?: number[];
  description?: string;
  img?: string | null;
  inventory?: number;
  saleStatus?: '판매중' | '품절';
  flavor?: (1 | 2 | 3 | 4 | 5 | 6)[];
}

export interface LooseLeafTeaType {
  id: number;
  category?: '홍차' | '녹차' | '우롱차' | '허브 티' | '푸에르 티' | '차이 티' | '백차' | '루이보스 티' | '디카페인';
  name: string;
  nameEng: string;
  sale?: number;
  inventory?: number;
  saleStatus?: '판매중' | '품절';
  flavor?: string;
  explanation?: string;
  photo?: string | null;
}

export interface PostOrPutLooseLeafTeaType {
  category?: '홍차' | '녹차' | '우롱차' | '허브 티' | '푸에르 티' | '차이 티' | '백차' | '루이보스 티' | '디카페인';
  name: string;
  nameEng: string;
  sale?: number;
  inventory?: number;
  saleStatus?: '판매중' | '품절';
  flavor?: string;
  explanation?: string;
  photo?: string | null;
}
