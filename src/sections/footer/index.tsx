import { memo } from 'react';
import styles from './styles.module.css';

const Footer = () => (
  <a href="https://github.com/gantelo/cv-maker" target="_blank" className={styles.footer}>
    GitHub - Gabriel Antelo
  </a>
);

export default memo(Footer);
