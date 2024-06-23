import { StaticImageData } from 'next/image';

export default interface FinishedItem {
  category: string;
  review: number;
  sale: number;
  rating: number;
  rate: number;
  season: string;
  createat: Date;
  href: string;
  img: StaticImageData;
  id: number;
  price: number;
  caffeine: boolean;
  name: string;
  nameEng: string;
  lastPage: boolean;
}
