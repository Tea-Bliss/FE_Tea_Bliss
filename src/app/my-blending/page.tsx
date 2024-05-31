import styles from '@/app/my-blending/MyBlendingPage.module.scss';
import classNames from 'classnames/bind';
import TeaCard from '@/components/myBlending/TeaCard';

const cn = classNames.bind(styles);

type Taste = '신맛' | '플로럴' | '프루티' | '매운맛' | '쓴맛';

type TeaSort = 'Black' | 'Pu Erh' | 'Flavors' | 'Chai' | 'Oolong' | 'White' | 'Green' | 'Herbal' | 'Rooibos' | 'Decaf';

const mockData = {
  id: 0,
  name: '푸에르초레인지(pu-erh chorange)',
  description: '풍성한 초콜릿과 달콤한 오렌지, 푸에르를 곁들인 축제 간식입니다.',
  sort: 'Pu Erh' as TeaSort,
  taste: ['단맛', '프루티', '쓴맛'] as Taste[],
  imageSource: '/images/my-blending/vanila.png',
};

const mockDatas = Array.from({ length: 10 }, (_, i) => ({
  ...mockData,
  id: i + 1,
}));

export default function MyBlendingPage() {
  return (
    <main>
      {/** 분류 섹션 */}
      <section>
        <ol></ol>
        <ol></ol>
      </section>
      {/** 카드리스트 섹션 */}
      <section>
        {mockDatas.map((data) => {
          return <TeaCard key={data.id} data={data} />;
        })}
      </section>
      {/** 조합 섹션 */}
      <section></section>
    </main>
  );
}
