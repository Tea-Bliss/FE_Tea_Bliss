import TeaCard from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard';
import styles from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCardList.module.scss';
import classNames from 'classnames/bind';
import TeaType from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

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

export default function TeaCardList() {
  return (
    <section>
      <ul className={cn('cardList')}>
        {mockDatas.map((data) => {
          return <TeaCard key={data.id} data={data} />;
        })}
      </ul>
    </section>
  );
}
