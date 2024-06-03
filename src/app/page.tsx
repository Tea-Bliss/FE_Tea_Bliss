import Card from '@/components/common/Card/Card';
import Img from '@/icons/다운로드.jpg';

export default function Home() {
  return (
    <>
      <main>메인페이지</main>
      <Card isMainPageCard href="/" img={Img} price={20000} review={3} scope={3.5} title="달빛이룸" />
    </>
  );
}
