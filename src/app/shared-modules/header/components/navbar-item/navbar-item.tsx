import { FC } from 'react';
import { Link } from 'react-router-dom';

import Styles from './navbar-item.module.scss';

interface INavbarItem {
  title: string;
  to: string;
}

const NavbarItem: FC<INavbarItem> = ({ title, to }) => {
  return (
    <li className={Styles.navbar__item}>
      <Link className={Styles.item__link} to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavbarItem;
