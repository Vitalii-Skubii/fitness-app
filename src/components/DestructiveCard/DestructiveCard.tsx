import React from 'react';
import styles from './DestructiveCard.module.css';
import { CardProps } from 'types/cardTypes';

export const DestructiveCard: React.FC<CardProps> = (props) => {
  const { pic, onChooseClick, option, state } = props;

  const marked = state.choices.includes(option);

  const handleClick = () => {
    onChooseClick(option);
  };

  const className = `${styles[pic]} ${styles.thumb} ${
    marked ? styles.marked : ''
  }`;

  return (
    <div className={className} onClick={handleClick}>
      <p className={styles.text}>{option}</p>
    </div>
  );
};
