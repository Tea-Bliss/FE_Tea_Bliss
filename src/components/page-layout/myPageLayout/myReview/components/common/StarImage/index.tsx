import Image from 'next/image';

export default function StarImage({ status, width }: { status: 'full' | 'half' | 'empty'; width: number }) {
  const src =
    status === 'full' ? '/icons/fullStar.svg' : status === 'half' ? '/icons/halfStar.svg' : '/icons/emptyStar.svg';
  return <Image src={src} alt={status} width={width} height={width} />;
}
