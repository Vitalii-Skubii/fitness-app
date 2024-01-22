import React, { FC } from 'react';
import styles from './DestructiveScreen.module.css';
import { BEHAVIORS } from 'constants/data';
import { DestructiveCard } from 'components/DestructiveCard';
import { Button } from 'components/Button';
import { IProps } from './DestructiveScreen.types';

export const DestructiveScreen: FC<IProps> = (props) => {
  const { onChoose, state, handleFinish } = props;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Destructive behaviors</h1>
      <p className={styles.text}>We all have them! Which are yours?</p>
      <div className={styles.cardsWrapper}>
        {BEHAVIORS.map((item) => (
          <DestructiveCard
            key={item.pic}
            pic={item.pic}
            option={item.text}
            onChooseClick={onChoose}
            state={state}
          />
        ))}
      </div>
      <Button disabled={state.choices.length === 0} onClick={handleFinish}>
        Continue
      </Button>
    </div>
  );
};
