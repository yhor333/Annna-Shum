import { FC } from 'react';

import Styles from './service-styles.module.scss';

interface IService {
  img: string;
  imgDescription: string;
  title: string;
}

const Service: FC<IService> = ({ title, img, imgDescription }) => {
  return (
    <div className={Styles.service}>
      <div className={Styles.service__imgWrap}>
        <img className={Styles.imgWrap__img} src={img} alt={imgDescription} />
      </div>
      <h3 className={Styles.service__title}>{title}</h3>
    </div>
  );
};

export default Service;
