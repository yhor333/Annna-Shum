import { FC, ReactNode } from 'react';

interface ICharacteristicLayout {
  children: ReactNode;
}

const CharacteristicLayout: FC<ICharacteristicLayout> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default CharacteristicLayout;
