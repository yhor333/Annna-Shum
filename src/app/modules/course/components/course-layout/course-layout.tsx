import { FC, ReactNode } from 'react';

interface ICourseLayout {
  children: ReactNode;
}

const CourseLayout: FC<ICourseLayout> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default CourseLayout;
