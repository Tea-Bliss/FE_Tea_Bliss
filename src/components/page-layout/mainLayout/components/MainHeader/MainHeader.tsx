import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/page-layout/mainLayout/components/MainHeader/MainHeader.module.scss';
import ROUTE from '@/constants/route';
import RightArrow from '@/icons/rightArrow.svg';
import Oval from '@/images/Ellipse 10.jpg';

const cn = classNames.bind(styles);

export default function MainHeader() {
  return (
    <div className={cn('layout')}>
      <div className={cn('container-left')}>
        <div className={cn('left')}>
          <h2 className={cn('title')}>
            Let&apos;s <br /> Blending!
          </h2>
          <p className={cn('sub-title')}>
            Make your
            <br />
            own tea
          </p>
        </div>
        <Link className={cn('blendingBtn')} href={ROUTE.MY_BLENDING}>
          나만의 티 만들기
          <RightArrow fill="#FCF8EF" />
        </Link>
      </div>
      <div className={cn('container-middle')}>
        <Image className={cn('oval')} src={Oval} alt="타원형 메인 이미지 " />
      </div>
      <div className={cn('container-right')}>
        <div className={cn('right')}>
          <div className={cn('description')}>
            <p className={cn('description-en')}>
              For you.
              <br />
              Even if you do it for 10 minutes a day
            </p>
            <p className={cn('description-ko')}>
              당신을 위해
              <br />
              하루에 단 10분만 투자하세요.
            </p>
          </div>
          <p className={cn('sub-title')}>
            Do a survey and
            <br />
            get
            <br />
            recommendations
          </p>
        </div>
        <Link className={cn('recommendBtn')} href={ROUTE.SURVEY}>
          설문참여하고 추천받기
          <RightArrow fill="#000000" />
        </Link>
      </div>
    </div>
  );
}
