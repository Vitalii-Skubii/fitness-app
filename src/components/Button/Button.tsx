import React, { FC } from 'react';
import styles from './Button.module.css';
import { IProps } from './Button.types';

export const Button: FC<IProps> = (props) => {
  const { children, disabled, onClick, header } = props;

  const classNames = header ? styles.headerButton : styles.continueButton;

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
