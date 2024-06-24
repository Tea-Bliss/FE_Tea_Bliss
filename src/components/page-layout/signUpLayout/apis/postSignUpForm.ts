import { axiosInstance } from '@/apis/axiosInstance';
import SignUpFormData from '@/components/page-layout/signUpLayout/types/signUpFormData';

const postSignUpForm = async (data: SignUpFormData) => {
  const { email, nickname, password } = data;
  const response = await axiosInstance.post('member/sign-up', {
    email,
    nickname,
    password,
  });
  return response;
};

export default postSignUpForm;
