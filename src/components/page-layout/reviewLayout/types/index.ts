import { StaticImageData } from 'next/image';

export interface CardData {
  teaImg: StaticImageData;
  id: number;
  title: string;
  contents: string;
  likes: number;
  createDt: '2023-01-01T10:00:00';
}
