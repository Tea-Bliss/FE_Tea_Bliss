export interface FinishedTeaType {
  id: number;
  ko_name: string;
  en_name: string;
  image: string;
  description: string;
  flavor: string[];
  price: number;
  season: '봄' | '여름' | '가을' | '겨울';
  caffeine: boolean;
  category: '홍차' | '녹차' | '우롱차' | '허브 티' | '푸에르 티' | '차이 티' | '백차' | '루이보스 티' | '디카페인';
  status: '판매중' | '품절' | '숨김';
  stock: number;
  ingredient: { name: string; description: string }[];
}
