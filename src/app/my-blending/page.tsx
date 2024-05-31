import TeaCardList from '@/components/myBlending/TeaCardList';
import styles from '@/app/my-blending/MyBlendingPage.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

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
        <TeaCardList />
      </section>
      {/** 조합 섹션 */}
      <section></section>
    </main>
  );
}
