import axios from 'axios';

import { useRouter } from 'next/navigation';

import ROUTE from '@/constants/route';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       config.headers.Authorization = token;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // 응답이 성공적이면 그대로 응답 반환
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // re-issue 엔드포인트를 호출하여 새로운 토큰을 가져옴
//         const response = await axiosInstance.post('/api/member/re-issue');

//         if (response.status === 200) {
//           const newToken = response.headers.authorization;
//           localStorage.removeItem('token');
//           localStorage.setItem('token', newToken);

//           // 새로운 토큰으로 원래의 요청을 다시 시도
//           return axiosInstance(originalRequest);
//         }
//       } catch (err) {
//         // 오류 처리 (예: 로그인 페이지로 리디렉션)
//         const router = useRouter();
//         router.push(ROUTE.HOME);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
