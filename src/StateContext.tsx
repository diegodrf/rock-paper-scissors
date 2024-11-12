import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StateContextType, Type } from './types';

const defaultContextValue: StateContextType = {
  step: 1,
  score: 0,
  setStep: () => {},
  setScore: () => {},
  updateScore: () => {},
  userOption: null,
  setUserOption: () => {},
  computerOption: null,
  setComputerOption: () => {},
};

const StateContext = createContext<StateContextType>(defaultContextValue);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const currentScore = localStorage.getItem('score');
  const initialScore = currentScore ? parseInt(currentScore) : 0;

  const [step, setStep] = useState<number>(1);
  const [score, setScore] = useState<number>(initialScore);
  const [userOption, setUserOption] = useState<Type | null>(null);
  const [computerOption, setComputerOption] = useState<Type | null>(null);

  const updateScore = (amount: number) => {
    setScore((prevScore) => {
      let newScore = prevScore + amount;
      newScore = newScore < 0 ? 0 : newScore;

      localStorage.setItem('score', `${newScore}`);

      return newScore;
    });
  };

  return (
    <StateContext.Provider value={{ step, setStep, score, setScore, updateScore, userOption, setUserOption, computerOption, setComputerOption }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStep must be used within a StateProvider");
  }
  return context;
};

export default StateContext;
