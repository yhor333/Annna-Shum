import { FC, Fragment } from 'react';

import { CarouselComponent } from '../modules/carousel';
import { AboutMe } from '../modules/about-me';
import { Service } from '../modules/service';

const HomePage: FC = () => {
  return (
    <Fragment>
      <CarouselComponent />
      <AboutMe />
      <Service />
    </Fragment>
  );
};

export default HomePage;
