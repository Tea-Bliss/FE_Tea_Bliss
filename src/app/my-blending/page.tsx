import styles from '@/app/my-blending/MyBlendingPage.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

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
