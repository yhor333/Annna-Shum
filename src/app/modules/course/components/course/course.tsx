import { FC } from 'react';

import CustomButton from '../../../../ui/custom-button/custom-button';

import Styles from './course-styles.module.scss';

interface ICourse {
  title: string;
  img: string;
  imgDescription: string;
}

const Course: FC<ICourse> = ({ title, img, imgDescription }) => {
  return (
    <div className={Styles.course}>
      <div className={Styles.course__imgWrap}>
        <img
          className={Styles.imgWrap__img}
          src={img}
          alt={imgDescription}
        ></img>
      </div>
      <div className={Styles.course__content}>
        <p className={Styles.content__title}>{title}</p>
        <CustomButton title="Перейти" />
      </div>
    </div>
  );
};

export default Course;
