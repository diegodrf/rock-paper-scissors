import { Dispatch, SetStateAction } from "react";
import { Type } from "./types.enum";

export interface StateContextType {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  updateScore: (amount: number) => void;
  userOption: Type | null;
  setUserOption: Dispatch<SetStateAction<Type | null>>;
  computerOption: Type | null;
  setComputerOption: Dispatch<SetStateAction<Type | null>>;
}