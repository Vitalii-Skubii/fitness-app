import React, { FC } from 'react';
import styles from './MeasureScreen.module.css';
import { Button } from 'components/Button/Button';
import TabsComponent from 'components/Tabs/Tabs';
import { IProps } from './MeasureScreen.types';
import { Input } from 'components/Input/Input';

export const MeasureScreen: FC<IProps> = (props) => {
  const {
    onTabChange,
    onNextClick,
    onHeightChange,
    onWeightChange,
    inputState,
    tab,
  } = props;

  console.log(inputState);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabWrapper}>
        <TabsComponent onTabChange={onTabChange} tab={tab} />
      </div>
      <Input
        inputState={inputState.height}
        onChange={onHeightChange}
        parameter="height"
        tab={tab}
      />
      <Input
        inputState={inputState.weight}
        onChange={onWeightChange}
        parameter="weight"
        tab={tab}
      />
      <h1 className={styles.title}>Measure Yourself</h1>
      <p className={styles.text}>What are your height and body weight? </p>
      <Button
        disabled={
          inputState.height.length === 0 || inputState.weight.length === 0
        }
        onClick={onNextClick}
      >
        Continue
      </Button>
    </div>
  );
};
