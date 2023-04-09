import { FC } from 'react';

import NavbarItem from '../navbar-item/navbar-item';

import Styles from './navbar-header.module.scss';

import pages from '../../constants/pages';

const NavbarHeader: FC = () => {
  return (
    <nav className={Styles.navbar}>
      <ul className={Styles.navbar__list}>
        {pages.map((page, index) => (
          <NavbarItem
            key={`${page.name} ${index}`}
            title={page.name}
            to={page.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarHeader;
