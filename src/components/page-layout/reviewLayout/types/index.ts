import { StaticImageData } from 'next/image';

export interface CardData {
  img: StaticImageData;
  id: number;
  title: string;
  contents: string;
  likes: number;
  createDt: '2023-01-01T10:00:00';
}
