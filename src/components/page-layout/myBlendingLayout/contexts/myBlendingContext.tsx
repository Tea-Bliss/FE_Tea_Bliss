'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react';
import TeaType from '../types/teaType';

type Filter = {
  type: TeaType['sort'][];
  taste: TeaType['taste'];
};

interface myBlendingValues {
  teaList: TeaType[];
  setFilter: Dispatch<SetStateAction<Filter>>;
  selectedTeas: TeaType[];
  setSelectedTeas: Dispatch<SetStateAction<TeaType[]>>;
  myTeaName: string;
  setMyTeaName: Dispatch<SetStateAction<string>>;
}

const defaultValue: myBlendingValues = {
  teaList: [],
  setFilter: () => {},
  selectedTeas: [],
  setSelectedTeas: () => {},
  myTeaName: '',
  setMyTeaName: () => {},
};

const myBlendingContext = createContext(defaultValue);

export function MyBlendingProvider({ children }: { children: ReactNode }) {
  const [teaList, setTeaList] = useState<TeaType[]>([]);
  const [filter, setFilter] = useState<Filter>({ type: [], taste: [] });
  const [selectedTeas, setSelectedTeas] = useState<TeaType[]>([]);
  const [myTeaName, setMyTeaName] = useState('');

  useEffect(() => {
    const newList = teaList.filter((tea) => {
      return filter.type.includes(tea.sort) && filter.taste.every((taste) => tea.taste.includes(taste));
    });

    setTeaList(newList);
  }, [filter]);

  const value = useMemo(
    () => ({
      teaList,
      setFilter,
      selectedTeas,
      setSelectedTeas,
      myTeaName,
      setMyTeaName,
    }),
    []
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
