import { FC, ReactNode } from 'react';

interface ICharacteristicLayout {
  children: ReactNode;
}

const CharacteristicLayout: FC<ICharacteristicLayout> = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default CharacteristicLayout;
