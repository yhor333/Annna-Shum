import { FC } from 'react';

import CustomButton from '../../../../ui/custom-button/custom-button';

import Styles from './characteristic-styles.module.scss';

interface ICharacteristic {
  title: string;
  img: string;
  imgDescription: string;
}

const Characteristic: FC<ICharacteristic> = ({
  title,
  img,
  imgDescription,
}) => {
  return (
    <div className={Styles.characteristic}>
      <div className={Styles.characteristic__imgWrap}>
        <img
          className={Styles.imgWrap__img}
          src={img}
          alt={imgDescription}
        ></img>
      </div>
      <div className={Styles.characteristic__content}>
        <p className={Styles.content__title}>{title}</p>
        <CustomButton title="Перейти" />
      </div>
    </div>
  );
};

export default Characteristic;
