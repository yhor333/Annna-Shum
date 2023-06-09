import { FC } from 'react';

import Characteristics from './characteristics/characteristics';
import CharacteristicLayout from './characteristic-layout/characteristic-layout';

const AboutMe: FC = () => {
  return (
    <CharacteristicLayout>
      <Characteristics />
    </CharacteristicLayout>
  );
};

export default AboutMe;
