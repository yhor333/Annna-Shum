import { FC, Fragment } from 'react';
import { CarouselComponent } from '../modules/carousel';
import Characteristic from '../modules/about/components/characteristics';

const HomePage: FC = () => {
  return (
    <Fragment>
      <CarouselComponent />
      <Characteristic />
    </Fragment>
  );
};

export default HomePage;
