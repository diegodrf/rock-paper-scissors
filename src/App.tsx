import { useStateContext } from './StateContext';
import StepOneComponent from './components/StepOneComponent';
import StepTwoComponent from './components/StepTwoComponent';

import Header from './components/Header';
import Rules from './components/Rules';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const App: React.FC<Props> = (props) => {
  const { step } = useStateContext();

  const renderContent = () => {
    switch (step) {
      case 1:
        return <StepOneComponent />;
      case 2:
        return <StepTwoComponent />;
      default:
        return <StepOneComponent />;
    }
  };

  return (
    <main className="py-5 px-4">
      <Header></Header>
      {renderContent()}
      <Rules />
    </main>
  );
};

export default App;
