import { FC } from 'react';

import FooterTelephone from './footer-telephone/footer-telephone';
import FooterWrite from './footer-write/footer-write';
import FooterMedia from './footer-media/footer-media';
import FooterTxt from './footer-txt/footer-txt';

import Styles from './footer-styles.module.scss';

const Footer: FC = () => {
  return (
    <footer className={Styles.wrap}>
      <div className={`container ${Styles.footer}`}>
        <FooterTelephone />
        <FooterWrite />
        <FooterMedia />
        <FooterTxt />
      </div>
    </footer>
  );
};

export default Footer;
