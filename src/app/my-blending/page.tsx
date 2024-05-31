import styles from '@/app/my-blending/MyBlendingPage.module.scss';
import classNames from 'classnames/bind';
import mockImage from '/images/vanila.jpeg';

const cn = classNames.bind(styles);

const mockData = {
  name: '푸에르초레인지(pu-erh chorange)',
  description: '풍성한 초콜릿과 달콤한 오렌지, 푸에르를 곁들인 축제 간식입니다.',
  sort: 'Pu Erh',
  taste: ['단맛', '프루티', '쓴맛'],
  imageSource: mockImage.src,
};

const mockDatas = Array.from({ length: 10 }, (_, i) => ({
  ...mockData,
  id: i + 1,
}));

export default function MyBlendingPage() {
  return (
    <main>
      {/** 분류 섹션 */}
      <div>
        <ol></ol>
        <ol></ol>
      </div>
      {/** 카드리스트 섹션 */}
      <div></div>
      {/** 조합 섹션 */}
      <div></div>
    </main>
  );
}
