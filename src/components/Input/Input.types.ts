import { ChangeEvent } from "react";

export interface IProps{
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputState: string;
  tab:string;
  parameter:string;
  autoFocus?:boolean
}