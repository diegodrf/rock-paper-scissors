import React, { useEffect } from 'react';
import { useStateContext } from "../StateContext";


const Header: React.FC = () => {
  const { score } = useStateContext();
  const logo = require('../assets/images/logo.svg');

  useEffect(() => {
    console.log('Updated score:', score);
  }, [score]);

  return (
    <div className="row">
      <div className="col">
        <div className="box py-2 py-lg-3">
          <img className="ms-3 ms-lg-4" src={logo} alt="logo" />
          <div className="score px-4 px-lg-5 py-2 my-2">
            <h6>Score</h6>
            <h1>{score}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;