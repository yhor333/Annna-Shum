import { FC, Fragment } from 'react';

import courses from '../../constants/courses';
import Course from '../course/course';

import Styles from './courses-styles.module.scss';

const Courses: FC = () => {
  return (
    <Fragment>
      <h2>Курси</h2>
      <div className={Styles.courseWrap}>
        {courses.map((item) => (
          <Course
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
