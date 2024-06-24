import axios from 'axios';

import { useRouter } from 'next/navigation';

import ROUTE from '@/constants/route';

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

export const axiosAnotherInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // 응답이 성공적이면 그대로 응답 반환
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        // re-issue 엔드포인트를 호출하여 새로운 토큰을 가져옴
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}member/re-issue`, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `${localStorage.getItem('token')}`,
          },
        });

        if (response.status === 200) {
          const newToken = response.headers.authorization;
          localStorage.setItem('token', newToken);
        }
      } catch (err) {
        const router = useRouter();
        router.push(ROUTE.HOME);
      }
    }

    return Promise.reject(error);
  }
);
