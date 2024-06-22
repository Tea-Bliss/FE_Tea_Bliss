export interface FinishedTeaType {
  id: number;
  name: string;
  nameEng: string;
  image?: string | null;
  price: number;
  season?: 'spring' | 'summer' | 'autumn' | 'winter';
  caffeine?: boolean;
  category?: 'Black' | 'Green' | 'Oolong' | 'Herbal' | 'Pu Erh' | 'Chai' | 'White' | 'Rooibos' | 'Decaf';
  status?: '판매중' | '품절';
  stock?: number;
  ingredient?: { name?: string; description?: string }[];
}

export interface PostFinishedTeasType {
  price: number;
  category?: 'Black' | 'Green' | 'Oolong' | 'Herbal' | 'Pu Erh' | 'Chai' | 'White' | 'Rooibos' | 'Decaf';
  review?: 0;
  sale?: 0;
  rating?: 0;
  rate?: 0;
  season?: 'spring' | 'summer' | 'autumn' | 'winter';
  name?: string;
  nameEng?: string;
  caffeine?: boolean;
  ingredient?: number[];
  description?: string;
  img?: string | null;
  inventory: number;
  saleStatus?: '판매중' | '품절';
  flavor?: (1 | 2 | 3 | 4 | 5 | 6)[];
}

export interface PatchFinishedTeasType {
  price: number;
  category?: 'Black' | 'Green' | 'Oolong' | 'Herbal' | 'Pu Erh' | 'Chai' | 'White' | 'Rooibos' | 'Decaf';
  season?: 'spring' | 'summer' | 'autumn' | 'winter';
  name?: string;
  nameEng?: string;
  caffeine?: boolean;
  ingredient?: number[];
  description?: string;
  img?: string | null;
  inventory: number;
  saleStatus?: '판매중' | '품절';
  flavor?: (1 | 2 | 3 | 4 | 5 | 6)[];
}

export interface LooseLeafTeaType {
  id: number;
  category?: 'Black' | 'Green' | 'Oolong' | 'Herbal' | 'Pu Erh' | 'Chai' | 'White' | 'Rooibos' | 'Decaf';
  name: string;
  nameEng: string;
  sale?: number;
  inventory?: number;
  saleStatus?: '판매중' | '품절';
  flavors?: {
    name: '단맛' | '신맛' | '꽃향' | '과일향' | '매운맛' | '쓴맛';
    nameEng: 'Sweet' | 'Sour' | 'Floral' | 'Fruity' | 'Spicy' | 'Bitter';
  }[];
  explanation?: string;
  photo?: string | null;
}

export interface PostOrPutLooseLeafTeaType {
  category?: 'Black' | 'Green' | 'Oolong' | 'Herbal' | 'Pu Erh' | 'Chai' | 'White' | 'Rooibos' | 'Decaf';
  name: string;
  nameEng: string;
  sale?: number;
  inventory?: number;
  saleStatus?: '판매중' | '품절';
  flavor?: string;
  explanation?: string;
  photo?: string | null;
}
