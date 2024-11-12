import { Type } from '../types';

type Input = {
  selectOption?: any;
  icon: string;
  type: Type | null;
  customClass?: string | null;
}

const Option = ({ selectOption, icon, type, customClass }: Input) => {
  return (
    <div className={`option ${type} ${customClass}`} onClick={() => selectOption(type)}>
      <img src={icon} alt={type ?? ''} />
    </div>
  );
}

export default Option;