import openToast from '@/components/common/Toast/features/openToast';
import { supabase } from '@/lib/supabase';

const getPathFromPublicUrl = (publicUrl: string) => {
  const url = new URL(publicUrl);
  return url.pathname.replace(/^\/storage\/v1\/object\/public\//, '');
};

export const deleteImage = async (publicUrl: string) => {
  const filePath = getPathFromPublicUrl(publicUrl);

  const { error } = await supabase.storage.from('images').remove([filePath]);

  if (error) {
    openToast('error', '이미지 처리 중 문제가 발생했습니다.');
    return false;
  }

  return true;
};

export const uploadImage = async (imageFile: File) => {
  const fileExt = imageFile.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const { data, error } = await supabase.storage.from('images').upload(fileName, imageFile);

  if (error) {
    openToast('error', '이미지 업로드에 실패하였습니다.');
    return false;
  }

  return supabase.storage.from('images').getPublicUrl(`${data!.path}`).data.publicUrl;
};
