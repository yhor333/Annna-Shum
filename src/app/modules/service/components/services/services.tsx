import { FC } from 'react';

import Service from '../service/service';

import { services } from '../../constants/services';
import Styles from './services-styles.module.scss';

const Services: FC = () => {
  return (
    <section className={`${Styles.servicesWrap} container`}>
      {services.map((service) => (
        <Service
          key={service.title}
          img={service.img}
          imgDescription={service.imgDescription}
          title={service.title}
        />
      ))}
    </section>
  );
};

export default Services;
