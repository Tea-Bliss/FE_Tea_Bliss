import { LooseLeafTeaType } from '@/components/page-layout/adminLayout/types/productType';
import flavors from '@/components/page-layout/myBlendingLayout/constants/flavors';

const processIngredientData = (data: LooseLeafTeaType) => {
  if (!data) return;

  const newData: any = { ...data };

  newData.flavor = newData?.flavors.map((flavor: any) => {
    return flavors.find((taste) => taste.nameEng === flavor.nameEng)?.number;
  });

  delete newData.flavors;

  return newData;
};

export default processIngredientData;
