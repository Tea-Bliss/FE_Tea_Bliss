'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { useGetLooseLeafTeas } from '@/components/page-layout/myBlendingLayout/hooks/useGetLooseLeafTeas';
import { FlavorTypeEng, LooseLeafTeaType } from '@/components/page-layout/myBlendingLayout/types/teaType';

interface myBlendingValues {
  teaList: LooseLeafTeaType[];
  filter: FlavorTypeEng;
  setFilter: Dispatch<SetStateAction<FlavorTypeEng>>;
  selectedTeas: LooseLeafTeaType[];
  setSelectedTeas: Dispatch<SetStateAction<LooseLeafTeaType[]>>;
  myTeaName: string;
  setMyTeaName: Dispatch<SetStateAction<string>>;
}

const defaultValue: myBlendingValues = {
  teaList: [],
  filter: 'Floral',
  setFilter: () => {},
  selectedTeas: [],
  setSelectedTeas: () => {},
  myTeaName: '',
  setMyTeaName: () => {},
};

const myBlendingContext = createContext(defaultValue);

export function MyBlendingProvider({ children }: { children: ReactNode }) {
  const [teaList, setTeaList] = useState<LooseLeafTeaType[]>([]);
  const [filter, setFilter] = useState<FlavorTypeEng>('Floral');
  const [selectedTeas, setSelectedTeas] = useState<LooseLeafTeaType[]>([]);
  const [myTeaName, setMyTeaName] = useState('');

  const { data } = useGetLooseLeafTeas();

  useEffect(() => {
    setTeaList(
      data?.data.data.filter((tea: LooseLeafTeaType) => tea.flavors?.some((flavor) => flavor.nameEng === filter))
    );
  }, [filter, data]);

  const value = useMemo(
    () => ({
      teaList,
      filter,
      setFilter,
      selectedTeas,
      setSelectedTeas,
      myTeaName,
      setMyTeaName,
    }),
    [teaList, filter, selectedTeas, myTeaName]
  );

  return <myBlendingContext.Provider value={value}>{children}</myBlendingContext.Provider>;
}

export function useMyBlendingContext() {
  const context = useContext(myBlendingContext);

  if (!context) {
    throw new Error('useMyBlendingContext must be used within a MyBlendingProvider');
  }

  return context;
}
