import React from 'react';
import styles from './GoalCard.module.css';
import { GoalCardProps } from 'types/cardTypes';

export const GoalCard: React.FC<GoalCardProps> = (props) => {
  const { pic, onChooseClick, option } = props;

  const handleClick = () => {
    onChooseClick(option);
  };

  return (
    <div className={`${styles[pic]} ${styles.thumb}`} onClick={handleClick}>
      <p className={styles.text}>{option}</p>
    </div>
  );
};
