import TeaCardList from '@/components/myBlending/TeaCardList';
import styles from '@/app/my-blending/MyBlendingPage.module.scss';
import classNames from 'classnames/bind';
import FixedBottomBar from '@/components/myBlending/FixedBottomBar';

const cn = classNames.bind(styles);

export default function MyBlendingPage() {
  return (
    <>
      <main className={cn('main')}>
        {/** 분류 라벨*/}
        <section>
          <h1>나만의 블렌딩 티 만들기</h1>
          <div>
            <p>종류</p>
            <ol></ol>
          </div>
          <div>
            <p>맛</p>
            <ol></ol>
          </div>
        </section>
        {/** 카드리스트 */}
        <section>
          <TeaCardList />
        </section>
      </main>

      {/** 차 블렌딩 조합식 */}
      <footer>
        <FixedBottomBar />
      </footer>
    </>
  );
}
