import { ChangeEvent } from "react";
import { InputState } from "types/stateTypes";

export interface IProps {
  onTabChange: (tab: string) => void;
  onNextClick: () => void;
  onHeightChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onWeightChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputState: InputState;
  tab:string;
}
