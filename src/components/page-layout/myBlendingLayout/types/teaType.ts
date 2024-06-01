type Taste = '신맛' | '플로럴' | '프루티' | '매운맛' | '쓴맛';

type TeaSort = 'Black' | 'Pu Erh' | 'Flavors' | 'Chai' | 'Oolong' | 'White' | 'Green' | 'Herbal' | 'Rooibos' | 'Decaf';

export default interface TeaType {
  id: number;
  name: string;
  description: string;
  sort: TeaSort;
  taste: Taste[];
  imageSource: string;
}
