import React, { useEffect, useState } from 'react';

import Option from './Option';
import { Icons, Type } from '../types';
import { useStateContext } from '../StateContext';
import { ResultType } from '../types/result';

const StepTwoComponent: React.FC = () => {
  const [showComputerOption, setShowComputerOption] = useState(false);
  const [result, setResult] = useState<ResultType>(null);
  const { userOption, computerOption, updateScore, setStep } = useStateContext();

  const userOptionIcon = userOption ? Icons[userOption] : null;
  const computerOptionIcon = computerOption ? Icons[computerOption] : null;

  const winningOptions: Record<Type, Type> = {
    [Type.Paper]: Type.Rock,
    [Type.Rock]: Type.Scissors,
    [Type.Scissors]: Type.Paper,
  };

  const getResult = (): ResultType => {
    if (!userOption || !computerOption) return 'draw';

    if (userOption === computerOption) {
      return 'draw';
    }
  
    return winningOptions[userOption] === computerOption ? 'win' : 'lose';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComputerOption(true);

      let updatedResult = getResult();
      setResult(updatedResult);

      if (updatedResult === 'win') {
        updateScore(1);
      } else if (updatedResult === 'lose') {
        updateScore(-1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="row results">
      <div className={`col col-md-3 ms-md-2 mt-md-4 ${result ? 'slide' : ''}`} id="user-option">
        <h4>You picked</h4>
        <Option customClass={result === 'win' ? 'winner' : null} icon={userOptionIcon} type={userOption} />
      </div>
      <div className="col-12 col-md-3" id="result">
        <div className={`d-grid gap-4 col-8 mx-auto ${result ? 'visible' : 'invisible'}`}>
          <h1>{ result === 'draw' ? result : 'You ' + result}</h1>
          <button className="btn btn-lg btn-block btn-light" type="button" onClick={() => setStep(1)}>Play again</button>
        </div>
      </div>
      <div className={`col col-md-3 me-md-2 mt-md-4 house ${result ? 'slide' : ''}`} id="computer-option">
        <h4>The house picked</h4>
        { 
          !showComputerOption
          ? <div className="option placeholder"></div>
          : <Option customClass={result === 'lose' ? 'winner' : null} icon={computerOptionIcon} type={computerOption} />
        }
      </div>
    </div>
  );
  
}

export default StepTwoComponent;