import React from 'react';

import { Icons, Type } from '../types';
import Option from './Option';

import { useStateContext } from '../StateContext';



const StepOneComponent: React.FC = () => {
  const { setStep, setUserOption, setComputerOption} = useStateContext();

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const setSelectedOption = (selected: Type) => {
    const computerOption = getComputerOption();
    setStep(2);
    setUserOption(selected);
    setComputerOption(computerOption);
  }

  function getComputerOption() {
    const index = getRandomInt(0, 2);
    const options = Object.values(Type);
    return options[index];
  }

  return (
    <div className="row step1">
      <div className="col offset-xl-2 col-xl-8 mt-5">
        <div className="box-options mt-5">
        <div className="box-option">
          <Option icon={Icons[Type.Paper]} type={Type.Paper} selectOption={setSelectedOption} />
        </div>
        <div className="box-option">
          <Option icon={Icons[Type.Scissors]} type={Type.Scissors} selectOption={setSelectedOption} />
        </div>
        <div className="box-option">
          <Option icon={Icons[Type.Rock]} type={Type.Rock} selectOption={setSelectedOption} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default StepOneComponent;
