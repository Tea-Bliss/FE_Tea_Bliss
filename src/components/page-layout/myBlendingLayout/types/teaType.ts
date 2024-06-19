export type CategoryType =
  | '홍차'
  | '푸에르 티'
  | '차이 티'
  | '우롱차'
  | '백차'
  | '녹차'
  | '허브 티'
  | '루이보스 티'
  | '디카페인';

export type CategoryTypeEng =
  | 'Black'
  | 'Pu Erh'
  | 'White'
  | 'Green'
  | 'Herbal'
  | 'Decaf'
  | 'Chai'
  | 'Oolong'
  | 'Rooibos';

export interface LooseLeafTeaType {
  id: number;
  category: CategoryTypeEng;
  name: string;
  nameEng: string;
  sale: number;
  inventory: number;
  saleStatus: '판매중' | '품절' | null;
  flavors: { name: FlavorType; nameEng: FlavorTypeEng }[];
  explanation: string;
  photo: string | null;
}

export type FlavorType = '단맛' | '쓴맛' | '프루티(과일향)' | '플로럴(꽃향)' | '신맛' | '매운맛';
export type FlavorTypeEng = 'Sweet' | 'Bitter' | 'Floral' | 'Fruity' | 'Sour' | 'Spicy';
