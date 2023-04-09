import { FC, ReactNode } from 'react';

import Styles from './layout-header.module.scss';

interface ILayoutHeader {
  children: ReactNode;
}

const LayoutHeader: FC<ILayoutHeader> = ({ children }) => {
  return <header className={Styles.container}>{children}</header>;
};

export default LayoutHeader;
