import { InputState } from 'types/stateTypes';
import { TABS } from 'constants/data';

const convertHeightToCm = (feet: number, inches: number): number => {
  const totalInches = feet * 12 + inches;
  const heightInCm = totalInches * 2.54;
  return heightInCm;
};

const convertWeightToKg = (pounds: number): number => {
  const weightInKg = pounds * 0.453592;
  return weightInKg;
};

export const useConvertImperials = (
  tabState: string,
  inputState: InputState
) => {
  let updatedHeight: number | null = null,
    updatedWeight: number | null = null;

  if (tabState === TABS.imperial) {
    const [feet, inches] = inputState.height.split("'");
    const heightInCm = convertHeightToCm(
      parseInt(feet, 10) || 0,
      parseInt(inches, 10) || 0
    );
    updatedHeight = heightInCm;

    const weightInKg = convertWeightToKg(parseInt(inputState.weight, 10) || 0);
    updatedWeight = Math.round(weightInKg);
  } else if (tabState === TABS.metric) {
    updatedHeight = Math.round(parseInt(inputState.height, 10) || 0);
    updatedWeight = Math.round(parseInt(inputState.weight, 10) || 0);
  }

  return {
    updatedHeight,
    updatedWeight,
  };
};
