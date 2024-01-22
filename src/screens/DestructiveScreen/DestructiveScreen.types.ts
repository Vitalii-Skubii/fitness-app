import { IState } from "types/stateTypes";

export interface IProps {
  onChoose: (option:string) => void;
  handleFinish:()=>void;
  state: IState;
}
