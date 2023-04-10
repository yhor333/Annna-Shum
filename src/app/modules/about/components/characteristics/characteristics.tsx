import { FC, Fragment } from 'react';

import characteristics from '../../constants/characteristics';
import Characteristic from '../characteristic/characteristic';

import Styles from './characteristics-styles.module.scss';

const Courses: FC = () => {
  return (
    <Fragment>
      <h2>Про мене</h2>
      <div className={Styles.characteristicWrap}>
        {characteristics.map((item, index) => (
          <Characteristic
            key={`${item.title} ${index}`}
            title={item.title}
            img={item.img}
            imgDescription={item.imgDescription}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Courses;
