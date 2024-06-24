import openToast from '@/components/common/Toast/features/openToast';
import { supabase } from '@/lib/supabase';

const getFileNameFromPublicUrl = (publicUrl: string) => {
  const url = new URL(publicUrl);
  const parts = url.pathname.split('/');
  return parts[parts.length - 1];
};

export const deleteImage = async (publicUrl: string) => {
  const fileName = getFileNameFromPublicUrl(publicUrl);

  const { data, error } = await supabase.storage.from('images').remove([fileName]);

  console.log(data);

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

export const updateImage = async (publicUrl: string, imageFile: File) => {
  const replaceFileName = getFileNameFromPublicUrl(publicUrl);

  const { data, error } = await supabase.storage.from('images').upload(replaceFileName, imageFile, {
    upsert: true,
  });

  if (error) {
    openToast('error', '이미지 업로드에 실패하였습니다.');
    return false;
  }

  return supabase.storage.from('images').getPublicUrl(`${data!.path}`).data.publicUrl;
};
