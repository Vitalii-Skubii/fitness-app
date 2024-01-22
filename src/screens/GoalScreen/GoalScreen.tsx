import React, { FC } from 'react';
import styles from './GoalScreen.module.css';
import { GOALS } from 'constants/data';
import { GoalCard } from 'components/GoalCard';

interface IProps {
  onNext: (option: string) => void;
}

export const GoalScreen: FC<IProps> = ({ onNext }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>The Goal</h1>
      <p className={styles.text}>
        Focus on the health benefits you need.
        <br /> Balanced nutrition will let you achieve them
      </p>
      <h3 className={styles.subtitle}>What are your goals?</h3>
      <div className={styles.cardsWrapper}>
        {GOALS.map((item) => (
          <GoalCard
            key={item.pic}
            pic={item.pic}
            option={item.text}
            onChooseClick={onNext}
          />
        ))}
      </div>
    </div>
  );
};
