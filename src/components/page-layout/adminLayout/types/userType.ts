type Roll = '일반회원' | '관리자';

export default interface User {
  id: number;
  nickname: string;
  email: string;
  roll: Roll;
  createdAt: string;
  reviewCount: number;
  purchaseAmount: number;
}
