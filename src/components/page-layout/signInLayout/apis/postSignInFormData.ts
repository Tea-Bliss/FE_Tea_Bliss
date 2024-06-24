import { axiosInstance } from '@/apis/axiosInstance';
import SignInFormData from '@/components/page-layout/signInLayout/types/signInFormData';

const postSignInForm = async (data: SignInFormData) => {
  const { email, password } = data;
  const response = await axiosInstance.post(
    'member/sign-in',
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return response;
};

export default postSignInForm;
