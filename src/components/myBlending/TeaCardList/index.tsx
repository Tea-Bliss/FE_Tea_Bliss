import TeaCard from '@/components/myBlending/TeaCardList/TeaCard';
import styles from '@/components/myBlending/TeaCardList/TeaCardList.module.scss';
import classNames from 'classnames/bind';

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

export default function TeaCardList() {
  return (
    <ol className={cn('cardList')}>
      {mockDatas.map((data) => {
        return <TeaCard key={data.id} data={data} />;
      })}
    </ol>
  );
}
