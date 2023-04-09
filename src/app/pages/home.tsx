import { FC, Fragment } from 'react';
import { CarouselComponent } from '../modules/carousel';
import { Course } from '../modules/course';

const HomePage: FC = () => {
  return (
    <Fragment>
      <CarouselComponent />
      <Course />
    </Fragment>
  );
};

export default HomePage;
