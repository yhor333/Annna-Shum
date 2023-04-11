import { FC } from 'react';

import Service from '../service/service';

import { services } from '../../constants/services';
import Styles from './services-styles.module.scss';

const Services: FC = () => {
  return (
    <section className={`container`}>
      <h2 className={Styles.servicesTitle}>Послуги</h2>
      <div className={Styles.servicesWrap}>
        {services.map((service) => (
          <Service
            key={service.title}
            img={service.img}
            imgDescription={service.imgDescription}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
