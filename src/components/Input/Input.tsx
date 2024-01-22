import React, { FC } from 'react';
import styles from './Input.module.css';
import { IProps } from './Input.types';
import { MEASURES, TABS } from 'constants/data';

export const Input: FC<IProps> = (props) => {
  const { onChange, inputState, tab, parameter } = props;

  const measure =
    parameter === 'height'
      ? tab === TABS.imperial
        ? MEASURES.feet
        : MEASURES.cm
      : tab === TABS.imperial
      ? MEASURES.pound
      : MEASURES.kg;
  const placeholder =
    parameter === 'height'
      ? `Height(${tab === TABS.imperial ? MEASURES.feet : MEASURES.cm})`
      : `Current Weight(${
          tab === TABS.imperial ? MEASURES.pound : MEASURES.kg
        })`;

  return (
    <div className={styles.inputWrapper}>
      {inputState.length > 0 && <p>{measure}</p>}
      <input onChange={onChange} value={inputState} placeholder={placeholder} />
    </div>
  );
};
