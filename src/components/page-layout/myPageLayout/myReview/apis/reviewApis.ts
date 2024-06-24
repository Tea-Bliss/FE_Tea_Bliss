import axiosInstance from '@/apis/axiosInstance';

export const getMyReviews = () => {
  return axiosInstance.get('review/my-reviews');
};

export const postReview = (data: any) => {
  return axiosInstance.post('review', data);
};

export const putReview = (data: any, reviewId: number) => {
  return axiosInstance.put(`review/${reviewId}`, data);
};

export const getMyPurchaseDatas = () => {
  return axiosInstance.get('/payment');
};
