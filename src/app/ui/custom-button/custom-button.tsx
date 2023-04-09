import { FC } from 'react';

import Styles from './custom-button-styles.module.scss';

interface ICustomButton {
  title: string;
}

const CustomButton: FC<ICustomButton> = ({ title }) => {
  return <button className={Styles.button}>{title}</button>;
};

export default CustomButton;
