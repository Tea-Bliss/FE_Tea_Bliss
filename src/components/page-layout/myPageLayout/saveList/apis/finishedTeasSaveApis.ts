import { axiosSubInstance } from '@/apis/axiosInstance';

export const getFinishedTeasSave = ({
  nickname,
  productId = 4,
  limit = 30,
}: {
  nickname: '진찬용' | '코드잇';
  productId?: number | string;
  limit?: number;
}) => {
  return axiosSubInstance.get(`like?owner=${nickname}&cursor=${productId}&limit=${limit}`);
};

export const postFinishedTeasSave = ({ nickname, productId }: { nickname: '진찬용' | '코드잇'; productId: number }) => {
  return axiosSubInstance.post(
    `https://tea-bliss-node-api.vercel.app/api/like?owner=${nickname}?productId=${productId}`
  );
};

export const deleteFinishedTeasSave = ({
  nickname,
  productId,
}: {
  nickname: '진찬용' | '코드잇';
  productId: number;
}) => {
  return axiosSubInstance.delete(
    `https://tea-bliss-node-api.vercel.app/api/like?owner=${nickname}?productId=${productId}`
  );
};
