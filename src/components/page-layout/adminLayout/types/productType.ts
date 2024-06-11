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
  category: '홍차' | '녹차' | '우롱차' | '허브 티';
  status: '판매중' | '품절' | '숨김';
  stock: number;
  ingredient: { name: string; description: string }[];
}
