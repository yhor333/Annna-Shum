import { FC } from 'react';

import Courses from './components/courses/courses';
import CourseLayout from './components/course-layout/course-layout';

const Course: FC = () => {
  return (
    <CourseLayout>
      <Courses />
    </CourseLayout>
  );
};

export default Course;
