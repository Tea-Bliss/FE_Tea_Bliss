type UserType = '일반회원' | '관리자';

export default interface User {
  id: number;
  nickName: string;
  email: string;
  userType: UserType;
  createdAt: string;
  reviewCount: number;
  purchaseAmount: number;
}
