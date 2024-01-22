import { IState, InputState } from 'types/stateTypes';
import { TABS } from 'constants/data';
import { useConvertImperials } from 'hooks/useConvertImperials';
import React, { ChangeEvent, useCallback, useState } from 'react';

export const useMultiScreenComponent = () => {
  const initialState: IState = {
    option: '',
    height: null,
    weight: null,
    choices: [] as string[],
  };

  const initialInputState: InputState = {
    height: '',
    weight: '',
  };

  const [screen, setScreen] = useState(1);
  const [state, setState] = useState(initialState);
  const [tabState, setTabState] = useState(TABS.imperial);
  const [inputState, setInputState] = useState(initialInputState);

  const { updatedHeight, updatedWeight } = useConvertImperials(
    tabState,
    inputState
  );

   const handleHeightChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (tabState === TABS.imperial) {
        if (value.length === 1 && /^\d$/.test(value)) {
          setInputState((prevInputState) => ({
            ...prevInputState,
            height: value + "'",
          }));
        } else if (value.length === 2 && /^\d$/.test(value[1])) {
          const inchesValue = Math.min(parseInt(value[1], 10) || 0, 11);
          setInputState((prevInputState) => ({
            ...prevInputState,
            height: `${value[0]}'${inchesValue}`,
          }));
        } else if (
          value.length > 2 &&
          /^\d$/.test(value[value.length - 1]) &&
          value.indexOf("'") > -1
        ) {
          const feet = parseInt(value[0], 10) || 0;
          const inches =
            parseInt(value.substring(value.indexOf("'") + 1), 10) || 0;

          if (feet >= 0 && feet <= 9 && inches >= 0 && inches <= 11) {
            setInputState((prevInputState) => ({
              ...prevInputState,
              height: value,
            }));
          }
        } else if (
          (event.nativeEvent as any).inputType === 'deleteContentBackward'
        ) {
          setInputState((prevInputState) => ({
            ...prevInputState,
            height: '',
          }));
        }
      } else if (tabState === TABS.metric) {
        const metricValue = value.substring(0, 3);
        if (/^\d*$/.test(metricValue)) {
          setInputState((prevInputState) => ({
            ...prevInputState,
            height: metricValue,
          }));
        }
      }
    },
    [tabState]
  );

  const handleWeightChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      const digitValue = value.replace(/\D/g, '').substring(0, 3);

      setInputState((prevInputState) => ({
        ...prevInputState,
        weight: digitValue,
      }));
    },
    []
  );

  const handleGoalScreenNext = (option: string) => {
    setState({
      option,
      height: null,
      weight: null,
      choices: [],
    });
    setScreen(2);
  };

  const handleMeasureScreenNext = () => {
    setState((prev) => ({
      ...prev,
      height: updatedHeight,
      weight: updatedWeight,
      choices: [],
    }));
    setScreen(3);
  };

  const handleDesctructionScreenChoice = (option: string) => {
    setState((prev) => {
      const isOptionInChoices = prev.choices.includes(option);

      if (isOptionInChoices) {
        const updatedChoices = prev.choices.filter((item) => item !== option);
        return { ...prev, choices: updatedChoices };
      } else {
        return { ...prev, choices: [...prev.choices, option] };
      }
    });
  };

const handleFinish=()=>{
  console.log('Congrats, here is your options', state);
}

  const handleBackToPrevious = () => {
    if (screen > 1) {
      setScreen(screen - 1);

      if (screen === 3) {
        setState({
          option: state.option,
          height: null,
          weight: null,
          choices: [],
        });
       
      } else if (screen === 2) {
        setState(initialState);
      }
    } else {
      setState(initialState);
    }
  };

  const onTabChange = (tab: string) => {
    setTabState(tab);
    setInputState(initialInputState);
  };

  return {
    handleGoalScreenNext,
    handleMeasureScreenNext,
    handleDesctructionScreenChoice,
    handleBackToPrevious,
    handleHeightChange,
    handleWeightChange,
    handleFinish,
    onTabChange,
    inputState,
    screen,
    state,
    tabState
  };
};
