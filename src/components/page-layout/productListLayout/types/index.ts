import { StaticImageData } from 'next/image';

export default interface FinishedItem {
  title: string;
  cost: number;
  category: string;
  review: number;
  sale: number;
  rating: number;
  rate: number;
  season: string;
  createat: Date;
  isLastPage: false;
  href: string;
  img: StaticImageData;
}
