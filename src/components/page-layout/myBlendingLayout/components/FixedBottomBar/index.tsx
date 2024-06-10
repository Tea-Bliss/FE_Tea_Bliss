'use client';

import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/myBlendingLayout/components/FixedBottomBar/FixedBottomBar.module.scss';

const cn = classNames.bind(styles);

export default function FixedBottomBar() {
  return (
    <footer className={cn('bottomBar')}>
      <div className={cn('dragArea')}>
        <hr className={cn('dragIcon')} />
      </div>

      <div className={cn('firstArea')}>{/** 티 조합 컴포넌트 추가 예정(스타일 미정으로 공란) */}</div>

      <div className={cn('secondArea')}>
        <div className={cn('teaName')}>
          <label className={cn('labelName')}>{'차 이름을 지어주세요 :)'}</label>
          <input className={cn('teaNameInput')} placeholder="차 이름을 지어주세요" />
        </div>
        <div className={cn('submit')}>
          <p className={cn('message')}>최소 2종류의 차가 선택되어야 합니다.</p>
          <Button shape="square" color="red" className={cn('submitButton')}>
            나만의 티 만들기
          </Button>
        </div>
      </div>
    </footer>
  );
}
