'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react';

import TeaType from '../types/teaType';

type Filter = {
  type: TeaType['sort'][];
  taste: TeaType['taste'];
};

interface myBlendingValues {
  teaList: TeaType[];
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  selectedTeas: TeaType[];
  setSelectedTeas: Dispatch<SetStateAction<TeaType[]>>;
  myTeaName: string;
  setMyTeaName: Dispatch<SetStateAction<string>>;
}

const defaultValue: myBlendingValues = {
  teaList: [],
  filter: { type: [], taste: [] },
  setFilter: () => {},
  selectedTeas: [],
  setSelectedTeas: () => {},
  myTeaName: '',
  setMyTeaName: () => {},
};

const mockData = {
  id: 0,
  name: '푸에르초레인지(pu-erh chorange)',
  description: '풍성한 초콜릿과 달콤한 오렌지, 푸에르를 곁들인 축제 간식입니다.',
  sort: 'Pu Erh',
  taste: ['단맛', '프루티', '쓴맛'],
  imageSource: '/images/my-blending/vanila.png',
} as TeaType;

const mockDatas = Array.from({ length: 11 }, (_, i) => ({
  ...mockData,
  id: i + 1,
}));

const myBlendingContext = createContext(defaultValue);

export function MyBlendingProvider({ children }: { children: ReactNode }) {
  const [teaList, setTeaList] = useState<TeaType[]>(mockDatas);
  const [filter, setFilter] = useState<Filter>({ type: [], taste: [] });
  const [selectedTeas, setSelectedTeas] = useState<TeaType[]>([]);
  const [myTeaName, setMyTeaName] = useState('');

  useEffect(() => {
    if (!filter.type.length && !filter.taste.length) return setTeaList(mockDatas);

    if (!filter.type.length)
      return setTeaList(mockDatas.filter((tea) => filter.taste.every((taste) => tea.taste.includes(taste))));

    if (!filter.taste.length) return setTeaList(mockDatas.filter((tea) => filter.type.includes(tea.sort)));

    setTeaList(
      mockDatas.filter(
        (tea) => filter.type.includes(tea.sort) && filter.taste.every((taste) => tea.taste.includes(taste))
      )
    );
  }, [filter]);

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
